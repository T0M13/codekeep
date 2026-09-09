import { error } from '@sveltejs/kit';
import { getTopic } from '$lib/content.js';
import db from '$lib/server/db.js';
import fs from 'fs';
import path from 'path';

export function load({ params, locals }) {
  const topic = getTopic(params.topic);
  if (!topic) throw error(404, 'Topic not found');

  const contentDir = path.join(process.cwd(), 'src', 'content', params.topic);
  let lessons = [];

  if (fs.existsSync(contentDir)) {
    const metaPath = path.join(contentDir, '_meta.json');
    if (fs.existsSync(metaPath)) {
      const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
      lessons = meta.lessons || [];
    }
  }

  let progress = [];
  if (locals.user) {
    progress = db.prepare('SELECT lesson, completed, score FROM progress WHERE user_id = ? AND topic = ?').all(locals.user.id, params.topic);
  }

  return { topic, lessons, progress };
}
