<script>
  import { getLevelProgress, getLevelTitle } from '$lib/xp.js';
  import { getTopics } from '$lib/content.js';

  let { data } = $props();
  const { user, completedLessons, challengesPassed, topicStats } = data;
  const levelInfo = getLevelProgress(user.xp);
  const title = getLevelTitle(levelInfo.level);
  const topics = getTopics();

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    window.location.href = '/';
  }
</script>

<svelte:head><title>Profile - CodeKeep</title></svelte:head>

<div class="max-w-4xl mx-auto px-4 py-12">
  <!-- Profile header -->
  <div class="card !p-8 mb-6">
    <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6">
      <div class="w-20 h-20 bg-brand-500/20 text-brand-400 rounded-2xl flex items-center justify-center text-3xl font-bold">
        {user.display_name?.charAt(0).toUpperCase() || 'U'}
      </div>
      <div class="flex-1">
        <h1 class="text-2xl font-bold text-white">{user.display_name || user.username}</h1>
        <p class="text-surface-200/60 text-sm">@{user.username}</p>
        <div class="flex items-center gap-2 mt-2">
          <span class="badge bg-brand-500/20 text-brand-400">Level {levelInfo.level}</span>
          <span class="badge bg-surface-700 text-surface-200">{title}</span>
        </div>
      </div>
      <button onclick={handleLogout} class="btn-secondary text-sm">Log out</button>
    </div>
  </div>

  <!-- Stats grid -->
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
    <div class="card text-center">
      <p class="text-3xl font-bold text-brand-400">{user.xp}</p>
      <p class="text-surface-200/50 text-sm mt-1">Total XP</p>
    </div>
    <div class="card text-center">
      <p class="text-3xl font-bold text-green-400">{completedLessons.length}</p>
      <p class="text-surface-200/50 text-sm mt-1">Lessons Done</p>
    </div>
    <div class="card text-center">
      <p class="text-3xl font-bold text-yellow-400">{challengesPassed}</p>
      <p class="text-surface-200/50 text-sm mt-1">Challenges Passed</p>
    </div>
    <div class="card text-center">
      <p class="text-3xl font-bold text-orange-400">{user.streak_days}</p>
      <p class="text-surface-200/50 text-sm mt-1">Day Streak</p>
    </div>
  </div>

  <!-- Level progress -->
  <div class="card mb-6">
    <div class="flex items-center justify-between mb-3">
      <h2 class="font-bold text-white">Level {levelInfo.level} - {title}</h2>
      <span class="text-sm text-surface-200/50">{levelInfo.xpNeeded} XP to next level</span>
    </div>
    <div class="w-full h-3 bg-surface-800 rounded-full overflow-hidden">
      <div class="h-full bg-gradient-to-r from-brand-500 to-blue-400 rounded-full transition-all duration-700" style="width: {levelInfo.progress * 100}%"></div>
    </div>
    <div class="flex justify-between text-xs text-surface-200/40 mt-1.5">
      <span>Lv {levelInfo.level} ({levelInfo.currentLevelXP} XP)</span>
      <span>Lv {levelInfo.level + 1} ({levelInfo.nextLevelXP} XP)</span>
    </div>
  </div>

  <!-- Topic breakdown -->
  {#if topicStats.length > 0}
    <div class="card">
      <h2 class="font-bold text-white mb-4">Progress by Topic</h2>
      <div class="space-y-3">
        {#each topicStats as stat}
          {@const topic = topics.find(t => t.slug === stat.topic)}
          {#if topic}
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 {topic.colors.icon} rounded-lg flex items-center justify-center text-white font-mono text-xs font-bold">{topic.icon}</div>
              <span class="text-white font-medium flex-1">{topic.title}</span>
              <span class="text-surface-200/50 text-sm">{stat.completed} lessons</span>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  {/if}
</div>
