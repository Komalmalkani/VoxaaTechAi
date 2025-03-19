import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

const Contact = () => {
  const placeholders = {
    fullName: "John Deo",
    email: "Voxxaai@gmail.com",
    Mobile: "+1 123-456-7890",
    businessName: "xyz",
    aiPlan: "",
    message: "Your message...",
  };
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    Mobile: "",
    businessName: "",
    aiPlan: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xjkygybl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for reaching out. you'll soon get an email.",
          confirmButtonColor: "#6a1b9a",
        });

        setFormData({
          fullName: "",
          email: "",
          Mobile: "",
          businessName: "",
          aiPlan: "",
          message: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to send message. Please try again later.",
          confirmButtonColor: "#d32f2f",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Please try again.",
        confirmButtonColor: "#d32f2f",
      });
    }
  };

  return (
    <Container fluid className="min-vw-100 min-vh-100 d-flex align-items-center justify-content-center">
      <Row className="w-100 px-4 py-5">
        {/* Left Column */}
        <Col md={6} className="d-flex flex-column justify-content-center text-center text-md-start">
          {/* Always Visible Heading */}
          {isDesktop ? (
  <motion.h1
    className="fw-bold "
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2, ease: 'easeInOut' }}
    viewport={{ once: false, amount: 0.2 }}
    style={{
      paddingLeft: '8vw',
      background: 'linear-gradient(105deg,rgb(129, 61, 182),rgb(196, 4, 100),rgb(238, 235, 34))',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      fontSize: '65px',
    }}
  >
    Contact Us
  </motion.h1>
) : (
  <motion.h1
  className="fw-bold mb-4"
  initial={{ opacity: 0, y: -10 }} // move from top
  whileInView={{ opacity: 1, y: 0 }} // to original position
  transition={{ duration: 1.2, ease: 'easeInOut' }}
  viewport={{ once: false, amount: 0.2 }}
  style={{
    padding: '1vw',
    background: 'linear-gradient(105deg,rgb(129, 61, 182),rgb(196, 4, 100),rgb(238, 235, 34))',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    fontSize: '22px',
  }}
>
  Book a discovery call now to get started!
</motion.h1>

)}


          {/* Desktop View Paragraphs */}
          <div className="d-none d-md-block">
            <motion.p
              className=" px-5  text-light"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              Have questions, feedback, or suggestions? Let us know!
            </motion.p>

            <motion.p
              className="fw-semibold shadow-4"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              style={{
                background:
                  "linear-gradient(90deg,rgb(128, 70, 172),rgb(230, 163, 197),rgb(231, 34, 136),rgba(236, 195, 59, 0.8),rgb(238, 235, 34))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              VoxaaTechAI helps businesses integrate and manage AI solutions seamlessly.
            </motion.p>

            <motion.p
              className="mt-4 text-light"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false, amount: 0.2 }}
              style={{ paddingLeft: "13vw" }}
            >
              <strong>Harshit Malkani</strong> <br />
              Founder, VoxaaTechAI
            </motion.p>
          </div>
        </Col>

        {/* Right Column - Form */}
        <Col md={6} className="d-flex flex-column justify-content-center">
          <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           transition={{
            duration: 1.2,
                        ease: "easeOut",
        
            stiffness: 80,
          }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Card
              className="p-4 rounded-3 mx-auto"
              style={{
                background: "transparent",
                border: "1px solid white",
                width: '90%', // or any width like 70%, 60%, 400px, etc.
                maxWidth: '500px', // optional, for larger screens
              }}
            >
              <Form onSubmit={handleSubmit}>
                {Object.keys(placeholders).map((key, index) => (
                  <Form.Group className="mb-3" key={index}>
                    <Form.Label className="fw-semibold text-secondary text-capitalize text-start">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </Form.Label>
                    {key === "aiPlan" ? (
                      <Form.Select
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          color: "rgba(255, 255, 255, 0.699)",
                          border: "none",
                          boxShadow: "none",
                        }}
                      >
                        <option value="" disabled style={{ color: "rgba(180, 180, 180, 0.7)", backgroundColor: "rgba(8, 8, 8, 0.83)" }}>
                          Select…
                        </option>
                        <option value="Basic" style={{ color: "rgba(180, 180, 180, 0.7)", backgroundColor: "rgba(8, 8, 8, 0.83)" }}>
                          Basic
                        </option>
                        <option value="Standard" style={{ color: "rgba(180, 180, 180, 0.7)", backgroundColor: "rgba(8, 8, 8, 0.83)" }}>
                          Standard
                        </option>
                        <option value="Enterprise" style={{ color: "rgba(180, 180, 180, 0.7)", backgroundColor: "rgba(8, 8, 8, 0.83)" }}>
                          Enterprise
                        </option>
                      </Form.Select>
                    ) : key === "message" ? (
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        placeholder={placeholders[key]}
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          color: "rgba(255, 255, 255, 0.699)",
                          border: "none",
                          boxShadow: "none",
                        }}
                      />
                    ) : (
                      <Form.Control
                        type={key === "email" ? "email" : key === "Mobile" ? "tel" : "text"}
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        placeholder={placeholders[key]}
                        onFocus={(e) => (e.target.style.borderBottom = "2px solid white")}
                        onBlur={(e) => (e.target.style.borderBottom = "1px solid white")}
                        style={{
                          borderRadius: "0",
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          border: "none",
                          boxShadow: "none",
                          color: "white",
                        }}
                      />
                    )}
                  </Form.Group>
                ))}
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 fw-bold py-2"
              
                  style={{
                    background:
                      "linear-gradient(90deg, rgb(102, 42, 148), rgb(151, 27, 89), rgb(199, 126, 37))",
                    border: "none",
                    padding: "10px 20px",
                    fontSize: "18px",
                  }}
                >Submit
                </Button>
              </Form>
            </Card>

            {/* Mobile View Paragraphs Below Form */}
            <div className="d-block d-md-none mt-4 text-center">
              <p className="text-light">Have questions, feedback, or suggestions? Let us know!</p>
              <p
                className="fw-semibold"
                style={{
                  background:
                    "linear-gradient(90deg,rgb(128, 70, 172),rgb(230, 163, 197),rgb(231, 34, 136),rgba(236, 195, 59, 0.8),rgb(238, 235, 34))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                VoxaaTechAI helps businesses integrate and manage AI solutions seamlessly.
              </p>
              <p className="text-light">
                <strong>Harshit Malkani</strong> <br />
                Founder, VoxaaTechAI
              </p>
            </div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
