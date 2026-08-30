function BookingModal({ car, onClose, onConfirm }) {
  if (!car) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="booking-modal">
        <button
          type="button"
          className="close-button"
          onClick={onClose}
          aria-label="Close booking modal"
        >
          ×
        </button>

        <p className="modal-label">BOOK YOUR CAR</p>

        <h2>{car.name}</h2>

        <p className="modal-car-type">
          {car.type} · ${car.price} / day
        </p>

        <div className="booking-form">
          <div className="form-group">
            <label htmlFor="pickup-date">Pick-up Date</label>
            <input id="pickup-date" type="date" />
          </div>

          <div className="form-group">
            <label htmlFor="return-date">Return Date</label>
            <input id="return-date" type="date" />
          </div>

          <button
            type="button"
            className="confirm-button"
            onClick={onConfirm}
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingModal;
