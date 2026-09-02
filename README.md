# 🚗 DriveNow - Car Rental

DriveNow is a modern and responsive ReactJS car rental web application.
Users can explore available cars, search for cars, check prices and
availability, book cars, navigate between multiple pages, and submit
a contact/registration form.

## 🌐 Live Demo

[🚗 View DriveNow Live Demo](https://drive-now-car-rental.vercel.app/)

## 💻 GitHub Repository

[View Source Code](https://github.com/202302674-bot/drive-now-car-rental)

---

# ✨ Features

- 🚘 Browse different cars
- 💰 Display rental prices per day
- 🟢 Check car availability
- 🔴 Show rented cars
- 🔍 Search for cars
- 📅 Book available cars
- ✅ Booking confirmation
- 💾 Save latest booking using Local Storage
- 📱 Responsive design
- 🧭 Multi-page navigation
- 📝 Contact / Registration form
- ✅ Form validation
- 📧 Email validation
- ⏳ Loading state
- ❌ Error handling
- 🎉 Success message
- 🔌 Axios API request
- 🚫 404 Not Found page

---

# ⚛️ Assignment 1 - ReactJS Fundamentals

Assignment 1 focuses on building a reusable ReactJS car rental application.

## Reusable Components

The application is divided into reusable components:

- Navbar
- Hero
- SearchBar
- CarCard
- BookingModal
- Footer

## Props

Props are used to pass car information between components.

Example:

```jsx
<CarCard
  name={car.name}
  type={car.type}
  price={car.price}
  rating={car.rating}
  available={car.available}
/>
