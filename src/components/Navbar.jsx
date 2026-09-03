import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "../redux/slices/cartSlice";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const cartCount = useSelector(selectCartCount);

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

      <div className="nav-actions">
        <ThemeToggle />
        <a href="#cart" className="cart-link">Cart ({cartCount})</a>
      </div>

      <Link to="/contact" className="nav-button">
        Get Started
      </Link>
    </nav>
  );
}

export default Navbar;