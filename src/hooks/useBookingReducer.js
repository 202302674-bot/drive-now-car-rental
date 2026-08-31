import { useReducer } from "react";

const initialState = {
  selectedCar: null,
  confirmedCar: null,
};

function bookingReducer(state, action) {
  switch (action.type) {
    case "OPEN_BOOKING":
      return {
        selectedCar: action.car,
        confirmedCar: null,
      };

    case "CONFIRM_BOOKING":
      if (!state.selectedCar) {
        return state;
      }

      return {
        selectedCar: null,
        confirmedCar: {
          ...state.selectedCar,
          pickupDate: action.pickupDate,
          returnDate: action.returnDate,
        },
      };

    case "CLOSE_BOOKING":
      return {
        selectedCar: null,
        confirmedCar: null,
      };

    default:
      return state;
  }
}

function useBookingReducer() {
  return useReducer(bookingReducer, initialState);
}

export default useBookingReducer;
