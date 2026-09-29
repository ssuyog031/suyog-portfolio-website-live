import { certifications } from "../data/content.js";

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <div className="section-head">
          <span className="section-index">05</span>
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="cert-grid">
          {certifications.map((cert) => (
            <div className="card cert-card" key={cert.title}>
              <div className="cert-title">{cert.title}</div>
              <div className="cert-issuer">{cert.issuer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
