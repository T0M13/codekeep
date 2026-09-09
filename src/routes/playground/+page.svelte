<script>
  let language = $state('html');
  let code = $state(`<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      background: #0f172a;
      color: #e2e8f0;
    }
    h1 { color: #38bdf8; }
  </style>
</head>
<body>
  <div>
    <h1>Hello, CodeKeep!</h1>
    <p>Edit this code and click Run to see your changes.</p>
  </div>
</body>
</html>`);

  let output = $state('');
  let showOutput = $state(false);
  let iframeRef = $state(null);

  const templates = {
    html: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    body { font-family: sans-serif; padding: 2rem; }\n  </style>\n</head>\n<body>\n  <h1>Hello World!</h1>\n</body>\n</html>`,
    css: `/* Try styling this HTML: <div class="box">Hello</div> */\n.box {\n  padding: 2rem;\n  background: #0ea5e9;\n  color: white;\n  border-radius: 1rem;\n  font-family: sans-serif;\n  text-align: center;\n}`,
    javascript: `// Try some JavaScript!\nconst greeting = "Hello, CodeKeep!";\nconsole.log(greeting);\n\nfor (let i = 1; i <= 5; i++) {\n  console.log(\`Count: \${i}\`);\n}`,
  };

  function switchLanguage(lang) {
    language = lang;
    code = templates[lang] || '';
    showOutput = false;
    output = '';
  }

  function buildSandboxHTML(userCode, lang) {
    if (lang === 'css') {
      return `<!DOCTYPE html><html><head><style>${userCode}</style></head><body><div class="box">Hello</div></body></html>`;
    }
    if (lang === 'html') {
      return userCode;
    }
    return `<!DOCTYPE html><html><head><meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline';"></head><body><script>
      const _logs = [];
      console.log = (...args) => _logs.push(args.map(String).join(' '));
      console.warn = console.log;
      console.error = (...args) => _logs.push('Error: ' + args.map(String).join(' '));
      try {
        ${userCode}
      } catch(e) {
        _logs.push('Error: ' + e.message);
      }
      parent.postMessage({ type: 'codekeep-output', logs: _logs }, '*');
    <\/script></body></html>`;
  }

  function runCode() {
    showOutput = true;
    output = '';
    const html = buildSandboxHTML(code, language);
    if (iframeRef) {
      if (language === 'html' || language === 'css') {
        iframeRef.removeAttribute('src');
        iframeRef.srcdoc = html;
      } else {
        const blob = new Blob([html], { type: 'text/html' });
        iframeRef.src = URL.createObjectURL(blob);
      }
    }
  }

  function handleMessage(e) {
    if (e.origin !== 'null' && e.origin !== null) return;
    if (e.data?.type === 'codekeep-output') {
      output = e.data.logs.join('\n') || '(no output)';
    }
  }

  // Autorun on first load
  let hasAutoRun = false;
  $effect(() => {
    if (iframeRef && !hasAutoRun) {
      hasAutoRun = true;
      runCode();
    }
  });

  $effect(() => {
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  });

  const isWebLanguage = $derived(language === 'html' || language === 'css');
</script>

<svelte:head>
  <title>Playground - CodeKeep</title>
</svelte:head>

<div class="max-w-6xl mx-auto px-4 py-8">
  <div class="flex items-center justify-between mb-4 sm:mb-6">
    <h1 class="text-lg sm:text-2xl font-bold text-white">Playground</h1>
    <div class="flex items-center gap-0.5 sm:gap-1 bg-surface-900 rounded-xl p-1">
      {#each ['html', 'css', 'javascript'] as lang}
        <button
          class="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors {language === lang ? 'bg-brand-500 text-white' : 'text-surface-200/60 hover:text-white'}"
          onclick={() => switchLanguage(lang)}
        >{lang === 'javascript' ? 'JS' : lang.toUpperCase()}</button>
      {/each}
    </div>
  </div>

  <div class="grid lg:grid-cols-2 gap-3 sm:gap-4 lg:h-[calc(100vh-200px)]">
    <!-- Editor -->
    <div class="flex flex-col rounded-2xl overflow-hidden border border-surface-800 bg-surface-900 min-h-[280px] lg:min-h-0">
      <div class="flex items-center justify-between px-4 py-3 border-b border-surface-800">
        <div class="flex items-center gap-2">
          <div class="flex gap-1.5">
            <div class="w-3 h-3 rounded-full bg-red-500/60"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500/60"></div>
            <div class="w-3 h-3 rounded-full bg-green-500/60"></div>
          </div>
          <span class="text-xs text-surface-200/40 font-mono ml-2">{language}</span>
        </div>
        <button onclick={runCode} class="btn-primary !text-sm !py-1.5 !px-4 flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/></svg>
          Run
        </button>
      </div>
      <textarea
        bind:value={code}
        class="flex-1 p-4 bg-surface-800 text-surface-100 font-mono text-sm leading-relaxed resize-none focus:outline-none"
        spellcheck="false"
      ></textarea>
    </div>

    <!-- Output -->
    <div class="flex flex-col rounded-2xl overflow-hidden border border-surface-800 bg-surface-900 min-h-[250px] lg:min-h-0">
      <div class="px-4 py-3 border-b border-surface-800">
        <span class="text-sm font-medium text-surface-200/60">Output</span>
      </div>
      {#if isWebLanguage}
        <iframe
          bind:this={iframeRef}
          sandbox="allow-scripts"
          class="flex-1 bg-white"
          title="Preview"
        ></iframe>
      {:else}
        <iframe
          bind:this={iframeRef}
          sandbox="allow-scripts"
          class="hidden"
          title="JS Runner"
        ></iframe>
        <pre class="flex-1 p-4 text-sm font-mono text-surface-200 overflow-auto bg-surface-800">{showOutput ? output : 'Click Run to see output...'}</pre>
      {/if}
    </div>
  </div>
</div>
