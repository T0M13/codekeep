<script>
  import CodePlayground from '$lib/components/CodePlayground.svelte';

  let { data } = $props();

  let topic = $derived(data.topic);
  let lesson = $derived(data.lesson);
  let prevLesson = $derived(data.prevLesson);
  let nextLesson = $derived(data.nextLesson);
  let allLessons = $derived(data.allLessons);
  let progress = $derived(data.progress);

  let completedChallenges = $state(new Set());
  let sidebarOpen = $state(false);

  // Reset challenges when navigating to a different lesson
  $effect(() => {
    lesson.slug;
    completedChallenges = new Set();
    sidebarOpen = false;
  });

  function isLessonCompleted(lessonSlug) {
    return progress.some(p => p.lesson === lessonSlug && p.completed);
  }

  function onChallengeComplete(id) {
    completedChallenges.add(id);
    completedChallenges = completedChallenges;

    if (data.user) {
      fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: topic.slug,
          lesson: lesson.slug,
          challengeId: id,
          completed: completedChallenges.size === lesson.challenges.length
        })
      });
    }
  }

  function markComplete() {
    if (!data.user) return;
    fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        topic: topic.slug,
        lesson: lesson.slug,
        completed: true
      })
    });
  }
</script>

<svelte:head>
  <title>{lesson.title || lesson.slug} - {topic.title} - CodeKeep</title>
</svelte:head>

<div class="max-w-7xl mx-auto px-4 py-8 sm:py-12 flex gap-6">
  <!-- Sidebar: lesson list (desktop) -->
  <aside class="hidden lg:block w-56 shrink-0">
    <div class="sticky top-16">
      <a href="/learn/{topic.slug}" class="flex items-center gap-2 mb-4 group">
        <div class="w-7 h-7 {topic.colors.icon} rounded-lg flex items-center justify-center text-white p-1.5">
          {@html topic.icon}
        </div>
        <span class="text-sm font-semibold {topic.colors.text} group-hover:text-white transition-colors">{topic.title}</span>
      </a>
      <nav class="space-y-0.5">
        {#each allLessons as l, i}
          {@const isCurrent = l.slug === lesson.slug}
          {@const isDone = isLessonCompleted(l.slug)}
          <a
            href="/learn/{topic.slug}/{l.slug}"
            class="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm transition-colors
              {isCurrent ? 'bg-surface-800 text-white font-medium' : 'text-surface-200/50 hover:text-surface-200/80 hover:bg-surface-800/50'}"
          >
            <span class="w-5 h-5 rounded-md flex items-center justify-center shrink-0 text-[11px]
              {isDone ? 'bg-green-500/15 text-green-400' : isCurrent ? 'bg-brand-500/20 text-brand-400' : 'bg-surface-800 text-surface-200/30'}">
              {#if isDone}
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              {:else}
                {i + 1}
              {/if}
            </span>
            <span class="truncate">{l.title}</span>
          </a>
        {/each}
      </nav>
    </div>
  </aside>

  <!-- Mobile sidebar toggle -->
  <button
    class="lg:hidden fixed bottom-4 left-4 z-40 w-10 h-10 rounded-xl bg-surface-800 border border-surface-700 text-surface-200/60 hover:text-white flex items-center justify-center shadow-lg transition-colors"
    onclick={() => sidebarOpen = !sidebarOpen}
  >
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
  </button>

  <!-- Mobile sidebar overlay -->
  {#if sidebarOpen}
    <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
    <div class="lg:hidden fixed inset-0 z-40 bg-black/50" onclick={() => sidebarOpen = false}></div>
    <aside class="lg:hidden fixed left-0 top-0 bottom-0 z-50 w-64 bg-surface-950 border-r border-surface-800 p-4 pt-16 overflow-y-auto">
      <a href="/learn/{topic.slug}" class="flex items-center gap-2 mb-4 group">
        <div class="w-7 h-7 {topic.colors.icon} rounded-lg flex items-center justify-center text-white p-1.5">
          {@html topic.icon}
        </div>
        <span class="text-sm font-semibold {topic.colors.text} group-hover:text-white transition-colors">{topic.title}</span>
      </a>
      <nav class="space-y-0.5">
        {#each allLessons as l, i}
          {@const isCurrent = l.slug === lesson.slug}
          {@const isDone = isLessonCompleted(l.slug)}
          <a
            href="/learn/{topic.slug}/{l.slug}"
            class="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm transition-colors
              {isCurrent ? 'bg-surface-800 text-white font-medium' : 'text-surface-200/50 hover:text-surface-200/80 hover:bg-surface-800/50'}"
            onclick={() => sidebarOpen = false}
          >
            <span class="w-5 h-5 rounded-md flex items-center justify-center shrink-0 text-[11px]
              {isDone ? 'bg-green-500/15 text-green-400' : isCurrent ? 'bg-brand-500/20 text-brand-400' : 'bg-surface-800 text-surface-200/30'}">
              {#if isDone}
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              {:else}
                {i + 1}
              {/if}
            </span>
            <span class="truncate">{l.title}</span>
          </a>
        {/each}
      </nav>
    </aside>
  {/if}

  <!-- Main content -->
  <div class="flex-1 min-w-0 max-w-4xl">
    <!-- Breadcrumb -->
    <div class="flex items-center gap-2 text-sm text-surface-200/40 mb-6">
      <a href="/learn" class="hover:text-brand-400 transition-colors">Learn</a>
      <span>/</span>
      <a href="/learn/{topic.slug}" class="hover:text-brand-400 transition-colors {topic.colors.text}">{topic.title}</a>
      <span>/</span>
      <span class="text-surface-200/70">{lesson.title || lesson.slug}</span>
    </div>

    <!-- Lesson content -->
    <article class="lesson-content">
      {@html lesson.html}
    </article>

    <!-- Challenges (optional try-it sections) -->
    {#each lesson.challenges as challenge}
      <div class="my-8">
        <div class="card !border-surface-700 overflow-hidden">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-7 h-7 bg-brand-500/15 rounded-lg flex items-center justify-center">
              <svg class="w-3.5 h-3.5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="font-semibold text-white text-sm">Try it: {challenge.title || 'Practice'}</h3>
            {#if completedChallenges.has(challenge.id)}
              <span class="text-xs text-green-400/70 ml-auto">done</span>
            {/if}
          </div>
          {#if challenge.description}
            <p class="text-surface-200/60 text-sm mb-4">{challenge.description.trim()}</p>
          {/if}
          <CodePlayground
            code={challenge.starter?.trim() || ''}
            language={challenge.language || topic.slug}
            expected={challenge.expected?.trim() || ''}
            onComplete={() => onChallengeComplete(challenge.id)}
          />
        </div>
      </div>
    {/each}

    <!-- Navigation -->
    <div class="flex items-center justify-between mt-10 pt-6 border-t border-surface-800">
      {#if prevLesson}
        <a href="/learn/{topic.slug}/{prevLesson.slug}" class="btn-secondary !text-sm flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          {prevLesson.title}
        </a>
      {:else}
        <div></div>
      {/if}

      {#if data.user}
        <button class="text-xs text-surface-200/30 hover:text-brand-400 transition-colors" onclick={markComplete}>
          mark as read
        </button>
      {/if}

      {#if nextLesson}
        <a href="/learn/{topic.slug}/{nextLesson.slug}" class="btn-secondary !text-sm flex items-center gap-2">
          {nextLesson.title}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </a>
      {:else}
        <div></div>
      {/if}
    </div>
  </div>
</div>
