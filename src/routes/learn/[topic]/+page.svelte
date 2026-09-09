<script>
  let { data } = $props();
  const { topic, lessons, progress } = data;

  function isCompleted(lessonSlug) {
    return progress.some(p => p.lesson === lessonSlug && p.completed);
  }
</script>

<svelte:head>
  <title>{topic.title} - CodeKeep</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-12">
  <!-- Topic header -->
  <div class="flex items-center gap-4 mb-10">
    <div class="w-16 h-16 {topic.colors.icon} rounded-2xl flex items-center justify-center text-white font-mono font-bold text-xl">
      {topic.icon}
    </div>
    <div>
      <h1 class="text-3xl font-bold text-white">{topic.title}</h1>
      <p class="text-surface-200/70">{topic.description}</p>
    </div>
  </div>

  <!-- Lesson list -->
  {#if lessons.length === 0}
    <div class="card text-center py-16">
      <p class="text-surface-200/60 text-lg mb-2">Lessons coming soon!</p>
      <p class="text-surface-200/40 text-sm">This topic is being written. Check back later or contribute on GitHub.</p>
    </div>
  {:else}
    <div class="space-y-3">
      {#each lessons as lesson, i}
        <a href="/learn/{topic.slug}/{lesson.slug}" class="card-hover flex items-center gap-4 !p-5 group">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold text-sm transition-colors
            {isCompleted(lesson.slug) ? 'bg-green-500/20 text-green-400' : 'bg-surface-800 text-surface-200/60 group-hover:bg-brand-500/20 group-hover:text-brand-400'}">
            {#if isCompleted(lesson.slug)}
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            {:else}
              {i + 1}
            {/if}
          </div>
          <div class="flex-1 min-w-0">
            <h3 class="font-semibold text-white group-hover:text-brand-300 transition-colors">{lesson.title}</h3>
            {#if lesson.description}
              <p class="text-surface-200/50 text-sm truncate">{lesson.description}</p>
            {/if}
          </div>
          <div class="flex items-center gap-2 text-surface-200/30">
            {#if lesson.xp}
              <span class="badge bg-brand-500/10 text-brand-400">+{lesson.xp} XP</span>
            {/if}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </div>
        </a>
      {/each}
    </div>
  {/if}
</div>
