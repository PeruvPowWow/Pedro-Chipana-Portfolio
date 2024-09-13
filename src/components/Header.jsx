
import { Link } from 'react-router-dom';
import './Header.css'; // Import updated CSS

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Pedro Chipana</h1>
      </div>
      <nav className="nav-links">
        <Link to="/" className="nav-item">About Me</Link>
        <Link to="/portfolio" className="nav-item">Portfolio</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
        <Link to="/resume" className="nav-item">Resume</Link>
      </nav>
    </header>
  );
}

export default Header;
