# 🚗 DriveNow - Car Rental

DriveNow is a modern ReactJS car rental website that allows users to explore available cars, check prices and availability, search for cars, and make a booking.

## 🌐 Live Demo

[🚗 View DriveNow Live Demo](https://drive-now-car-rental.vercel.app/)

## 💻 GitHub Repository

[View Source Code](https://github.com/202302674-bot/drive-now-car-rental)

## ✨ Features

- 🚘 Browse different cars
- 💰 Display rental prices per day
- 🟢 Check car availability
- 🔴 Show rented cars
- 🔍 Search for cars
- 📅 Book available cars
- ✅ Booking confirmation
- 📱 Responsive design
- 🎨 Clean and modern user interface

## ⚛️ ReactJS Concepts Used

This project was created to demonstrate the following ReactJS concepts:

### 1. Reusable Components

The project is divided into reusable components:

- Navbar
- Hero
- SearchBar
- CarCard
- BookingModal
- Footer

### 2. Props

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
