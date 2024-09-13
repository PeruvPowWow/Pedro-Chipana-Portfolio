
import './Footer.css'; // Make sure your CSS file is correctly imported

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <a href="https://github.com/PeruvPowWow" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/pedro-chipana-984b5a119/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
