<script>
  let { data } = $props();
  let currentIndex = $state(0);
  let selected = $state(null);
  let result = $state(null);
  let checking = $state(false);
  let earnedXP = $state(0);
  // The initial completions come from the server and do not change during this page session.
  // svelte-ignore state_referenced_locally
  let passed = $state(new Set(data.completedIds));

  let question = $derived(data.quiz.questions[currentIndex]);
  let finished = $derived(currentIndex >= data.quiz.questions.length);
  let passedCount = $derived(passed.size);

  async function checkAnswer() {
    if (selected === null || checking || result) return;
    checking = true;

    try {
      const response = await fetch(`/api/tests/${data.topic.slug}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questionId: question.id, answer: selected })
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || 'Could not check answer');

      result = payload;
      earnedXP += payload.xpEarned || 0;
      if (payload.correct) {
        passed.add(question.id);
        passed = new Set(passed);
      }
    } catch (error) {
      result = { error: error.message };
    } finally {
      checking = false;
    }
  }

  function retryAnswer() {
    selected = null;
    result = null;
  }

  function nextQuestion() {
    currentIndex += 1;
    selected = null;
    result = null;
  }

  function restart() {
    currentIndex = 0;
    selected = null;
    result = null;
    earnedXP = 0;
  }
</script>

<svelte:head>
  <title>{data.quiz.title} - CodeKeep</title>
</svelte:head>

<div class="max-w-3xl mx-auto px-4 py-8 sm:py-12">
  <div class="flex flex-wrap items-center gap-2 text-xs text-surface-200/35 mb-6">
    <a href="/tests" class="hover:text-brand-400">Tests</a>
    <span>/</span>
    <span class={data.topic.colors.text}>{data.topic.title}</span>
  </div>

  <div class="flex items-end justify-between gap-4 mb-5">
    <div>
      <h1 class="text-2xl font-bold text-white mb-1">{data.quiz.title}</h1>
      <p class="text-sm text-surface-200/50">{data.quiz.description}</p>
    </div>
    {#if data.user}
      <div class="text-right shrink-0">
        <p class="text-sm font-semibold text-yellow-300">+{earnedXP} XP</p>
        <p class="text-[11px] text-surface-200/35">{passedCount}/{data.quiz.questions.length} passed</p>
      </div>
    {/if}
  </div>

  <div class="h-1.5 bg-surface-800 rounded-full overflow-hidden mb-8">
    <div
      class="h-full bg-brand-500 transition-all duration-300"
      style="width: {Math.min(100, (currentIndex / data.quiz.questions.length) * 100)}%"
    ></div>
  </div>

  {#if finished}
    <div class="card text-center">
      <div class="w-12 h-12 mx-auto mb-4 rounded-full bg-green-500/15 text-green-400 flex items-center justify-center text-xl" aria-hidden="true">✓</div>
      <h2 class="text-xl font-bold text-white mb-2">Test complete</h2>
      <p class="text-surface-200/55 mb-1">You passed {passedCount} of {data.quiz.questions.length} questions.</p>
      {#if data.user && earnedXP > 0}
        <p class="text-sm text-yellow-300 mb-6">You earned {earnedXP} XP this run.</p>
      {:else}
        <p class="text-sm text-surface-200/35 mb-6">Replay any time to sharpen the details.</p>
      {/if}
      <div class="flex flex-wrap justify-center gap-3">
        <button class="btn-secondary" onclick={restart}>Try again</button>
        <a class="btn-primary" href="/reference/{data.topic.slug}">Open reference</a>
      </div>
    </div>
  {:else}
    <section class="card" aria-labelledby="question-title">
      <div class="flex items-center justify-between gap-3 mb-5">
        <p class="text-xs font-semibold uppercase text-surface-200/35">Question {currentIndex + 1} of {data.quiz.questions.length}</p>
        {#if passed.has(question.id)}
          <span class="text-xs text-green-400">previously passed</span>
        {/if}
      </div>

      <h2 id="question-title" class="text-lg sm:text-xl font-semibold text-white mb-6">{question.prompt}</h2>

      <div class="space-y-2 mb-6">
        {#each question.options as option, index}
          <button
            class="w-full min-h-11 px-4 py-3 border rounded-md text-left text-sm transition-colors {
              selected === index
                ? 'border-brand-500 bg-brand-500/10 text-white'
                : 'border-surface-700 text-surface-200/70 hover:border-surface-500 hover:text-white'
            }"
            onclick={() => { if (!result) selected = index; }}
            disabled={Boolean(result)}
            aria-pressed={selected === index}
          >
            <span class="inline-flex w-6 text-surface-200/30">{String.fromCharCode(65 + index)}.</span>
            {option}
          </button>
        {/each}
      </div>

      {#if result?.error}
        <p class="p-3 mb-4 rounded-md bg-red-500/10 text-red-300 text-sm">{result.error}</p>
      {:else if result}
        <div class="p-4 mb-4 rounded-md border {result.correct ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10'}">
          <p class="font-semibold text-sm {result.correct ? 'text-green-300' : 'text-red-300'} mb-1">
            {result.correct ? 'Correct' : `Not quite. The answer is ${String.fromCharCode(65 + result.correctAnswer)}.`}
          </p>
          <p class="text-sm text-surface-200/65">{result.explanation}</p>
          {#if result.reference}
            <a href={result.reference} class="inline-block mt-2 text-xs text-brand-300 hover:text-brand-200">Review this reference &rarr;</a>
          {/if}
        </div>
      {/if}

      <div class="flex items-center justify-between gap-3">
        {#if !data.user}
          <a href="/login" class="text-xs text-surface-200/40 hover:text-brand-300">Log in to earn XP</a>
        {:else}
          <span class="text-xs text-surface-200/35">First correct answer: 50 XP</span>
        {/if}

        {#if result?.correct}
          <button class="btn-primary !px-4 !py-2 !rounded-md" onclick={nextQuestion}>Next</button>
        {:else if result}
          <button class="btn-secondary !px-4 !py-2 !rounded-md" onclick={retryAnswer}>Try another answer</button>
        {:else}
          <button
            class="btn-primary !px-4 !py-2 !rounded-md disabled:opacity-40 disabled:cursor-not-allowed"
            onclick={checkAnswer}
            disabled={selected === null || checking}
          >
            {checking ? 'Checking...' : 'Check answer'}
          </button>
        {/if}
      </div>
    </section>
  {/if}
</div>
