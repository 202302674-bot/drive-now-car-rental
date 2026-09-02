import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function NotFound() {
  return (
    <>
      <main className="not-found-page">
        <div className="container text-center py-5">
          <div className="py-5">
            <p className="section-label">DRIVENOW</p>

            <h1
              style={{
                fontSize: "100px",
                fontWeight: "800",
                marginBottom: "10px",
              }}
            >
              404
            </h1>

            <h2>Page Not Found</h2>

            <p className="lead mb-4">
              Sorry, the page you are looking for does not exist.
            </p>

            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default NotFound;