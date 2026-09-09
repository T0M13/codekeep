import { redirect } from '@sveltejs/kit';
import db from '$lib/server/db.js';

export function load({ locals }) {
  if (!locals.user) throw redirect(303, '/login');

  const completedLessons = db.prepare('SELECT topic, lesson, completed_at FROM progress WHERE user_id = ? AND completed = 1 ORDER BY completed_at DESC').all(locals.user.id);
  const challengesPassed = db.prepare('SELECT COUNT(*) as count FROM challenge_attempts WHERE user_id = ? AND passed = 1').get(locals.user.id);
  const topicStats = db.prepare(`
    SELECT topic, COUNT(*) as completed
    FROM progress WHERE user_id = ? AND completed = 1
    GROUP BY topic
  `).all(locals.user.id);

  return {
    completedLessons,
    challengesPassed: challengesPassed.count,
    topicStats
  };
}
