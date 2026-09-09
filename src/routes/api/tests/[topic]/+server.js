import { json } from '@sveltejs/kit';
import db from '$lib/server/db.js';
import { getQuiz } from '$lib/server/quizzes.js';
import { XP_PER_CHALLENGE } from '$lib/xp.js';

export async function POST({ params, request, locals }) {
  const quiz = getQuiz(params.topic);
  if (!quiz) return json({ error: 'Test not found' }, { status: 404 });

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request' }, { status: 400 });
  }

  const question = quiz.questions.find((item) => item.id === body.questionId);
  if (!question || !Number.isInteger(body.answer)) {
    return json({ error: 'Question and answer required' }, { status: 400 });
  }

  const correct = body.answer === question.answer;
  let xpEarned = 0;

  if (correct && locals.user) {
    const challengeId = `quiz-${question.id}`;
    const existing = db.prepare(
      'SELECT id, passed FROM challenge_attempts WHERE user_id = ? AND topic = ? AND lesson = ? AND challenge_id = ?'
    ).get(locals.user.id, params.topic, 'test', challengeId);

    if (!existing) {
      db.prepare(
        'INSERT INTO challenge_attempts (user_id, topic, lesson, challenge_id, passed) VALUES (?, ?, ?, ?, 1)'
      ).run(locals.user.id, params.topic, 'test', challengeId);
      xpEarned = XP_PER_CHALLENGE;
    } else if (!existing.passed) {
      db.prepare(
        'UPDATE challenge_attempts SET passed = 1, last_attempt = CURRENT_TIMESTAMP WHERE id = ?'
      ).run(existing.id);
      xpEarned = XP_PER_CHALLENGE;
    }

    if (xpEarned) {
      const today = new Date().toISOString().slice(0, 10);
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      const user = db.prepare('SELECT last_activity, streak_days FROM users WHERE id = ?').get(locals.user.id);
      const streak = user.last_activity === today
        ? user.streak_days
        : user.last_activity === yesterday ? user.streak_days + 1 : 1;

      db.prepare('UPDATE users SET xp = xp + ?, streak_days = ?, last_activity = ? WHERE id = ?')
        .run(xpEarned, streak, today, locals.user.id);
    }
  }

  return json({
    correct,
    correctAnswer: correct ? undefined : question.answer,
    explanation: question.explanation,
    reference: question.reference,
    xpEarned
  });
}
