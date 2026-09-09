import db from '$lib/server/db.js';
import { getLevelProgress, getLevelTitle } from '$lib/xp.js';
import fs from 'fs';
import path from 'path';

export function load({ locals }) {
  // Count available lessons per topic
  const contentDir = path.join(process.cwd(), 'src', 'content');
  const lessonCounts = {};
  if (fs.existsSync(contentDir)) {
    for (const topic of fs.readdirSync(contentDir)) {
      const metaPath = path.join(contentDir, topic, '_meta.json');
      if (fs.existsSync(metaPath)) {
        const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
        lessonCounts[topic] = meta.lessons?.length || 0;
      }
    }
  }

  // User-specific data
  let userStats = null;
  if (locals.user) {
    const completedCount = db.prepare('SELECT COUNT(*) as c FROM progress WHERE user_id = ? AND completed = 1').get(locals.user.id).c;
    const challengeCount = db.prepare('SELECT COUNT(*) as c FROM challenge_attempts WHERE user_id = ? AND passed = 1').get(locals.user.id).c;
    const recentLessons = db.prepare(`
      SELECT topic, lesson, completed_at FROM progress
      WHERE user_id = ? AND completed = 1
      ORDER BY completed_at DESC LIMIT 3
    `).all(locals.user.id);
    const levelInfo = getLevelProgress(locals.user.xp);

    userStats = {
      ...levelInfo,
      title: getLevelTitle(levelInfo.level),
      completedCount,
      challengeCount,
      streak: locals.user.streak_days,
      recentLessons
    };
  }

  return { lessonCounts, userStats };
}
