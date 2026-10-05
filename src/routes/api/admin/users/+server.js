import { json } from '@sveltejs/kit';
import db from '$lib/server/db.js';
import { hashPassword } from '$lib/server/auth.js';

export async function GET({ locals }) {
  if (!locals.user?.is_admin) return json({ error: 'Unauthorized' }, { status: 403 });

  const users = db.prepare(`
    SELECT id, username, email, display_name, is_admin, xp, streak_days, created_at
    FROM users ORDER BY created_at DESC
  `).all();

  return json({ users });
}

export async function POST({ request, locals }) {
  if (!locals.user?.is_admin) return json({ error: 'Unauthorized' }, { status: 403 });

  const { username, email, password, displayName } = await request.json();

  if (!username || !email || !password) {
    return json({ error: 'Username, email, and password are required' }, { status: 400 });
  }

  if (username.length < 3) return json({ error: 'Username must be at least 3 characters' }, { status: 400 });
  if (password.length < 4) return json({ error: 'Password must be at least 4 characters' }, { status: 400 });

  const existing = db.prepare('SELECT id FROM users WHERE username = ? OR email = ?').get(username, email);
  if (existing) return json({ error: 'Username or email already taken' }, { status: 409 });

  const hash = hashPassword(password);
  const result = db.prepare('INSERT INTO users (username, email, password_hash, display_name) VALUES (?, ?, ?, ?)').run(username, email, hash, displayName || username);

  return json({ id: result.lastInsertRowid, username });
}

export async function DELETE({ request, locals }) {
  if (!locals.user?.is_admin) return json({ error: 'Unauthorized' }, { status: 403 });

  const { id } = await request.json();
  if (id === locals.user.id) return json({ error: 'Cannot delete yourself' }, { status: 400 });

  db.prepare('DELETE FROM challenge_attempts WHERE user_id = ?').run(id);
  db.prepare('DELETE FROM progress WHERE user_id = ?').run(id);
  db.prepare('DELETE FROM users WHERE id = ?').run(id);

  return json({ ok: true });
}
