import { getTopic } from '$lib/content.js';
import { quizzes } from '$lib/server/quizzes.js';

export function load() {
  return {
    quizzes: Object.entries(quizzes).map(([slug, quiz]) => ({
      slug,
      title: quiz.title,
      description: quiz.description,
      questionCount: quiz.questions.length,
      topic: getTopic(slug)
    }))
  };
}
