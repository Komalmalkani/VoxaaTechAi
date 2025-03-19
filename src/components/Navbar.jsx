import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import VoxaatechLogo from "../assets/vpxxa --.png";
import "../styles/Navbar.css";
const navVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, ease: "easeOut", duration: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hover: { scale: 1.1, transition: { duration: 0.2 } },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current page route

  const handleNavClick = () => {
    setIsOpen(false); // Close menu on mobile navigation
  };

  const activeStyle = {
    position: "relative",
    paddingBottom: "5px",
    fontWeight: "bold",
  };

  const underlineStyle = {
    content: '""',
    position: "absolute",
    left: "0",
    bottom: "0",
    width: "100%",
    height: "1px",
    background:
      "linear-gradient(90deg, rgb(163, 135, 184), rgb(184, 52, 118), rgb(177, 118, 47))",
    transform: "scaleX(1)",
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-light bg-transparent"
      variants={navVariants}
      initial="hidden"
      animate="visible"
      style={{ border: "none", backdropFilter: "blur(10px)" }}
    >
      <div className="container">
        <div className="logo-container ">
          <Link to="/" onClick={handleNavClick} className="navbar-brand">
            <img
              src={VoxaatechLogo}
              alt="Voxaatech AI Logo"
              className="logo-img"
            />
          </Link>
        </div>

        <div>
          <Link
            className="btn text-light   d-lg-none"
            to="/pricing"
            onClick={handleNavClick}
            style={{ background: "transparent", fontSize: "14px" }}
          >
            Pricing
          </Link>

          <button
            className="navbar-toggler border-0 "
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className="navbar-toggler-icon"
              style={{ filter: "invert(1)" }}
            ></span>
          </button>
        </div>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <motion.ul className="navbar-nav ms-auto">
            {["Home", "Integrations", "Pricing", "Contact"].map(
              (item, index) => {
                const path =
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(/\s/g, "")}`;
                const isActive = location.pathname === path; // Check if link is active

                return (
                  <motion.li
                    className="nav-item"
                    key={index}
                    variants={itemVariants}
                    whileHover="hover"
                  >
                    <Link
                      className="nav-link text-light"
                      to={path}
                      onClick={handleNavClick}
                      style={
                        isActive
                          ? {
                              ...activeStyle,
                              borderBottom: "3px solid transparent",
                            }
                          : activeStyle
                      }
                    >
                      {item}
                      {isActive && <span style={underlineStyle}></span>}
                    </Link>
                  </motion.li>
                );
              }
            )}

            <motion.li className="nav-item">
              <Link
                className="btn text-light border-light ms-2"
                to="/pricing"
                onClick={handleNavClick}
                style={{ background: "transparent" }}
              >
                Get Started
              </Link>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
