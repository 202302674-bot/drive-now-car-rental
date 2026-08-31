import { useMemo, useState } from "react";
import styled from "styled-components";

const ModalTitle = styled.h2`
  font-size: 30px;
  margin: 0 0 8px;
`;

const ModalLabel = styled.p`
  color: #2563eb;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 8px;
`;

const ConfirmButton = styled.button`
  width: 100%;
  border: none;
  padding: 14px;
  border-radius: 10px;
  background: #2563eb;
  color: white;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #1d4ed8;
  }
`;

function getTodayInputValue() {
  const today = new Date();
  const timezoneOffset = today.getTimezoneOffset() * 60_000;

  return new Date(today.getTime() - timezoneOffset)
    .toISOString()
    .slice(0, 10);
}

function addDaysToInputValue(inputValue, days) {
  const date = new Date(`${inputValue}T00:00:00`);

  date.setDate(date.getDate() + days);

  return date.toISOString().slice(0, 10);
}

function BookingModal({ car, onClose, onConfirm }) {
  const today = useMemo(() => getTodayInputValue(), []);
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [error, setError] = useState("");

  if (!car) {
    return null;
  }

  const minReturnDate = pickupDate
    ? addDaysToInputValue(pickupDate, 1)
    : today;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!pickupDate || !returnDate) {
      setError("Select both pick-up and return dates.");
      return;
    }

    if (returnDate <= pickupDate) {
      setError("Return date must be after the pick-up date.");
      return;
    }

    onConfirm({
      pickupDate,
      returnDate,
    });
  };

  return (
    <div className="modal-overlay">
      <div
        className="booking-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
      >
        <button
          type="button"
          className="close-button"
          onClick={onClose}
          aria-label="Close booking modal"
        >
          ×
        </button>

        <ModalLabel>BOOK YOUR CAR</ModalLabel>

        <ModalTitle id="booking-title">
          {car.name}
        </ModalTitle>

        <p className="modal-car-type">
          {car.type} · ${car.price} / day
        </p>

        <form
          className="booking-form"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="pickup-date">
              Pick-up Date
            </label>

            <input
              id="pickup-date"
              type="date"
              min={today}
              value={pickupDate}
              onChange={(event) => {
                const nextPickupDate = event.target.value;

                setPickupDate(nextPickupDate);
                setError("");

                if (
                  returnDate &&
                  returnDate <= nextPickupDate
                ) {
                  setReturnDate("");
                }
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="return-date">
              Return Date
            </label>

            <input
              id="return-date"
              type="date"
              min={minReturnDate}
              value={returnDate}
              onChange={(event) => {
                setReturnDate(event.target.value);
                setError("");
              }}
            />
          </div>

          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}

          <ConfirmButton
            type="submit"
          >
            Confirm Booking
          </ConfirmButton>
        </form>
      </div>
    </div>
  );
}

export default BookingModal;
