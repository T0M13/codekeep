<script>
  import CodePlayground from '$lib/components/CodePlayground.svelte';

  let { data } = $props();
  const { topic, lesson, prevLesson, nextLesson } = data;

  let completedChallenges = $state(new Set());

  function onChallengeComplete(id) {
    completedChallenges.add(id);
    completedChallenges = completedChallenges; // trigger reactivity

    // Report progress if logged in
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

<div class="max-w-4xl mx-auto px-4 py-12">
  <!-- Breadcrumb -->
  <div class="flex items-center gap-2 text-sm text-surface-200/50 mb-8">
    <a href="/learn" class="hover:text-brand-400 transition-colors">Learn</a>
    <span>/</span>
    <a href="/learn/{topic.slug}" class="hover:text-brand-400 transition-colors {topic.colors.text}">{topic.title}</a>
    <span>/</span>
    <span class="text-surface-200">{lesson.title || lesson.slug}</span>
  </div>

  <!-- Lesson content -->
  <article class="lesson-content">
    {@html lesson.html}
  </article>

  <!-- Challenges -->
  {#each lesson.challenges as challenge}
    <div class="my-8">
      <div class="card !border-brand-500/30 overflow-hidden">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-8 h-8 bg-brand-500/20 rounded-lg flex items-center justify-center">
            <svg class="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 class="font-bold text-white">Challenge: {challenge.title || 'Try it yourself!'}</h3>
          {#if completedChallenges.has(challenge.id)}
            <span class="badge bg-green-500/20 text-green-400 ml-auto">Completed!</span>
          {/if}
        </div>
        {#if challenge.description}
          <p class="text-surface-200/70 text-sm mb-4">{challenge.description.trim()}</p>
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
  <div class="flex items-center justify-between mt-12 pt-8 border-t border-surface-800">
    {#if prevLesson}
      <a href="/learn/{topic.slug}/{prevLesson.slug}" class="btn-secondary flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
        {prevLesson.title}
      </a>
    {:else}
      <div></div>
    {/if}
    <button class="btn-primary" onclick={markComplete}>
      {#if nextLesson}
        Mark Complete & Continue
      {:else}
        Complete Lesson
      {/if}
    </button>
    {#if nextLesson}
      <a href="/learn/{topic.slug}/{nextLesson.slug}" class="btn-secondary flex items-center gap-2">
        {nextLesson.title}
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </a>
    {:else}
      <div></div>
    {/if}
  </div>
</div>
