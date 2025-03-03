import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pricing from "../pages/Pricing"; // Adjust path as needed
import Faq from "../components/FAQ";
import Contact from "../pages/Contact";
import SignIn from "../pages/SignIn";
import IntegrationsPage from "../pages/Integration";


import Home from "../pages/Home";
// import About from "../pages/About";
// import NotFound from "../pages/NotFound"; // 404 Page

const AppRoutes = () => {
  return (
    <Router>
          <Navbar /> 
          <div className="main-container">
      <Routes>
         <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/signin" element={<SignIn />} />
        <Route path="/integrations" element={<IntegrationsPage />} />

        {/* <Route path="*" element={<NotFound />} /> 404 Page */}
      </Routes>
      </div>
      <Faq />
      <Footer />
    </Router>
  );
};

export default AppRoutes;
