import { error } from '@sveltejs/kit';
import db from '$lib/server/db.js';
import { getTopic } from '$lib/content.js';
import { getQuiz } from '$lib/server/quizzes.js';

export function load({ params, locals }) {
  const quiz = getQuiz(params.topic);
  const topic = getTopic(params.topic);
  if (!quiz || !topic) throw error(404, 'Test not found');

  let completedIds = [];
  if (locals.user) {
    completedIds = db.prepare(
      'SELECT challenge_id FROM challenge_attempts WHERE user_id = ? AND topic = ? AND lesson = ? AND passed = 1'
    ).all(locals.user.id, params.topic, 'test').map((row) => row.challenge_id.replace(/^quiz-/, ''));
  }

  return {
    topic,
    user: locals.user,
    completedIds,
    quiz: {
      title: quiz.title,
      description: quiz.description,
      questions: quiz.questions.map(({ answer, ...question }) => question)
    }
  };
}
