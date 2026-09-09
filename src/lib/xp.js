export const XP_PER_LESSON = 25;
export const XP_PER_CHALLENGE = 50;
export const XP_STREAK_BONUS = 10;

export function getLevel(xp) {
  // Level formula: each level requires progressively more XP
  // Level 1: 0 XP, Level 2: 100 XP, Level 3: 250 XP, etc.
  if (xp < 100) return 1;
  return Math.floor(1 + Math.sqrt(xp / 50));
}

export function getXPForLevel(level) {
  if (level <= 1) return 0;
  return (level - 1) * (level - 1) * 50;
}

export function getLevelProgress(xp) {
  const level = getLevel(xp);
  const currentLevelXP = getXPForLevel(level);
  const nextLevelXP = getXPForLevel(level + 1);
  const progress = (xp - currentLevelXP) / (nextLevelXP - currentLevelXP);
  return {
    level,
    xp,
    currentLevelXP,
    nextLevelXP,
    progress: Math.min(1, Math.max(0, progress)),
    xpNeeded: nextLevelXP - xp
  };
}

export function getLevelTitle(level) {
  const titles = [
    'Newcomer', 'Apprentice', 'Student', 'Coder', 'Developer',
    'Engineer', 'Architect', 'Master', 'Guru', 'Legend',
    'Mythic', 'Transcendent', 'Omniscient'
  ];
  return titles[Math.min(level - 1, titles.length - 1)];
}
