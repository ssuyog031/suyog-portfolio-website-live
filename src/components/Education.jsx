import { education } from "../data/content.js";

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-head">
          <span className="section-index">06</span>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="card education-card">
          <div className="education-degree">{education.degree}</div>
          <div className="education-school">{education.school}</div>
          <div className="education-university">{education.university}</div>
        </div>
      </div>
    </section>
  );
}
