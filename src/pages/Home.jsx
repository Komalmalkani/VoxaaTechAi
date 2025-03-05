import { motion } from "framer-motion";
import Pricing from "./Pricing";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom"; // Import Link
import Contact from "../pages/Contact"
import "../styles/Home.css"
const Home = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const text = "The Future Is Here.";

  return (
    <div className="w-100">
      {/* Hero Section - Fullscreen */}
      <section className="hero-section d-flex flex-column justify-content-center align-items-center text-center">

        {/* Background Wrapper with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "radial-gradient(rgb(168, 165, 166),rgb(168, 165, 166),#06071D,#06071D),url('https://e7.pngegg.com/pngimages/841/592/png-clipart-blue-smoke-illustration-smoke-transparency-and-translucency-youtube-background-light-smoke-blue-hand-thumbnail.png')",
            backgroundColor: "#06071D",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "multiply",
            zIndex: -1,
          }}
        />

        {/* Foreground Content */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-5"
        >
    
<motion.h1
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="display-2 fw-bold mt-n2"
  style={{
    background:
      "linear-gradient(90deg,rgb(163, 135, 184),rgb(184, 52, 118),rgb(177, 118, 47))",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  }}
>
  {text.split("").map((letter, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.05, delay: index * 0.1 }} // Simulating typing
    >
      {letter}
    </motion.span>
  ))}
</motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="lead text-light"
          >
            Shape the future with Voice-Powered Innovation.
          </motion.p>

          <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.6 }}
  viewport={{ once: true }}
  className="mt-4 px-3 d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center"
>

            <button
              className="btn me-4 text-white"
              style={{
                background:
                  "linear-gradient(90deg, rgb(102, 42, 148), rgb(151, 27, 89), rgb(199, 126, 37))",
                border: "none",
                padding: "10px 20px",
                fontSize: "18px",
                textDecoration: "none",
                boxShadow:"1px 5px 5px black"

              }}
            >
              <Link
                to="/pricing"
                style={{ color: "white", textDecoration: "none" }}
              >
                Get Started
              </Link>
            </button>

            <button
              className="btn me-4 "
              style={{
                color: "white",
                border: "1px solid white",
                background: "transparent",
                padding: "10px 20px",
                fontSize: "18px",
                boxShadow:"2px 8px 8px black"
              }}
            >
              <Link
                to="/Integrations"
                style={{ color: "white", textDecoration: "none" }}
              >
                Learn The Future
              </Link>
            </button>
          </motion.div>
        </motion.section>
      </section>

      {/* Scrollable Content */}
      <div className="container-fluid px-4  text-center " style={{border:"none"}}>
        {/* Features Section */}
        <section className="features-section row g-4 mt-n5 mb-5 border-0" 
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "radial-gradient(#06071D,#000003,#000003),url('https://e7.pngegg.com/pngimages/841/592/png-clipart-blue-smoke-illustration-smoke-transparency-and-translucency-youtube-background-light-smoke-blue-hand-thumbnail.png')",
            backgroundSize: "cover",
            backgroundColor:"",
            backgroundPosition: "center",
            backgroundBlendMode: "multiply",
            zIndex: -1, // Keeps background behind content
            borderRadius:"50%"
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }} // Re-triggers when 20% of element is in view
            className="col-md-4 border-0 bg-transparent"
          
          >
            <div className="card p-4 shadow border-0 " >
              <h3>New Facilitator</h3>
              <p className="text-secondary">Import Knowledge Base and upgrade your AI assistant.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }} // Re-triggers when 20% of element is in view
            className="col-md-4"
          >
            <div className="card p-4 shadow">
              <h3>AI Voice Agent</h3>
              <p className="text-secondary">Test AI LLM with 20,104+ integrations worldwide.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }} // Re-triggers when 20% of element is in view
            className="col-md-4"
          >
            <div className="card p-4 shadow">
              <h3>Custom Personalities</h3>
              <p className="text-secondary">
                Choose from professional, enthusiastic, or bubbly personalities.
              </p>
            </div>
          </motion.div>
        </section>

        {/* AI Testing Section */}

        {/* Pricing & Integrations */}
      </div>
        <Pricing />
        <Contact/>
    </div>
  );
};

export default Home;
