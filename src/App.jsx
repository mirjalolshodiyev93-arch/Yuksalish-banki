import { Routes, Route } from "react-router-dom";
import Navbar from "./components/_compoint_navbar/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Contacts from "./components/Contact";
import Kredit from "./components/Kredit";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/contact" element={<Contacts/>}/>
        <Route path="/kredit" element={<Kredit/>}/>

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
