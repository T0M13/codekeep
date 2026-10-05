import { redirect } from '@sveltejs/kit';
import db from '$lib/server/db.js';

export function load({ locals }) {
  if (!locals.user?.is_admin) throw redirect(302, '/');

  const users = db.prepare(`
    SELECT id, username, email, display_name, is_admin, xp, streak_days, created_at
    FROM users ORDER BY created_at DESC
  `).all();

  return { users };
}
