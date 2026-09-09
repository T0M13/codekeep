<script>
  let { data } = $props();
  let sidebarOpen = $state(false);
  let filter = $state('');

  let topic = $derived(data.topic);
  let groups = $derived(data.groups);
  let currentItem = $derived(data.currentItem);
  let allItems = $derived(groups.flatMap((group) => group.items));
  let currentIndex = $derived(allItems.indexOf(currentItem));
  let filteredGroups = $derived(
    groups.flatMap((group) => {
      const query = filter.trim().toLowerCase();
      const items = group.items.filter((item) => item.toLowerCase().includes(query));
      return items.length ? [{ ...group, items }] : [];
    })
  );
</script>

<svelte:head>
  <title>{currentItem} - {topic.title} Reference - CodeKeep</title>
</svelte:head>

<div class="max-w-7xl mx-auto flex">
  <button
    class="lg:hidden fixed bottom-4 right-4 z-50 w-12 h-12 bg-brand-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-400 transition-colors"
    onclick={() => sidebarOpen = !sidebarOpen}
    aria-label={sidebarOpen ? 'Close reference navigation' : 'Open reference navigation'}
    aria-expanded={sidebarOpen}
    title={sidebarOpen ? 'Close reference navigation' : 'Open reference navigation'}
  >
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" aria-hidden="true">
      {#if sidebarOpen}
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
      {:else}
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
      {/if}
    </svg>
  </button>

  {#if sidebarOpen}
    <button class="lg:hidden fixed inset-0 z-30 bg-black/60" onclick={() => sidebarOpen = false} aria-label="Close reference navigation"></button>
  {/if}

  <aside class="
    fixed lg:sticky top-12 z-40 lg:z-auto
    w-72 h-[calc(100vh-3rem)] overflow-y-auto
    bg-surface-950 lg:bg-transparent border-r border-surface-800
    transition-transform lg:transition-none
    {sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    shrink-0
  ">
    <div class="p-4 lg:py-8">
      <a href="/reference" class="flex items-center gap-2 mb-4 group">
        <div class="w-7 h-7 {topic.colors.icon} rounded-md flex items-center justify-center text-white p-1.5">
          {@html topic.icon}
        </div>
        <span class="font-semibold text-sm text-white group-hover:text-brand-300 transition-colors">{topic.title} reference</span>
      </a>

      <label class="block mb-4">
        <span class="sr-only">Filter {topic.title} reference</span>
        <input
          type="search"
          bind:value={filter}
          placeholder="Filter reference..."
          class="w-full px-3 py-2 bg-surface-900 border border-surface-800 rounded-md text-sm text-white placeholder:text-surface-200/30 focus:outline-none focus:border-brand-500"
        />
      </label>

      <nav class="space-y-4" aria-label="{topic.title} reference">
        {#each filteredGroups as group}
          <div>
            <p class="text-[10px] uppercase text-surface-200/30 font-semibold mb-1.5 px-2">{group.label}</p>
            <ul class="space-y-0.5">
              {#each group.items as item}
                <li>
                  <a
                    href="/reference/{topic.slug}/{item}"
                    onclick={() => sidebarOpen = false}
                    aria-current={currentItem === item ? 'page' : undefined}
                    class="block px-2 py-1 rounded-md text-sm transition-colors {
                      currentItem === item
                        ? 'bg-brand-500/15 text-brand-300 font-medium'
                        : 'text-surface-200/50 hover:text-white hover:bg-surface-800/50'
                    }"
                  >
                    {item}
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </nav>

      {#if filteredGroups.length === 0}
        <p class="px-2 text-xs text-surface-200/35">No matching entries.</p>
      {/if}

      <div class="mt-6 pt-4 border-t border-surface-800">
        <a href="/tests/{topic.slug}" class="flex items-center justify-between px-2 py-2 rounded-md text-sm text-yellow-300 hover:bg-surface-800/60 transition-colors">
          <span>Test your knowledge</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
        {#if data.user}
          <p class="px-2 mt-1 text-[11px] text-surface-200/30">Correct answers earn XP.</p>
        {/if}
      </div>
    </div>
  </aside>

  <main class="flex-1 min-w-0 px-4 sm:px-8 py-8">
    <div class="flex flex-wrap items-center gap-2 text-xs text-surface-200/35 mb-6">
      <a href="/reference" class="hover:text-brand-400 transition-colors">Reference</a>
      <span>/</span>
      <span class={topic.colors.text}>{topic.title}</span>
      <span>/</span>
      <span class="text-surface-200/60">{currentItem}</span>
    </div>

    <article class="lesson-content max-w-4xl">
      {@html data.html}
    </article>

    <div class="flex items-center justify-between gap-3 mt-10 pt-6 border-t border-surface-800">
      {#if currentIndex > 0}
        <a href="/reference/{topic.slug}/{allItems[currentIndex - 1]}" class="btn-secondary !text-sm flex items-center gap-2 min-w-0">
          <span aria-hidden="true">&larr;</span>
          <span class="truncate">{allItems[currentIndex - 1]}</span>
        </a>
      {:else}
        <div></div>
      {/if}
      {#if currentIndex < allItems.length - 1}
        <a href="/reference/{topic.slug}/{allItems[currentIndex + 1]}" class="btn-secondary !text-sm flex items-center gap-2 min-w-0">
          <span class="truncate">{allItems[currentIndex + 1]}</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
      {:else}
        <a href="/tests/{topic.slug}" class="btn-secondary !text-sm">Take the test</a>
      {/if}
    </div>
  </main>
</div>
