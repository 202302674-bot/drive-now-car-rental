import styles from "./CarCard.module.css";

function CarCard({
  name,
  type,
  price,
  rating,
  image,
  available,
  discount,
  onBook,
}) {
  return (
    <div className="car-card">
      <div className="car-image-container">
        <img
          src={image}
          alt={name}
          className="car-image"
        />

        {discount && (
          <span className={styles.badge}>
            20% OFF
          </span>
        )}
      </div>

      <div className="car-info">
        <div className="car-header">
          <div>
            <h3>{name}</h3>
            <p>{type}</p>
          </div>

          <span
            className="rating"
            style={{
              fontWeight: "700",
              letterSpacing: "1px",
            }}
          >
            ⭐ {rating}
          </span>
        </div>

        <div className="car-details">
          <div>
            <strong>${price}</strong>
            <span> / day</span>
          </div>

          <span
            className={
              available
                ? styles.available
                : styles.unavailable
            }
          >
            {available ? "Available" : "Rented"}
          </span>
        </div>

        <button
          type="button"
          className={
            available
              ? "book-button btn btn-primary"
              : "disabled-button btn btn-secondary"
          }
          disabled={!available}
          onClick={available ? onBook : undefined}
        >
          {available ? "Book Now" : "Unavailable"}
        </button>
      </div>
    </div>
  );
}

export default CarCard;
