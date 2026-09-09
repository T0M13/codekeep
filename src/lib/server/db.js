import Database from 'better-sqlite3';
import bcrypt from 'bcryptjs';
import path from 'path';

let _db;

function getDb() {
  if (_db) return _db;

  const dbPath = process.env.DB_PATH || path.join(process.cwd(), 'data', 'codekeep.db');
  _db = new Database(dbPath);

  _db.pragma('journal_mode = WAL');
  _db.pragma('foreign_keys = ON');

  _db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      display_name TEXT,
      xp INTEGER DEFAULT 0,
      streak_days INTEGER DEFAULT 0,
      last_activity DATE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS progress (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      topic TEXT NOT NULL,
      lesson TEXT NOT NULL,
      completed BOOLEAN DEFAULT 0,
      score INTEGER DEFAULT 0,
      completed_at DATETIME,
      FOREIGN KEY (user_id) REFERENCES users(id),
      UNIQUE(user_id, topic, lesson)
    );

    CREATE TABLE IF NOT EXISTS challenge_attempts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      topic TEXT NOT NULL,
      lesson TEXT NOT NULL,
      challenge_id TEXT NOT NULL,
      passed BOOLEAN DEFAULT 0,
      attempts INTEGER DEFAULT 1,
      last_attempt DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `);

  // Seed default accounts if they don't exist
  const seedUser = (username, email, password, displayName) => {
    const exists = _db.prepare('SELECT id FROM users WHERE username = ?').get(username);
    if (!exists) {
      const hash = bcrypt.hashSync(password, 10);
      _db.prepare('INSERT INTO users (username, email, password_hash, display_name) VALUES (?, ?, ?, ?)').run(username, email, hash, displayName);
    }
  };

  const adminUser = process.env.ADMIN_USERNAME || 'admin';
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@codekeep.dev';
  const adminPass = process.env.ADMIN_PASSWORD || 'changeme';
  const adminDisplay = process.env.ADMIN_DISPLAY_NAME || 'Admin';
  seedUser(adminUser, adminEmail, adminPass, adminDisplay);
  seedUser('testuser', 'test@codekeep.dev', 'testpass', 'Test User');

  return _db;
}

export default new Proxy({}, {
  get(_, prop) {
    const db = getDb();
    const val = db[prop];
    return typeof val === 'function' ? val.bind(db) : val;
  }
});
