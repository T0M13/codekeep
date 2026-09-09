<script>
  let { code = '', language = 'html', expected = '', onComplete = () => {} } = $props();

  import { tick } from 'svelte';

  let editorCode = $state(code);
  let output = $state('');
  let passed = $state(false);
  let showOutput = $state(false);
  let iframeRef = $state(null);

  // Reset everything when the challenge changes (client-side navigation)
  $effect(() => {
    editorCode = code;
    output = '';
    passed = false;
    showOutput = false;
  });

  // All code runs inside a sandboxed iframe via blob URL + postMessage.
  // The sandbox attribute blocks: same-origin access, forms, popups, top navigation, downloads.
  // Only allow-scripts is granted so code can execute but cannot escape.

  function buildSandboxHTML(userCode, lang) {
    if (lang === 'css') {
      return `<!DOCTYPE html><html><head><style>${userCode}</style></head><body><div class="box">Hello</div></body></html>`;
    }
    if (lang === 'html') {
      return userCode;
    }
    // JavaScript: capture console output and postMessage it back
    return `<!DOCTYPE html><html><head><meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline';"></head><body><script>
      const _logs = [];
      const _origLog = console.log;
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

  async function runCode() {
    showOutput = true;
    output = '';

    const html = buildSandboxHTML(editorCode, language);
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    // Wait for the iframe to mount if this is the first run
    await tick();

    if (iframeRef) {
      if (language === 'html' || language === 'css') {
        // Use srcdoc for HTML/CSS so relative image URLs resolve against the app origin
        iframeRef.removeAttribute('src');
        iframeRef.srcdoc = html;
      } else {
        // JS sandboxes use blob: URLs (no images needed, stricter CSP)
        iframeRef.src = url;
      }
    }

    if (language === 'html' || language === 'css') {
      output = 'Preview updated!';
      setTimeout(() => {
        checkResult();
        URL.revokeObjectURL(url);
      }, 300);
    }
    // JS output comes via postMessage listener
  }

  function handleMessage(e) {
    // Only accept messages from our sandboxed blob: iframes (origin is 'null')
    if (e.origin !== 'null' && e.origin !== null) return;
    if (e.data?.type === 'codekeep-output') {
      output = e.data.logs.join('\n') || '(no output)';
      checkResult();
    }
  }

  function checkResult() {
    if (!expected) return;
    const normalizedOutput = output.trim().toLowerCase();
    const normalizedExpected = expected.trim().toLowerCase();
    if (normalizedOutput.includes(normalizedExpected) || editorCode.trim().toLowerCase().includes(normalizedExpected)) {
      passed = true;
      onComplete();
    }
  }

  function reset() {
    editorCode = code;
    output = '';
    passed = false;
    showOutput = false;
  }

  const isWebLanguage = $derived(language === 'html' || language === 'css');

  $effect(() => {
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  });
</script>

<div class="rounded-xl overflow-hidden border border-surface-700 bg-surface-800">
  <div class="flex items-center justify-between px-4 py-2 bg-surface-900 border-b border-surface-700">
    <div class="flex items-center gap-2">
      <div class="flex gap-1.5">
        <div class="w-3 h-3 rounded-full bg-red-500/60"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/60"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/60"></div>
      </div>
      <span class="text-xs text-surface-200/40 font-mono ml-2">{language}</span>
    </div>
    <div class="flex items-center gap-2">
      <button onclick={reset} class="text-xs text-surface-200/50 hover:text-surface-200 px-2 py-1 rounded hover:bg-surface-700 transition-colors">Reset</button>
      <button onclick={runCode} class="text-xs font-semibold text-white bg-green-500 hover:bg-green-400 px-3 py-1 rounded transition-colors flex items-center gap-1">
        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/></svg>
        Run
      </button>
    </div>
  </div>

  <textarea
    bind:value={editorCode}
    class="w-full p-4 bg-surface-800 text-surface-100 font-mono text-sm leading-relaxed resize-y min-h-[120px] focus:outline-none border-none"
    spellcheck="false"
    rows="8"
  ></textarea>

  {#if showOutput}
    <div class="border-t border-surface-700">
      <div class="flex items-center gap-2 px-4 py-2 bg-surface-900 text-xs text-surface-200/50">
        <span>Output</span>
        {#if passed}
          <span class="badge bg-green-500/20 text-green-400 text-xs">Passed!</span>
        {/if}
      </div>
      {#if isWebLanguage}
        <iframe
          bind:this={iframeRef}
          sandbox="allow-scripts"
          class="w-full h-48 bg-white"
          title="Preview"
        ></iframe>
      {:else}
        <iframe
          bind:this={iframeRef}
          sandbox="allow-scripts"
          class="hidden"
          title="JS Runner"
        ></iframe>
        <pre class="p-4 text-sm font-mono text-surface-200 max-h-48 overflow-y-auto {passed ? 'bg-green-500/5' : ''}">{output}</pre>
      {/if}
    </div>
  {/if}
</div>
