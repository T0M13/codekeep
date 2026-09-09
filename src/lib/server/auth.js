import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import db from './db.js';

const JWT_SECRET = process.env.JWT_SECRET || 'codekeep-dev-secret-change-in-prod';
const TOKEN_EXPIRY = '30d';

export function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
}

export function verifyPassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}

export function createToken(user) {
  return jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

export function getUserFromToken(token) {
  const payload = verifyToken(token);
  if (!payload) return null;
  return db.prepare('SELECT id, username, email, display_name, xp, streak_days, last_activity, created_at FROM users WHERE id = ?').get(payload.id);
}

export function createUser(username, email, password) {
  const hash = hashPassword(password);
  const result = db.prepare('INSERT INTO users (username, email, password_hash, display_name) VALUES (?, ?, ?, ?)').run(username, email, hash, username);
  return result.lastInsertRowid;
}

export function loginUser(username, password) {
  const user = db.prepare('SELECT * FROM users WHERE username = ? OR email = ?').get(username, username);
  if (!user || !verifyPassword(password, user.password_hash)) return null;
  return user;
}
