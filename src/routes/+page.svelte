<script>
  let { data } = $props();

  const code = 'const greet = name =>\n  `Hello, ${name}!`;\n\nconsole.log(greet("you"));';
  let typedCode = $state('');
  let typing = $state(true);

  $effect(() => {
    let i = 0;
    typedCode = '';
    typing = true;
    const interval = setInterval(() => {
      if (i < code.length) {
        typedCode = code.slice(0, i + 1);
        i++;
      } else {
        typing = false;
        clearInterval(interval);
      }
    }, 35);
    return () => clearInterval(interval);
  });
</script>

<svelte:head>
  <title>CodeKeep</title>
</svelte:head>

<div class="max-w-3xl mx-auto px-4 flex flex-col items-center justify-center" style="min-height: calc(100vh - 7rem);">

  <div class="w-full grid md:grid-cols-5 gap-4">

    <!-- Terminal -->
    <div class="md:col-span-3 card !p-0 overflow-hidden">
      <div class="flex items-center gap-2 px-4 py-2.5 bg-surface-800 border-b border-surface-700/50">
        <div class="flex gap-1.5">
          <div class="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
          <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
          <div class="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
        </div>
        <span class="text-[11px] text-surface-200/30 font-mono ml-1">js</span>
      </div>
      <div class="p-5 min-h-[140px] flex items-start">
        <pre class="text-sm font-mono text-surface-100 leading-relaxed whitespace-pre">{typedCode}<span class="inline-block w-[7px] h-[18px] bg-brand-400 ml-[1px] {typing ? 'animate-pulse' : 'opacity-0'}" style="vertical-align: text-bottom;"></span></pre>
      </div>
      <div class="px-5 pb-4 flex items-center justify-between">
        <span class="text-[11px] text-surface-200/25 font-mono">codekeep ~</span>
        <a href="/playground" class="text-xs text-brand-400/70 hover:text-brand-400 font-medium transition-colors">open playground &rarr;</a>
      </div>
    </div>

    <!-- Right panel -->
    <div class="md:col-span-2">
      {#if data.user && data.userStats}
        <div class="card h-full flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-11 h-11 bg-brand-500/20 text-brand-400 rounded-xl flex items-center justify-center text-lg font-bold">
                {data.user.display_name?.charAt(0).toUpperCase() || 'U'}
              </div>
              <div>
                <p class="font-semibold text-white text-sm">{data.user.display_name || data.user.username}</p>
                <p class="text-xs text-surface-200/40">{data.userStats.title}</p>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-2 mb-4">
              <div class="bg-surface-800 rounded-lg p-2.5 text-center">
                <p class="text-lg font-bold text-brand-400">{data.userStats.level}</p>
                <p class="text-[10px] text-surface-200/40 uppercase tracking-wider">Level</p>
              </div>
              <div class="bg-surface-800 rounded-lg p-2.5 text-center">
                <p class="text-lg font-bold text-green-400">{data.userStats.streak}</p>
                <p class="text-[10px] text-surface-200/40 uppercase tracking-wider">Streak</p>
              </div>
              <div class="bg-surface-800 rounded-lg p-2.5 text-center">
                <p class="text-lg font-bold text-yellow-400">{data.user.xp}</p>
                <p class="text-[10px] text-surface-200/40 uppercase tracking-wider">XP</p>
              </div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-[10px] text-surface-200/30 mb-1">
              <span>Lv {data.userStats.level}</span>
              <span>{data.userStats.xpNeeded} XP to go</span>
            </div>
            <div class="w-full h-1.5 bg-surface-800 rounded-full overflow-hidden">
              <div class="h-full bg-brand-500 rounded-full transition-all duration-700" style="width: {data.userStats.progress * 100}%"></div>
            </div>
          </div>
        </div>
      {:else}
        <div class="card h-full flex flex-col justify-center text-center">
          <div class="w-12 h-12 mx-auto mb-3 bg-surface-800 rounded-xl flex items-center justify-center">
            <span class="text-surface-200/30 font-mono text-lg">&gt;_</span>
          </div>
          <p class="text-sm text-surface-200/60 mb-1">Track your progress</p>
          <p class="text-xs text-surface-200/30 mb-4">Log in to earn XP and level up</p>
          <a href="/login" class="btn-primary text-sm mx-auto">Log in</a>
          <p class="text-[11px] text-surface-200/20 mt-3">try: testuser / testpass</p>
        </div>
      {/if}
    </div>
  </div>
</div>
