import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="text-light py-5 px-3">
      <Container fluid="lg">
        {/* Heading */}
        <Row className="text-center">
          <Col xs={12} className="mb-4">
            <h4 className="fw-bold fs-4 text-uppercase">
              Join The AI Revolution. The Future Is Here.
            </h4>
          </Col>
        </Row>

        {/* Footer Sections */}
        <Row className="gy-4 text-center">
          {[ 
            { title: "Product", items: ["Integrations", "Pricing", "AI Demo Call", "Updates"] },
            { title: "Company", items: ["Blog", "About", "Contact"] },
          ].map((section, index) => (
            <Col xs={12} sm={6} md={4} key={index} className="mb-3">
              <h5 className="fw-bold text-uppercase fs-5 mb-3">
                {section.title}
              </h5>
              <ul className="list-unstyled">
                {section.items.map((item, i) => (
                  <li key={i}  className=" mb-2 fs-6" style={{ opacity: "0.6" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </Col>
          ))}

          {/* Resources Section */}
          <Col xs={12} md={4} className="mb-3">
            <h5 className="fw-bold text-uppercase fs-5 mb-3">
              Resources
            </h5>
            <ul className="list-unstyled">
              {["Report a Vulnerability", "Privacy Policy", "Terms of Service"].map((item, i) => (
                <li key={i} className=" mb-2 fs-6" style={{ opacity: "0.6" }}>
                  {item}
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-2">
          <Col xs={12} className="text-center">
            <p className="mb-0 fs-8" style={{ opacity: "0.8" }}>
              © 2025 VoxaaTechAI INC. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
