import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <main className="about-page">
        <div className="container py-5">
          <div className="text-center mb-5">
            <p className="section-label">ABOUT DRIVENOW</p>

            <h1>About DriveNow</h1>

            <p className="lead">
              Your simple and reliable car rental experience.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 p-4">
                <h3>🚗 Quality Cars</h3>
                <p>
                  We offer a selection of comfortable and
                  reliable cars for different types of journeys.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 p-4">
                <h3>💰 Clear Pricing</h3>
                <p>
                  Our daily prices are simple and easy to
                  understand with no complicated booking process.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 p-4">
                <h3>⚡ Easy Booking</h3>
                <p>
                  Choose your car, select your dates, and
                  complete your booking in just a few steps.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>

            <Link
              to="/"
              className="btn btn-outline-secondary ms-2"
            >
              Back Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default About;