import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#home" className="brand">
          <img src="/logo.png" alt="SKS Engineering" />
          <div className="brand-text">
            <span>SKS</span>
            <span>Engineering</span>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Get a Quote
        </a>

      </div>
    </header>
  );
}

export default Navbar;