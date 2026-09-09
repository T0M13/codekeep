<script>
  let { data } = $props();
</script>

<svelte:head>
  <title>Tests - CodeKeep</title>
</svelte:head>

<div class="max-w-5xl mx-auto px-4 py-8 sm:py-12">
  <div class="mb-8">
    <p class="text-xs font-semibold uppercase text-yellow-400 mb-2">Practice</p>
    <h1 class="text-2xl sm:text-3xl font-bold text-white mb-2">Test your knowledge</h1>
    <p class="text-surface-200/60 text-sm sm:text-base">Short topic tests with explanations after every answer. Sign in to earn XP.</p>
  </div>

  <div class="grid md:grid-cols-3 gap-4">
    {#each data.quizzes as quiz}
      <a href="/tests/{quiz.slug}" class="card-hover group">
        <div class="w-9 h-9 {quiz.topic.colors.icon} rounded-md flex items-center justify-center text-white p-2 mb-4">
          {@html quiz.topic.icon}
        </div>
        <h2 class="font-bold text-white mb-1">{quiz.title}</h2>
        <p class="text-sm text-surface-200/50 mb-4">{quiz.description}</p>
        <div class="flex items-center justify-between text-xs">
          <span class="text-surface-200/35">{quiz.questionCount} questions</span>
          <span class="text-yellow-300 group-hover:text-yellow-200">Start &rarr;</span>
        </div>
      </a>
    {/each}
  </div>
</div>
