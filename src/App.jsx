import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/Aboutus";
import Sportscards from "./Pages/sportscards";
import Sportsdetails from "./Pages/sportsdetails";
import BookingPage from "./Pages/BookingPage";
import Navbar from "./Components/Navbar";
import BookingSummary from "./Pages/bookingsummary";
import Footer from "./Components/Footer";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";

import AdminLogin from "./Admin/AdminLogin";
import Dashboard from "./Admin/Dashboard";
import ManageBookings from "./Admin/ManageBookings";
import ManageGallery from "./Admin/ManageGallery";
import AdminLayout from "./Admin/AdminLayout";
import ManageEnquiries from "./Admin/ManageEnquiries";


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/sports" element={<Sportscards />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/sports/:title" element={<Sportsdetails />} />
        <Route path="/booking-summary" element={<BookingSummary />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/admin" element={<AdminLogin />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<ManageBookings />} />
          <Route path="gallery" element={<ManageGallery />} />
          <Route path="enquiries" element={<ManageEnquiries />} />
        </Route>

        <Route
          path="*"
          element={
            <div className="h-screen flex items-center justify-center text-3xl font-bold text-green-800">
              404 - Page Not Found
            </div>
          }
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;