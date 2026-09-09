<script>
  import { getTopics } from '$lib/content.js';
  const topics = getTopics();
</script>

<svelte:head>
  <title>Learn - CodeKeep</title>
</svelte:head>

<div class="max-w-5xl mx-auto px-4 py-12">
  <div class="mb-10">
    <h1 class="text-3xl sm:text-4xl font-bold text-white mb-3">Learn</h1>
    <p class="text-surface-200/70 text-lg">Pick a topic and start building your skills</p>
  </div>

  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {#each topics as topic}
      <a href="/learn/{topic.slug}" class="card-hover group">
        <div class="flex items-start gap-4">
          <div class="w-14 h-14 {topic.colors.icon} rounded-xl flex items-center justify-center text-white font-mono font-bold text-base shrink-0 group-hover:scale-105 transition-transform">
            {topic.icon}
          </div>
          <div class="flex-1 min-w-0">
            <h3 class="text-lg font-bold text-white mb-1">{topic.title}</h3>
            <p class="text-surface-200/60 text-sm">{topic.description}</p>
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>
