
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Pedro Chipana</h1>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/resume" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
