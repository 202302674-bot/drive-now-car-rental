import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CarCard from "./components/CarCard";
import BookingModal from "./components/BookingModal";
import SearchBar from "./components/SearchBar";
import "./App.css";

import cars from "./data/cars";

function App() {
  const [search, setSearch] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);
  const [confirmedCar, setConfirmedCar] = useState(null);

  const normalizedSearch = search.trim().toLowerCase();
  const filteredCars = cars.filter((car) =>
    `${car.name} ${car.type}`.toLowerCase().includes(normalizedSearch)
  );

  const handleBooking = (car) => {
    setSelectedCar(car);
    setConfirmedCar(null);
  };

  const handleConfirmBooking = () => {
    if (!selectedCar) {
      return;
    }

    setConfirmedCar(selectedCar);
    setSelectedCar(null);
  };

  const closeModal = () => {
    setSelectedCar(null);
    setConfirmedCar(null);
  };

  return (
    <>
      <Navbar />

      <Hero />

      <main>
        <section className="cars-section" id="cars">
          <div className="section-title">
            <p>OUR FLEET</p>

            <h1>Choose Your Perfect Car</h1>

            <span>
              Find the perfect car for your next journey.
            </span>
          </div>

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <div className="cars-grid">
            {filteredCars.map((car) => (
              <CarCard
                key={car.id}
                name={car.name}
                type={car.type}
                price={car.price}
                rating={car.rating}
                image={car.image}
                available={car.available}
                discount={car.discount}
                onBook={() => handleBooking(car)}
              />
            ))}
          </div>

          {filteredCars.length === 0 && (
            <p className="empty-results">
              No cars found. Try another model or car type.
            </p>
          )}
        </section>

        <section className="about-section" id="about">
          <div className="about-content">
            <p className="section-label">WHY DRIVE NOW</p>
            <h2>Premium rentals with simple booking</h2>
            <p>
              DriveNow keeps high-quality cars, clear daily pricing,
              and availability status in one place so booking stays fast.
            </p>
          </div>

          <div className="about-stats">
            <div>
              <strong>24/7</strong>
              <span>Support</span>
            </div>

            <div>
              <strong>6</strong>
              <span>Premium Cars</span>
            </div>

            <div>
              <strong>4.8</strong>
              <span>Average Rating</span>
            </div>
          </div>
        </section>
      </main>

      {selectedCar && (
        <BookingModal
          car={selectedCar}
          onClose={closeModal}
          onConfirm={handleConfirmBooking}
        />
      )}

      {confirmedCar && (
        <div className="success-message">
          <div>
            <span className="success-icon">✓</span>

            <h3>Booking Confirmed!</h3>

            <p>
              Your {confirmedCar.name} has been booked
              successfully.
            </p>

            <button type="button" onClick={closeModal}>
              Done
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default App;
