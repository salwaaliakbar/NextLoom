import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Logo size={28} />
        <p>AI-first IT services &amp; consulting. Weaving intelligence into everyday work.</p>
        <p className="copy">© {new Date().getFullYear()} NextLoom. All rights reserved.</p>
      </div>
    </footer>
  );
}
