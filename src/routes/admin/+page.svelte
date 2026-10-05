<script>
  let { data } = $props();
  let users = $state(data.users);

  let username = $state('');
  let email = $state('');
  let password = $state('');
  let displayName = $state('');
  let error = $state('');
  let success = $state('');

  async function addUser() {
    error = '';
    success = '';

    const res = await fetch('/api/admin/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password, displayName: displayName || username })
    });

    const result = await res.json();
    if (!res.ok) {
      error = result.error;
      return;
    }

    success = `User "${result.username}" created!`;
    username = '';
    email = '';
    password = '';
    displayName = '';

    // Refresh user list
    const listRes = await fetch('/api/admin/users');
    const listData = await listRes.json();
    users = listData.users;
  }

  async function deleteUser(id, name) {
    if (!confirm(`Delete user "${name}"? This removes all their progress.`)) return;

    const res = await fetch('/api/admin/users', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    });

    if (res.ok) {
      users = users.filter(u => u.id !== id);
    }
  }

  function formatDate(dateStr) {
    if (!dateStr) return '-';
    return new Date(dateStr).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  }
</script>

<svelte:head><title>Admin - CodeKeep</title></svelte:head>

<div class="max-w-5xl mx-auto px-4 py-12">
  <div class="flex items-center gap-2 text-sm text-surface-200/50 mb-6">
    <a href="/profile" class="hover:text-brand-400 transition-colors">Profile</a>
    <span>/</span>
    <span class="text-surface-200/70">Admin</span>
  </div>

  <h1 class="text-2xl font-bold text-white mb-8">User Management</h1>

  <!-- Add user form -->
  <div class="card mb-8">
    <h2 class="font-bold text-white mb-4">Add New User</h2>

    {#if error}
      <div class="bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg px-4 py-2 text-sm mb-4">{error}</div>
    {/if}
    {#if success}
      <div class="bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg px-4 py-2 text-sm mb-4">{success}</div>
    {/if}

    <div class="grid sm:grid-cols-2 gap-4 mb-4">
      <div>
        <label for="username" class="block text-sm text-surface-200/60 mb-1">Username</label>
        <input id="username" type="text" bind:value={username} placeholder="johndoe" class="input w-full" />
      </div>
      <div>
        <label for="email" class="block text-sm text-surface-200/60 mb-1">Email</label>
        <input id="email" type="email" bind:value={email} placeholder="john@example.com" class="input w-full" />
      </div>
      <div>
        <label for="password" class="block text-sm text-surface-200/60 mb-1">Password</label>
        <input id="password" type="text" bind:value={password} placeholder="password" class="input w-full" />
      </div>
      <div>
        <label for="displayName" class="block text-sm text-surface-200/60 mb-1">Display Name (optional)</label>
        <input id="displayName" type="text" bind:value={displayName} placeholder="John Doe" class="input w-full" />
      </div>
    </div>
    <button onclick={addUser} class="btn-primary text-sm" disabled={!username || !email || !password}>
      Create User
    </button>
  </div>

  <!-- User list -->
  <div class="card">
    <h2 class="font-bold text-white mb-4">All Users ({users.length})</h2>
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="text-left text-surface-200/50 border-b border-surface-800">
            <th class="pb-3 pr-4">User</th>
            <th class="pb-3 pr-4">Email</th>
            <th class="pb-3 pr-4 text-center">XP</th>
            <th class="pb-3 pr-4 text-center">Role</th>
            <th class="pb-3 pr-4">Joined</th>
            <th class="pb-3"></th>
          </tr>
        </thead>
        <tbody>
          {#each users as user}
            <tr class="border-b border-surface-800/50">
              <td class="py-3 pr-4">
                <span class="text-white font-medium">{user.display_name || user.username}</span>
                <span class="text-surface-200/40 text-xs ml-1">@{user.username}</span>
              </td>
              <td class="py-3 pr-4 text-surface-200/60">{user.email}</td>
              <td class="py-3 pr-4 text-center text-brand-400 font-medium">{user.xp}</td>
              <td class="py-3 pr-4 text-center">
                {#if user.is_admin}
                  <span class="badge bg-brand-500/20 text-brand-400 text-xs">admin</span>
                {:else}
                  <span class="text-surface-200/40 text-xs">user</span>
                {/if}
              </td>
              <td class="py-3 pr-4 text-surface-200/50">{formatDate(user.created_at)}</td>
              <td class="py-3 text-right">
                {#if !user.is_admin}
                  <button onclick={() => deleteUser(user.id, user.username)} class="text-red-400/50 hover:text-red-400 text-xs transition-colors">
                    delete
                  </button>
                {/if}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>
