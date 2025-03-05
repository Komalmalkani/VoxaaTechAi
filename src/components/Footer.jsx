import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="text-light py-4 px-3"
      initial={{ y: 50, opacity: 0, scale: 0.95 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Container fluid="lg">
        {/* Heading */}
        <Row className="text-center">
          <Col xs={12} className="mb-3">
            <motion.h4
              className="fw-bold fs-6 text-uppercase"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join The AI Revolution. The Future Is Here.
            </motion.h4>
          </Col>
        </Row>

        {/* Footer Sections */}
        <Row className="gy-3 text-center">
          {/* Product and Company in one row on small screens */}
          {[
            { title: "Product", items: ["Integrations", "Pricing", "AI Demo Call", "Updates"] },
            { title: "Company", items: ["Blog", "About", "Contact"] },
          ].map((section, index) => (
            <Col xs={12} sm={6} md={4} key={index} className="mb-2">
              <motion.h5
                className="fw-bold text-uppercase fs-6"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                style={{ fontSize: "14px" }} // Smaller text for mobile
              >
                {section.title}
              </motion.h5>

              <ul className="list-unstyled mt-1">
                {section.items.map((item, i) => (
                  <motion.li
                    key={i}
                    className="text-light mb-1"
                    style={{ fontSize: "13px" }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 + i * 0.05 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </Col>
          ))}

          {/* Resources Section (Full Width on Small Screens) */}
          <Col xs={12} md={4} className="mb-2">
            <motion.h5
              className="fw-bold text-uppercase fs-6"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ fontSize: "14px" }}
            >
              Resources
            </motion.h5>

            <ul className="list-unstyled mt-1">
              {["Report a Vulnerability", "Privacy Policy", "Terms of Service"].map((item, i) => (
                <motion.li
                  key={i}
                  className="text-light mb-1"
                  style={{ fontSize: "13px" }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.05 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row className="mt-3">
          <Col xs={12} className="text-center">
            <motion.p
              className="mb-0"
              style={{ fontSize: "12px", opacity: "0.7" }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              © 2025 VoxaaTechAI INC. All rights reserved.
            </motion.p>
          </Col>
        </Row>
      </Container>
    </motion.footer>
  );
};

export default Footer;
