import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CarCard from "../components/CarCard";
import BookingModal from "../components/BookingModal";
import SearchBar from "../components/SearchBar";
import CartSummary from "../components/CartSummary";

import useDocumentTitle from "../hooks/useDocumentTitle";
import useBookingReducer from "../hooks/useBookingReducer";
import { useSelector } from "react-redux";
import { selectProducts } from "../redux/slices/cartSlice";

import "../App.css";

function Home() {
  useDocumentTitle("DriveNow | Car Rental");

  const [search, setSearch] = useState("");
  const products = useSelector(selectProducts);

  const [bookingState, dispatch] = useBookingReducer();

  const { selectedCar, confirmedCar } = bookingState;

  useEffect(() => {
    if (confirmedCar) {
      localStorage.setItem(
        "lastBookedCar",
        JSON.stringify(confirmedCar)
      );
    }
  }, [confirmedCar]);

  const filteredCars = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return products.filter((car) =>
      `${car.name} ${car.type}`
        .toLowerCase()
        .includes(normalizedSearch)
    );
  }, [products, search]);

  const handleBooking = useCallback((car) => {
    dispatch({
      type: "OPEN_BOOKING",
      car,
    });
  }, [dispatch]);

  const handleConfirmBooking = useCallback((bookingDates) => {
    dispatch({
      type: "CONFIRM_BOOKING",
      pickupDate: bookingDates.pickupDate,
      returnDate: bookingDates.returnDate,
    });
  }, [dispatch]);

  const closeModal = useCallback(() => {
    dispatch({
      type: "CLOSE_BOOKING",
    });
  }, [dispatch]);

  return (
    <>
      <Navbar />

      <Hero />

      <CartSummary />

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
                id={car.id}
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
            <p className="section-label">
              WHY DRIVE NOW
            </p>

            <h2>
              Premium rentals with simple booking
            </h2>

            <p>
              DriveNow keeps high-quality cars, clear daily
              pricing, and availability status in one place
              so booking stays fast.
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
            <span className="success-icon">
              ✓
            </span>

            <h3>Booking Confirmed!</h3>

            <p>
              Your {confirmedCar.name} has been booked from{" "}
              {confirmedCar.pickupDate} to{" "}
              {confirmedCar.returnDate}.
            </p>

            <button
              type="button"
              onClick={closeModal}
            >
              Done
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Home;