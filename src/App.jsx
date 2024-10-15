import { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/00-Header/Header";
import Home from "./components/01-Home/Home";
import About from "./components/02-About/About";
import Class from "./components/03-Class/Class";
import Gallery from "./components/04-Gallery/Gallery";
import Blog from "./components/05-Blog/Blog";
import Contact from "./components/06-Contact/Contact";
import Footer from "./components/10-Footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

// Import SpeedDial and Toast from PrimeReact
import { SpeedDial } from "primereact/speeddial";
import { Toast } from "primereact/toast";
import BlogDetails from "./components/05-Blog/BlogDetails";

function App() {
  const toast = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  const handleWhatsappClick = () => {
    window.open("https://wa.me/919940063000", "_blank");
  };

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/class" element={<Class />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogDetails" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
      <Toast ref={toast} />
      <SpeedDial
        showIcon="pi pi-whatsapp"
        radius={120}
        type="quarter-circle"
        direction="up-left"
        onClick={handleWhatsappClick}
        style={{
          right: 30,
          bottom: 40,
          zIndex: "10000",
          borderRadius: "50%",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      />
    </>
  );
}

export default App;
