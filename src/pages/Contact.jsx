import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const Contact = () => {
  const placeholders = {
    fullName: "John Deo",
    email: "voxaa@gmail.com",
    Mobile: "+1 123-456-7890",
    businessName: "xyz",
    aiPlan: "",
    message: "Your message...",
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    Mobile: "",
    businessName: "",
    aiPlan: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mzzeppdw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          Mobile: "",
          businessName: "",
          aiPlan: "",
          message: "",
        }); // Reset form after successful submission
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Container
      fluid
      className="min-vw-100 min-vh-100 d-flex align-items-center justify-content-center"
    >
      <Row className="w-100 px-4 py-5">
        <Col md={6} className="d-flex flex-column justify-content-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", type: "spring", stiffness: 100 }}
          >
            <Card className="p-4 rounded-3" style={{ background: "transparent", border: "1px solid white" }}>
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
                        style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", color: "rgba(255, 255, 255, 0.699)", border: "none", boxShadow: "none" }}
                      >
                        <option value="" disabled>Select…</option>
                        <option value="Basic">Basic</option>
                        <option value="Standard">Standard</option>
                        <option value="Enterprise">Enterprise</option>
                      </Form.Select>
                    ) : (
                      <Form.Control
                        as={key === "message" ? "textarea" : "input"}
                        rows={key === "message" ? 4 : undefined}
                        type={key === "email" ? "email" : key === "Mobile" ? "tel" : "text"}
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        placeholder={placeholders[key]}
                        style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", color: "rgba(255, 255, 255, 0.699)", border: "none", boxShadow: "none" }}
                      />
                    )}
                  </Form.Group>
                ))}
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 fw-bold py-2"
                  style={{
                    background: "linear-gradient(90deg, rgb(102, 42, 148), rgb(151, 27, 89), rgb(199, 126, 37))",
                    border: "none",
                    padding: "10px 20px",
                    fontSize: "18px",
                  }}
                >
                  Submit
                </Button>
              </Form>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
