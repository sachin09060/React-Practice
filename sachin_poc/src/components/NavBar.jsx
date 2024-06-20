import { Link, NavLink } from "react-router-dom";
import './static/style.css'
const NavBar = () => {
  return (
    <div>
      <header className="Header">
        <nav className="Nav-container">
          <div className="Nav-menu" id="nav-menu">
            <ul class="menu">
              <li className="Nav-item">
                <NavLink className="Nav-logo">
                  MOVIE BOX
                </NavLink>
              </li>
              <li className="Nav-item">
                <NavLink to="/" className="Nav-link">
                  Home
                </NavLink>
              </li>
              <li>
                <Link  to="/about" className="Nav-link">
                  About
                </Link>
              </li>
              <li>
                <NavLink to="/contact" className="Nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
