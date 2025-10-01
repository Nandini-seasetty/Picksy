import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import Navbar from "./Components/Navbar";
import Contact from "./Contact";
import axios from "axios";
import Footer from "./Components/Footer";
import CategoryProduct from "./CategoryProduct";
import ProtectedRoute from "./Components/ProtectedRoute";

const App = () => {
  const [location, setLocation] = useState(null);
  const [openDropDown, setOpenDropDown] = useState(false);

  const getLocation = async () => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        console.log("Lat:", latitude, "Lng:", longitude);

        const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

        try {
          const { data } = await axios.get(url, {
            headers: { Accept: "application/json" },
          });

          console.log("Location:", data);
          setLocation(data);
          setOpenDropDown(false);
        } catch (error) {
          console.error("Error fetching location:", error);
        }
      },
      (error) => {
        console.error("Geolocation error:", error.message);
      }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <BrowserRouter>
      <Navbar
        location={location}
        getLocation={getLocation}
        openDropDown={openDropDown}
        setOpenDropDown={setOpenDropDown}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/category/:category" element={<CategoryProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart location={location} getLocation={getLocation} />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
