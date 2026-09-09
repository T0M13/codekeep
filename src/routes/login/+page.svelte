<script>
  import { goto } from '$app/navigation';

  let username = $state('');
  let password = $state('');
  let error = $state('');
  let loading = $state(false);

  async function handleLogin(e) {
    e.preventDefault();
    error = '';
    loading = true;
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (!res.ok) { error = data.error; return; }
      goto('/learn');
    } catch { error = 'Something went wrong'; }
    finally { loading = false; }
  }
</script>

<svelte:head><title>Log in - CodeKeep</title></svelte:head>

<div class="max-w-md mx-auto px-4 py-20">
  <div class="text-center mb-8">
    <h1 class="text-2xl font-bold text-white mb-2">Welcome back</h1>
    <p class="text-surface-200/60">Log in to continue your learning journey</p>
  </div>

  <form class="card space-y-5" onsubmit={handleLogin}>
    {#if error}
      <div class="px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">{error}</div>
    {/if}
    <div>
      <label for="username" class="block text-sm font-medium text-surface-200 mb-1.5">Username or Email</label>
      <input id="username" type="text" bind:value={username} class="input" required autocomplete="username" />
    </div>
    <div>
      <label for="password" class="block text-sm font-medium text-surface-200 mb-1.5">Password</label>
      <input id="password" type="password" bind:value={password} class="input" required autocomplete="current-password" />
    </div>
    <button type="submit" class="btn-primary w-full" disabled={loading}>
      {loading ? 'Logging in...' : 'Log in'}
    </button>
    <p class="text-center text-sm text-surface-200/50">
      Don't have an account? <a href="/register" class="text-brand-400 hover:text-brand-300">Sign up</a>
    </p>
  </form>
</div>
