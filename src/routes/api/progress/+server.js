import { json } from '@sveltejs/kit';
import db from '$lib/server/db.js';
import { XP_PER_LESSON, XP_PER_CHALLENGE } from '$lib/xp.js';

export async function POST({ request, locals }) {
  if (!locals.user) {
    return json({ error: 'Not authenticated' }, { status: 401 });
  }

  const { topic, lesson, challengeId, completed } = await request.json();

  if (!topic || !lesson) {
    return json({ error: 'Topic and lesson required' }, { status: 400 });
  }

  let xpEarned = 0;

  // Record challenge attempt
  if (challengeId) {
    const existing = db.prepare('SELECT id, passed FROM challenge_attempts WHERE user_id = ? AND topic = ? AND lesson = ? AND challenge_id = ?')
      .get(locals.user.id, topic, lesson, challengeId);

    if (existing) {
      if (!existing.passed) {
        db.prepare('UPDATE challenge_attempts SET passed = 1, last_attempt = CURRENT_TIMESTAMP WHERE id = ?').run(existing.id);
        xpEarned += XP_PER_CHALLENGE;
      }
    } else {
      db.prepare('INSERT INTO challenge_attempts (user_id, topic, lesson, challenge_id, passed) VALUES (?, ?, ?, ?, 1)')
        .run(locals.user.id, topic, lesson, challengeId);
      xpEarned += XP_PER_CHALLENGE;
    }
  }

  // Record lesson completion
  if (completed) {
    const existing = db.prepare('SELECT id, completed FROM progress WHERE user_id = ? AND topic = ? AND lesson = ?')
      .get(locals.user.id, topic, lesson);

    if (existing) {
      if (!existing.completed) {
        db.prepare('UPDATE progress SET completed = 1, completed_at = CURRENT_TIMESTAMP WHERE id = ?').run(existing.id);
        xpEarned += XP_PER_LESSON;
      }
    } else {
      db.prepare('INSERT INTO progress (user_id, topic, lesson, completed, completed_at) VALUES (?, ?, ?, 1, CURRENT_TIMESTAMP)')
        .run(locals.user.id, topic, lesson);
      xpEarned += XP_PER_LESSON;
    }
  }

  // Update user XP and streak
  if (xpEarned > 0) {
    const today = new Date().toISOString().slice(0, 10);
    const user = db.prepare('SELECT last_activity, streak_days FROM users WHERE id = ?').get(locals.user.id);

    let newStreak = user.streak_days;
    if (user.last_activity !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      newStreak = user.last_activity === yesterday ? user.streak_days + 1 : 1;
    }

    db.prepare('UPDATE users SET xp = xp + ?, streak_days = ?, last_activity = ? WHERE id = ?')
      .run(xpEarned, newStreak, today, locals.user.id);
  }

  return json({ success: true, xpEarned });
}
