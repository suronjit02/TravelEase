# 🚗 TravelEase – Vehicle Booking & Trip Management Platform

A full-stack MERN web application that allows users to explore, list, manage, and book vehicles for travel purposes. This platform provides a seamless experience for both vehicle owners and travelers.

---

## 🚀 Live Demo

🔗 Live Site: https://travelease-web.netlify.app/

🔗 Client Repository: https://github.com/suronjit02/TravelEase/tree/main/client

🔗 Server Repository: https://github.com/suronjit02/TravelEase/tree/main/server

---

## 🎯 Project Purpose

TravelEase is designed to simplify vehicle rental and trip management by:

* Connecting vehicle owners with travelers
* Providing an easy interface to manage vehicles and bookings
* Demonstrating full-stack development skills using MERN stack

---

## ✨ Key Features

* 🔐 Firebase Authentication (Email/Password + Google Login)
* 🚗 Add, Update, Delete vehicles (Owner-based control)
* 📋 View all vehicles with sorting & filtering options
* 🔍 Search & explore vehicles by category, location, and price
* 🧑‍💻 User-specific dashboards (My Vehicles, My Bookings)
* 📦 MongoDB-based data storage with real-time updates
* ⚡ Responsive design (Mobile, Tablet, Desktop)
* 🎨 Modern UI with consistent layout & spacing

---

## 🧑‍💻 User Functionalities

### 👤 Authentication

* Register with validation (uppercase, lowercase, min 6 chars)
* Login with Email/Password or Google
* Private route protection

### 🚗 Vehicle Management

* Add new vehicle listings
* Update existing vehicle data
* Delete vehicles with confirmation
* View personal vehicles

### 📖 Booking System

* Book/request vehicles
* Store booking data in database
* View user-specific bookings

### 🔎 Explore Vehicles

* View all vehicles
* Sort by price, category, location
* Detailed vehicle page (private route)

---

## 📄 Pages Overview

* Home Page (Banner + Latest Vehicles + Static Sections)
* All Vehicles Page
* Vehicle Details Page 🔒
* Add Vehicle Page 🔒
* My Vehicles Page 🔒
* My Bookings Page 🔒
* Update Vehicle Page 🔒
* Login & Register Page
* Custom 404 Page

---

## 🛠️ Technologies Used

### Frontend

* React.js
* Tailwind CSS
* React Router DOM
* Axios
* Firebase Authentication

### Backend

* Node.js
* Express.js
* MongoDB
* JWT (optional security)

### Packages

* date-fns
* framer-motion
* react-hot-toast / react-toastify

---

## 📁 Project Structure

### Client Side

```id="client1"
src/
 ├── components/
 ├── pages/
 ├── layouts/
 ├── hooks/
 ├── routes/
 └── utils/
```

### Server Side

```id="server1"
server/
 ├── routes/
 ├── controllers/
 ├── middleware/
 ├── config/
 └── index.js
```

---

## ⚙️ Environment Variables

### Client (.env)

```id="env1"
VITE_API_URL=your_api_url
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
```

### Server (.env)

```id="env2"
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret
```

---

## 📊 Challenges Implemented

* Advanced filtering & sorting system
* Dark/Light theme toggle 🌙☀️
* Animation using Framer Motion
* Date formatting using date-fns
* Protected private routes
* Reload-safe routing

---

## 🎨 UI/UX Highlights

* Clean & modern design
* Consistent color theme
* Equal card layouts
* Responsive grid system
* Smooth user experience

---

## 📦 NPM Packages Used

* axios
* react-router-dom
* firebase
* date-fns
* framer-motion
* react-hot-toast / react-toastify
* express
* mongoose
* cors
* dotenv

---

## 🧪 Extra Features

* Loading spinner during data fetch
* Custom error handling (no default alerts ❌)
* Toast notifications for success/error
* User-specific data filtering

---

## 🧑‍💻 Author

**Suronjit Sutradhar**
CSE Student | MERN Stack Developer

---

## 💡 Future Improvements

* Real booking system with payment
* Review & rating system
* Admin dashboard
* Notification system

---

## ❤️ Final Note

TravelEase is built to demonstrate a real-world vehicle booking platform with clean UI, secure backend, and smooth user experience. This project reflects practical MERN stack development skills.
