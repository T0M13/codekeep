<script>
  let { data } = $props();
</script>

<svelte:head>
  <title>Reference - CodeKeep</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8 sm:py-12">
  <div class="mb-8">
    <h1 class="text-2xl sm:text-3xl font-bold text-white mb-2">Reference</h1>
    <p class="text-surface-200/60 text-sm sm:text-base">Quick lookup for tags, properties, and methods.</p>
  </div>

  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each data.topics as topic}
      <a href="/reference/{topic.slug}" class="card-hover group">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 {topic.colors.icon} rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform p-2">
            {@html topic.icon}
          </div>
          <div>
            <h3 class="font-bold text-white">{topic.title}</h3>
            <p class="text-surface-200/40 text-xs">{topic.referenceCount} entries</p>
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>
