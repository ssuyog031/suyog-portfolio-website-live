import { about } from "../data/content.js";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <span className="section-index">01</span>
          <h2 className="section-title">About</h2>
        </div>

        <div className="card about-card">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
