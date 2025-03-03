import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const Contact = () => {
  const placeholders = {
    fullName: "Harshit Malkani",
    email: "voxaaTechAi@gmail.com",
    Mobile: "99099XXXXX",
    businessName: "Apple",
    
    aiPlan: "",
    message: "Your message...",
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    Mobile : "",
    businessName: "",
    aiPlan: "",
    message: "",
  });

// const {fullName,email,Mobile,businessName,aiPlan,message} = formData

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbz7W0sIHLvL5u4aYyhaCgaV1C2kkp3thfBqea5_P6zTJnBD78vJdxxyMQa24e1c0scrrw/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });
  
      const result = await response.json();
      console.log("API Response:", result);
      alert("Form submitted successfully!");
  
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };
  
  
  
  
  
  

  return (
    <Container
      fluid
      className="min-vw-100 min-vh-100 d-flex align-items-center justify-content-center"
    >
      <Row className="w-100 px-4 py-5">
        <Col
          md={6}
          className="d-flex flex-column justify-content-center text-center text-md-start"
        >
          <motion.h1
            className="fw-bold"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            style={{
              paddingLeft: "8vw",
              background:
                "linear-gradient(105deg,rgb(129, 61, 182),rgb(196, 4, 100),rgb(238, 235, 34))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              fontSize: "60px",
            }}
          >
            Contact Us
          </motion.h1>

          <motion.p
            className="mt-3 text-light"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            Have questions, feedback, or suggestions? Let us know!
          </motion.p>

          <motion.p
            className="fw-semibold shadow-4"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            style={{
              background:
                "linear-gradient(90deg,rgb(128, 70, 172),rgb(230, 163, 197),rgb(231, 34, 136),rgba(236, 195, 59, 0.8),rgb(238, 235, 34))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            VoxaaTechAI helps businesses integrate and manage AI solutions
            seamlessly.
          </motion.p>

          <motion.p
            className="mt-4 text-light"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: false, amount: 0.2 }}
            style={{ paddingLeft: "13vw" }}
          >
            <strong>Harshit Malkani</strong> <br />
            CEO, VoxaaTechAI
          </motion.p>
        </Col>

        <Col md={6} className="d-flex flex-column justify-content-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", type: "spring", stiffness: 100 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Card
              className="p-4 rounded-3"
              style={{
                background: "transparent",
                border: "1px solid white",
               
              }}
            >
              <Form onSubmit={handleSubmit}>
                {Object.keys(placeholders).map((key, index) => (
                  <Form.Group className="mb-3" key={index} >
                    <Form.Label className="fw-semibold text-secondary text-capitalize"
                    >
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </Form.Label>
                    {key === "aiPlan" ? (
                      <Form.Select name={key} value={formData[key]} onChange={handleChange}  style={{backgroundColor:"rgba(255, 255, 255, 0.1)",color: "rgba(255, 255, 255, 0.699)",border:"none",boxShadow: "none"}}>
                        <option value="" disabled style={{ color: "rgba(180, 180, 180, 0.7)",backgroundColor:"rgba(8, 8, 8, 0.83)" }}>Select…</option>
                        <option value="Basic" style={{ color: "rgba(180, 180, 180, 0.7)",backgroundColor:"rgba(8, 8, 8, 0.83)" }}>Basic</option>
                        <option value="Standard" style={{ color: "rgba(180, 180, 180, 0.7)" ,backgroundColor:"rgba(8, 8, 8, 0.83)"}}>Standard</option>
                        <option value="Enterprise" style={{ color: "rgba(180, 180, 180, 0.7)",backgroundColor:"rgba(8, 8, 8, 0.83)" }}>Enterprise</option>
                      </Form.Select>
                    ) : key === "message" ? (
                      <Form.Control
                      style={{backgroundColor:"rgba(255, 255, 255, 0.1)",color: "rgba(255, 255, 255, 0.699)",border:"none", boxShadow: "none"}}
                        as="textarea"
                        rows={4}
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        placeholder={placeholders[key]}
                      />
                    ) : (
                      <Form.Control
                        type={
                          key === "email" ? "email" : key === "whatsapp" ? "tel" : "text"
                        }
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        placeholder={placeholders[key]}
                        onFocus={(e) => (e.target.style.borderBottom = "2px solid white")}
                        onBlur={(e) => (e.target.style.borderBottom = "1px solid white")}
                        style={{ borderRadius: "0",backgroundColor: "rgba(255, 255, 255, 0.1)", border: "none" , boxShadow: "none" , color:"white",
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