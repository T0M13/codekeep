<script>
  let { data } = $props();

  let topic = $derived(data.topic);
  let lessons = $derived(data.lessons);
</script>

<svelte:head>
  <title>{topic.title} - CodeKeep</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8 sm:py-12">
  <!-- Topic header -->
  <div class="flex items-center gap-2 text-sm text-surface-200/50 mb-6">
    <a href="/learn" class="hover:text-brand-400 transition-colors">Learn</a>
    <span>/</span>
    <span class="{topic.colors.text}">{topic.title}</span>
  </div>

  <div class="flex items-center gap-4 mb-8">
    <div class="w-14 h-14 {topic.colors.icon} rounded-2xl flex items-center justify-center text-white p-3">
      {@html topic.icon}
    </div>
    <div>
      <h1 class="text-2xl sm:text-3xl font-bold text-white">{topic.title}</h1>
      <p class="text-surface-200/60 text-sm">{topic.description}</p>
    </div>
  </div>

  <!-- Lesson list -->
  {#if lessons.length === 0}
    <div class="card text-center py-12">
      <p class="text-surface-200/50 mb-1">Coming soon</p>
      <p class="text-surface-200/30 text-sm">This topic is being written.</p>
    </div>
  {:else}
    <div class="space-y-2">
      {#each lessons as lesson, i}
        <a href="/learn/{topic.slug}/{lesson.slug}" class="card-hover flex items-center gap-4 !p-4 group">
          <div class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm font-medium bg-surface-800 text-surface-200/40">
            {i + 1}
          </div>
          <div class="flex-1 min-w-0">
            <h3 class="font-medium text-white group-hover:text-brand-300 transition-colors text-sm sm:text-base">{lesson.title}</h3>
            {#if lesson.description}
              <p class="text-surface-200/40 text-xs sm:text-sm truncate">{lesson.description}</p>
            {/if}
          </div>
          <svg class="w-4 h-4 text-surface-200/20 group-hover:text-surface-200/40 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </a>
      {/each}
    </div>
  {/if}
</div>
