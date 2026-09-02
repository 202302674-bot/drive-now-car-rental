import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Drive<span>Now</span>
      </Link>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <Link to="/#cars">Cars</Link>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <Link to="/contact" className="nav-button">
        Get Started
      </Link>
    </nav>
  );
}

export default Navbar;