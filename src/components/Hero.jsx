import { hero } from "../data/content.js";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div>
            <p className="hero-eyebrow">{hero.eyebrow}</p>
            <h1 className="hero-headline">{hero.headline}</h1>
            <p className="hero-subtext">{hero.subtext}</p>

            <div className="hero-ctas">
              <a className="btn btn-primary" href={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </a>
              <a className="btn btn-secondary" href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>

          <div className="hero-code" aria-hidden="true">
            <div className="hero-code-dots">
              <span />
              <span />
              <span />
            </div>
            <pre>
              {hero.snippet.map((line, i) => (
                <div key={i}>{formatLine(line)}</div>
              ))}
            </pre>
          </div>
        </div>

        <div className="hero-stats">
          {hero.stats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <div className="hero-stat-value">{stat.value}</div>
              <div className="hero-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Lightly colorizes the decorative code snippet: keys before a colon,
// quoted strings in a warm accent — purely cosmetic, no real parsing.
function formatLine(line) {
  const match = line.match(/^(\s*)([\w]+)(:\s*)(.*)$/);
  if (!match) return line;
  const [, indent, key, sep, rest] = match;
  return (
    <>
      {indent}
      <span className="key">{key}</span>
      {sep}
      {colorizeStrings(rest)}
    </>
  );
}

function colorizeStrings(text) {
  const parts = text.split(/('.*?')/g);
  return parts.map((part, i) =>
    part.startsWith("'") ? (
      <span className="str" key={i}>
        {part}
      </span>
    ) : (
      part
    )
  );
}
