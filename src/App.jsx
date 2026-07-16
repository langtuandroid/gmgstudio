import { useEffect, useState } from "react";

const INSTALL_COMMAND = "npm install -g @gmg-studio/ucp@latest";

const capabilities = [
  ["01", "Index the project", "Resolve dependencies, reverse references, component usages and prefab contents from a persistent project index."],
  ["02", "Graph the code", "Trace calls, reads, writes and inheritance with Roslyn semantics plus Unity lifecycle, assembly, attribute and asset-reference metadata."],
  ["03", "Control the Editor", "Inspect, create, modify, compile, test, profile and verify Unity through a compact MCP interface."],
];

const workflow = [
  ["$", "ucp --install"],
  ["✓", "MCP config · skills · docs installed"],
  ["$", "ucp --index --scope Assets"],
  ["✓", "Asset graph ready · GUID refs resolved"],
  ["$", "ucp --graph --scope Assets --timeout 300"],
  ["✓", "Semantic C# graph ready · Roslyn applied"],
];

const differentiators = [
  ["PROJECT INTELLIGENCE", "Know what references what", "Find asset relationships, component usage and downstream impact without asking an agent to scan the entire project."],
  ["SEMANTIC GRAPH", "Understand code by meaning", "Trace calls, state access and inheritance with semantic confidence instead of relying only on text search."],
  ["UNITY IMPACT", "Connect code to real content", "See how a code change reaches the scenes, prefabs and assets that ship in the game."],
  ["CONTEXT CONTROL", "Ask narrowly. Receive narrowly.", "Targeted queries return the answer an agent needs while keeping irrelevant project data out of context."],
  ["COMPACT MCP", "Capability without tool sprawl", "A deliberately small surface covers the development loop and preserves more context for the actual work."],
  ["SAFE AUTHORING", "Change Unity with guardrails", "Editor-aware operations protect serialized content and make high-impact changes explicit."],
];

const benchmark = [
  ["Single UI assertion", "~3,865", "~30", "99.2%"],
  ["Filtered UI snapshot", "~3,865", "~200", "94.8%"],
  ["Structured query output", "JSON baseline", "Text default", "~50%"],
];

const faqs = [
  ["What is Unity Control?", "Unity Control is an MCP bridge and command-line tool that gives coding agents a Unity-aware way to inspect projects, operate the Editor, run verification, and reason across code and assets."],
  ["How are the asset index and code graph different?", "The asset index maps Unity content and references. The semantic code graph maps C# behavior and relationships. Together they help an agent understand the likely impact of a change before editing."],
  ["Does UCP replace the Unity Editor?", "No. UCP connects automation and AI coding tools to the real Unity Editor. Unity remains the source of truth for serialized assets, play mode, compilation, tests, and runtime state."],
  ["Which AI coding tools can use UCP?", "UCP runs as an MCP server over standard input and output, so it is designed for MCP-compatible coding clients. Install the npm package, then run ucp --install to configure the supported client environment."],
];

function Mark() {
  return (
    <svg className="mark" viewBox="0 0 36 36" aria-hidden="true">
      <path d="M18 2 32 10v16l-14 8L4 26V10L18 2Z" />
      <path d="m18 9 8 4.5v9L18 27l-8-4.5v-9L18 9Z" />
      <path d="M18 9v18M10 13.5l16 9M26 13.5l-16 9" />
    </svg>
  );
}

function CopyInstall({ className = "copy", label = "Copy" }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(INSTALL_COMMAND);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return <button className={className} type="button" onClick={copy} aria-live="polite">{copied ? "Copied" : label}</button>;
}

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Unity Control home">
          <Mark />
          <span>UNITY CONTROL</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#capabilities">Product</a>
          <a href="#intelligence">Index + graph</a>
          <a href="#benchmark">Token benchmark</a>
          <a href="#start">Install</a>
        </nav>
        <a className="nav-cta" href="#start">Get started <span>↗</span></a>
      </header>

      <main id="main-content">
        <section className="hero section-pad">
          <div className="hero-copy" data-reveal>
            <div className="eyebrow"><span /> Unity Control</div>
            <h1>Put Unity<br />on the <em>command line.</em></h1>
            <p className="hero-lede">A Unity-aware MCP bridge that lets coding agents inspect, change, compile, test and verify the real Editor — end to end.</p>
            <div className="hero-actions">
              <a className="button primary" href="#start">Start building <span>↗</span></a>
              <a className="button secondary" href="#workflow">See how it works</a>
            </div>
            <div className="proof" aria-label="Product attributes">
              <span>MCP native</span><i />
              <span>Asset index</span><i />
              <span>Semantic graph</span>
            </div>
          </div>

          <div className="terminal-wrap" data-reveal>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="terminal">
              <div className="terminal-bar">
                <span className="lights"><i /><i /><i /></span>
                <span>ucp — MyGame</span>
                <span>•••</span>
              </div>
              <div className="terminal-body">
                {workflow.map(([symbol, line], index) => (
                  <div className={`terminal-line line-${index + 1}`} key={line}>
                    <span className={symbol === "$" ? "prompt" : "result"}>{symbol}</span>
                    <code>{line}</code>
                  </div>
                ))}
                <div className="cursor-line"><span className="prompt">$</span><i /></div>
              </div>
              <div className="terminal-status"><span><i /> Unity connected</span><span>ready</span></div>
            </div>
          </div>
        </section>

        <section className="statement section-pad" data-reveal>
          <p className="section-kicker">The missing interface</p>
          <h2>Unity is visual.<br /><span>Your tools are not.</span></h2>
          <p>Unity Control gives coding agents a precise way to understand the project, operate the real Editor, and verify outcomes instead of guessing from source files alone.</p>
        </section>

        <section className="intelligence section-pad" id="intelligence">
          <div className="intelligence-head" data-reveal>
            <p className="section-kicker">Project intelligence</p>
            <h2>Index every asset.<br /><em>Graph every consequence.</em></h2>
            <p>UCP gives coding agents a connected view of Unity content and C# behavior — enough to reason about impact without exposing the machinery behind it.</p>
          </div>
          <div className="intelligence-board" data-reveal>
            <article className="intel-column">
              <div className="intel-label"><span>01</span> ASSET INDEX</div>
              <h3>Know what references what.</h3>
              <p>Search project content, follow dependencies, find reverse references and understand where components are actually used.</p>
              <code>ucp --index --scope Assets</code>
            </article>
            <div className="intel-link"><span>IMPACT</span><i /><b>↔</b></div>
            <article className="intel-column graph-column">
              <div className="intel-label"><span>02</span> SEMANTIC CODE GRAPH</div>
              <h3>See what a change touches.</h3>
              <p>Trace call paths, state access, inheritance and Unity-aware relationships with semantic analysis.</p>
              <code>ucp --graph --scope Assets</code>
            </article>
          </div>
          <div className="intel-proof" data-reveal><span>ASSET IMPACT</span><span>CODE PATHS</span><span>UNITY-AWARE CONTEXT</span><span>SEMANTIC CONFIDENCE</span></div>
        </section>

        <section className="difference section-pad" id="different">
          <div className="section-head difference-head" data-reveal>
            <div><p className="section-kicker">Built beyond scene CRUD</p><h2>The workflow<br />others leave open.</h2></div>
            <p>Unity Control is built around the costly parts of agentic Unity development: focus, project locks, raw logs, runtime state and unsafe YAML edits.</p>
          </div>
          <div className="difference-grid">
            {differentiators.map(([label, title, text]) => (
              <article className="difference-card" data-reveal key={title}>
                <span>{label}</span><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="benchmark section-pad" id="benchmark">
          <div className="benchmark-copy" data-reveal>
            <p className="section-kicker">Documented payload budget</p>
            <h2>Spend tokens<br />on decisions.<br /><em>Not Unity YAML.</em></h2>
            <p>UCP replaces broad project dumps with narrow questions and compact answers.</p>
            <div className="benchmark-callout"><strong>99.2%</strong><span>less context for one targeted UI check<br />versus an unfiltered snapshot</span></div>
          </div>
          <div className="benchmark-table" data-reveal>
            <table>
              <caption className="sr-only">UCP context usage compared with broader output formats</caption>
              <thead><tr><th scope="col">Workflow</th><th scope="col">Broad output</th><th scope="col">Unity Control</th><th scope="col">Reduction</th></tr></thead>
              <tbody>{benchmark.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td className={index === 3 ? "saving" : ""} key={cell}>{cell}{index > 0 && index < 3 && row[0] !== "Structured query output" ? " tok" : ""}</td>)}</tr>)}</tbody>
            </table>
            <p className="benchmark-note">Payload guidance from current UCP operations. Actual usage varies by project and query. The public benchmark reports output size only; internal indexing and query strategy remain undisclosed.</p>
          </div>
        </section>

        <section className="capabilities section-pad" id="capabilities">
          <div className="section-head" data-reveal>
            <p className="section-kicker">Full editor access</p>
            <h2>Know the project.<br />Control the Editor.</h2>
          </div>
          <div className="capability-grid">
            {capabilities.map(([number, title, text]) => (
              <article className="capability-card" data-reveal key={number}>
                <span className="card-number">{number}</span>
                <div className="card-icon" aria-hidden="true"><span /><span /><span /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="architecture section-pad" id="workflow">
          <div className="architecture-copy" data-reveal>
            <p className="section-kicker">Local by design</p>
            <h2>Simple in.<br />Structured out.</h2>
            <p>A focused control layer connects your development tools with the Unity Editor and returns predictable, structured results.</p>
            <ul>
              <li><span>✓</span> Editor-aware actions</li>
              <li><span>✓</span> Structured results</li>
              <li><span>✓</span> Built for automation</li>
            </ul>
          </div>
          <div className="flow" data-reveal aria-label="Unity Control architecture">
            <div className="flow-node"><small>INPUT</small><strong>CLI · AGENT · CI</strong></div>
            <div className="flow-link"><span>structured commands</span><i /></div>
            <div className="flow-node active"><small>CONTROL</small><strong><Mark /> UNITY CONTROL</strong></div>
            <div className="flow-link"><span>control layer</span><i /></div>
            <div className="flow-node"><small>RUNTIME</small><strong>UNITY EDITOR</strong></div>
          </div>
        </section>

        <section className="start section-pad" id="start" data-reveal>
          <div>
            <p className="section-kicker">Install from npm</p>
            <h2>One package.<br />One bridge.</h2>
          </div>
          <div className="install-panel access-panel">
            <div className="access-copy">
              <span>NPM · LATEST RELEASE</span>
              <h3>Install Unity Control</h3>
              <p>Install the latest UCP CLI globally, then let it configure the MCP client, skills and local documentation.</p>
            </div>
            <div className="install-command" id="install-command"><span>$</span><code>{INSTALL_COMMAND}</code><CopyInstall /></div>
            <div className="install-next"><span>01</span><code>ucp --install</code><span>02</span><code>Restart your MCP client</code></div>
            <div className="install-actions">
              <CopyInstall className="button primary copy copy-install-button" label="Copy install command" />
              <a className="text-link" href="#different">Explore the difference →</a>
            </div>
          </div>
        </section>

        <section className="faq section-pad" id="faq">
          <div className="faq-head" data-reveal>
            <p className="section-kicker">Common questions</p>
            <h2>Unity Control,<br />clearly explained.</h2>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details data-reveal key={question}>
                <summary>{question}<span aria-hidden="true">+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer section-pad">
        <a className="brand" href="#top"><Mark /><span>UNITY CONTROL</span></a>
        <p>Programmatic control for the Unity Editor.</p>
        <div><a href="#capabilities">Product</a><a href="#different">Why different</a><span>GmG Studio</span></div>
      </footer>
    </div>
  );
}

export default App;
