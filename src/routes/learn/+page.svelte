<script>
  import { getTopics } from '$lib/content.js';
  const topics = getTopics();
</script>

<svelte:head>
  <title>Learn - CodeKeep</title>
</svelte:head>

<div class="max-w-5xl mx-auto px-4 py-8 sm:py-12">
  <div class="mb-8">
    <h1 class="text-2xl sm:text-3xl font-bold text-white mb-2">Reference & Tutorials</h1>
    <p class="text-surface-200/60 text-sm sm:text-base">Pick a topic. Read the docs, try the examples, or test yourself with challenges.</p>
  </div>

  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each topics as topic}
      <a href="/learn/{topic.slug}" class="card-hover group">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 {topic.colors.icon} rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform p-2.5">
            {@html topic.icon}
          </div>
          <div class="flex-1 min-w-0">
            <h3 class="text-lg font-bold text-white mb-1">{topic.title}</h3>
            <p class="text-surface-200/50 text-sm">{topic.description}</p>
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>
