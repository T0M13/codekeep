import { json } from '@sveltejs/kit';
import { loginUser, createToken } from '$lib/server/auth.js';

export async function POST({ request, cookies }) {
  const { username, password } = await request.json();

  if (!username || !password) {
    return json({ error: 'Username and password required' }, { status: 400 });
  }

  const user = loginUser(username, password);
  if (!user) {
    return json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const token = createToken(user);
  cookies.set('token', token, { path: '/', httpOnly: true, sameSite: 'lax', maxAge: 60 * 60 * 24 * 30 });

  return json({ success: true, user: { id: user.id, username: user.username } });
}
