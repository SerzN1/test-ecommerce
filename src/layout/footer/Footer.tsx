import './Footer.css';

function Footer() {
  return (
    <div className="footer container-fluid pt-4 pb-4">
      &copy; <span className="text-muted">{new Date().getFullYear()}</span>
    </div>
  );
}

export default Footer;
