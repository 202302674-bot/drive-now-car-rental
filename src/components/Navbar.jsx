function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Drive<span>Now</span>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#cars">Cars</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#cars" className="nav-button">
        Get Started
      </a>
    </nav>
  );
}

export default Navbar;
