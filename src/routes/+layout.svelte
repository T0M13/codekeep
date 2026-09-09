<script>
  import '../app.css';
  import Nav from '$lib/components/Nav.svelte';

  let { data, children } = $props();
</script>

<div class="min-h-screen flex flex-col">
  <Nav user={data.user} />
  <main class="flex-1">
    {@render children()}
  </main>
  <footer class="py-6 text-center">
    <div class="flex items-center justify-center gap-4 text-[11px] text-surface-200/15">
      <span>codekeep</span>
      <span>&middot;</span>
      <a href="https://github.com/T0M13/codekeep" target="_blank" class="hover:text-surface-200/30 transition-colors">source</a>
      <span>&middot;</span>
      <span>mit license</span>
    </div>
  </footer>
</div>
