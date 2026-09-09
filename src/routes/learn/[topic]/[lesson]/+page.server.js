import { error } from '@sveltejs/kit';
import { getTopic } from '$lib/content.js';
import { marked } from 'marked';
import fs from 'fs';
import path from 'path';

export function load({ params, locals }) {
  const topic = getTopic(params.topic);
  if (!topic) throw error(404, 'Topic not found');

  const contentDir = path.join(process.cwd(), 'src', 'content', params.topic);
  const lessonPath = path.join(contentDir, `${params.lesson}.md`);

  if (!fs.existsSync(lessonPath)) throw error(404, 'Lesson not found');

  const raw = fs.readFileSync(lessonPath, 'utf-8');

  // Parse frontmatter (simple YAML-like)
  let frontmatter = {};
  let content = raw;
  if (raw.startsWith('---')) {
    const end = raw.indexOf('---', 3);
    if (end !== -1) {
      const fm = raw.slice(3, end).trim();
      fm.split('\n').forEach(line => {
        const [key, ...rest] = line.split(':');
        if (key && rest.length) frontmatter[key.trim()] = rest.join(':').trim();
      });
      content = raw.slice(end + 3).trim();
    }
  }

  // Extract code challenges (```challenge blocks)
  const challenges = [];
  content = content.replace(/```challenge\s*\n([\s\S]*?)```/g, (_, block) => {
    const challenge = {};
    let currentKey = null;
    block.split('\n').forEach(line => {
      const match = line.match(/^@(\w+)\s*(.*)/);
      if (match) {
        currentKey = match[1];
        challenge[currentKey] = match[2] || '';
      } else if (currentKey) {
        challenge[currentKey] = (challenge[currentKey] ? challenge[currentKey] + '\n' : '') + line;
      }
    });
    challenge.id = `challenge-${challenges.length}`;
    challenges.push(challenge);
    return `<div data-challenge="${challenge.id}"></div>`;
  });

  const html = marked(content);

  // Get lesson meta
  const metaPath = path.join(contentDir, '_meta.json');
  let lessonMeta = {};
  let prevLesson = null;
  let nextLesson = null;
  if (fs.existsSync(metaPath)) {
    const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
    const idx = meta.lessons.findIndex(l => l.slug === params.lesson);
    if (idx >= 0) {
      lessonMeta = meta.lessons[idx];
      if (idx > 0) prevLesson = meta.lessons[idx - 1];
      if (idx < meta.lessons.length - 1) nextLesson = meta.lessons[idx + 1];
    }
  }

  return {
    topic,
    lesson: {
      slug: params.lesson,
      ...lessonMeta,
      ...frontmatter,
      html,
      challenges
    },
    prevLesson,
    nextLesson
  };
}
