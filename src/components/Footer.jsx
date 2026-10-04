import { profile } from "../data/content.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span>
            © {year} {profile.name}
          </span>
          <span className="footer-visits">
            <img
              src="https://visitor-badge.laobi.icu/badge?page_id=suyogs-live.vercel.app"
              alt="Site visitor count"
              loading="lazy"
            />
          </span>
          <span>Built with React</span>
        </div>
      </div>
    </footer>
  );
}
