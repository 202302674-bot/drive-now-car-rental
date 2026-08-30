function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-label">PREMIUM CAR RENTAL</p>

        <h1>
          Drive Your
          <span> Dream Car</span>
        </h1>

        <p className="hero-description">
          Choose from our premium collection of cars
          and enjoy a smooth and comfortable journey.
        </p>

        <div className="hero-buttons">
          <a href="#cars" className="primary-button">
            Explore Cars
          </a>

          <a href="#about" className="secondary-button">
            Learn More
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
          alt="Premium car"
        />
      </div>
    </section>
  );
}

export default Hero;