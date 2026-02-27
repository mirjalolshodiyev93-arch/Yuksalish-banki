import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/_compoint_navbar/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Contacts from "./components/Contact";
import Kredit from "./components/Kredit";
import Dashboard from "./pages/Dashboard";
import NotFound from "./components/404/NotFound";
import AboutUs from "./components/AboutUs";

function App() {
  const location = useLocation();

  // Agar current path 404 sahifa bo'lsa navbar va footer ko‘rinmasin
  const isNotFound = location.pathname === "/404";

  return (
    <>
      {/* Navbar faqat NotFound bo'lmagan holatda */}
      {!isNotFound && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/contact" element={<Contacts/>}/>
        <Route path="/kredit" element={<Kredit/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>

        {/* 404 sahifa */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>

      {/* Footer faqat NotFound bo'lmagan holatda */}
      {!isNotFound && <Footer />}
    </>
  );
}

export default App;