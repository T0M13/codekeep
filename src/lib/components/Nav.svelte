<script>
  import { getLevelProgress } from '$lib/xp.js';
  import { page } from '$app/stores';

  let { user } = $props();
  let menuOpen = $state(false);
  let levelInfo = $derived(user ? getLevelProgress(user.xp) : null);

  const links = [
    { href: '/learn', label: 'learn' },
    { href: '/reference', label: 'reference' },
    { href: '/tests', label: 'tests' },
    { href: '/playground', label: 'playground' },
  ];

  function isActive(href) {
    const path = $page?.url?.pathname || '';
    return path === href || path.startsWith(href + '/');
  }
</script>

<nav class="sticky top-0 z-50 bg-surface-950/90 backdrop-blur-md">
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex items-center justify-between h-12">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-2 group">
        <svg class="w-5 h-5 text-brand-400 group-hover:text-brand-300 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="4 7 4 4 20 4 20 7"/>
          <polyline points="4 17 4 20 20 20 20 17"/>
          <polyline points="8 12 10 10 8 8"/>
          <line x1="14" y1="12" x2="16" y2="12"/>
        </svg>
        <span class="text-sm font-semibold text-surface-200/80 group-hover:text-white transition-colors tracking-tight">codekeep</span>
      </a>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-0.5">
        {#each links as link}
          <a href={link.href} class="px-2.5 py-1 rounded-md text-xs font-medium transition-colors {isActive(link.href) ? 'text-white bg-surface-800' : 'text-surface-200/40 hover:text-surface-200/70'}">
            {link.label}
          </a>
        {/each}
        {#if user}
          <a href="/profile" class="px-2.5 py-1 rounded-md text-xs font-medium transition-colors {isActive('/profile') ? 'text-white bg-surface-800' : 'text-surface-200/40 hover:text-surface-200/70'}">
            profile
          </a>
        {/if}
      </div>

      <!-- Right side -->
      <div class="flex items-center gap-2">
        {#if user}
          <a href="/profile" class="hidden sm:flex items-center gap-2 group">
            <div class="flex items-center gap-1.5 text-[11px] text-surface-200/30">
              <span class="text-brand-400/70 font-mono font-semibold">{user.xp}</span>
              <span>xp</span>
            </div>
            <div class="w-6 h-6 bg-surface-800 text-surface-200/50 rounded-md flex items-center justify-center text-[11px] font-bold group-hover:text-brand-400 group-hover:bg-surface-700 transition-colors">
              {user.display_name?.charAt(0).toUpperCase() || '?'}
            </div>
          </a>
        {:else}
          <a href="/login" class="text-xs text-surface-200/30 hover:text-surface-200/60 transition-colors">log in</a>
        {/if}

        <!-- Mobile toggle -->
        <button class="md:hidden p-1.5 text-surface-200/40 hover:text-surface-200/70 transition-colors" onclick={() => menuOpen = !menuOpen}>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            {#if menuOpen}
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            {:else}
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            {/if}
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    {#if menuOpen}
      <div class="md:hidden pb-3 pt-1 space-y-0.5 border-t border-surface-800/50 mt-1">
        {#each links as link}
          <a href={link.href} class="block px-3 py-2 rounded-md text-sm text-surface-200/60 hover:text-white hover:bg-surface-800/50 transition-colors">{link.label}</a>
        {/each}
        {#if user}
          <a href="/profile" class="block px-3 py-2 rounded-md text-sm text-surface-200/60 hover:text-white hover:bg-surface-800/50 transition-colors">profile</a>
          <form method="POST" action="/api/auth/logout">
            <button class="block w-full text-left px-3 py-2 rounded-md text-sm text-surface-200/40 hover:text-white hover:bg-surface-800/50 transition-colors">log out</button>
          </form>
        {/if}
      </div>
    {/if}
  </div>
</nav>
