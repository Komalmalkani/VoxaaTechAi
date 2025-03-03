import { motion } from "framer-motion";
import { useState } from "react";

const Faq = () => {
  const faqs = [
    {
      question: "What are the available pricing plans?",
      answer:
        "We offer three plans: Pay-as-You-Go ($0.50 per minute), Small Business Unlimited ($300/month), and Enterprise (custom pricing).",
    },
    {
      question: "Can I switch between plans anytime?",
      answer:
        "Yes, you can upgrade or downgrade your plan anytime from your account settings.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Currently, we do not offer a free trial, but you can start with our Pay-as-You-Go plan to test the service.",
    },
    {
      question: "How do I get billed?",
      answer:
        "Billing is done on a monthly basis for the subscription plans, while the Pay-as-You-Go plan charges based on usage.",
    },
    {
      question: "Are there any hidden charges?",
      answer:
        "No, all our pricing is transparent. You only pay for what’s mentioned in your selected plan.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We have a no-refund policy, but you can cancel your subscription anytime before the next billing cycle.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <motion.div
      className="container py-5"
      style={{
        maxWidth: "100vw",
        margin: "0 auto",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        background: "radial-gradient(#08332F, #000003, #000003)",
      }}
    >
      <motion.h1
        className="text-center fw-bold my-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        style={{ color: "#fff" }}
      >
        Frequently Asked Questions
      </motion.h1>

      <div
        className="accordion mx-auto"
        id="faqAccordion"
        style={{
          maxWidth: "600px",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="accordion-item border rounded shadow-sm my-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{
              maxWidth: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "0.5px solid rgba(255, 255, 255, 0.3)",
              color: "#fff",
            }}
          >
            <motion.h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                onClick={() => toggleAccordion(index)}
                style={{
                  backgroundColor: "transparent",
                  color: "#fff",
                  border: "none",
                  outline: "none",
                  boxShadow: "none",
                  width: "100%",
                  textAlign: "left",
                  fontSize: "1rem",
                  padding: "15px",
                }}
              >
                {faq.question}
              </button>
            </motion.h2>
            <motion.div
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
              style={{
                overflow: "hidden",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderRadius: "0 0 8px 8px",
              }}
            >
              <div
                className="accordion-body"
                style={{
                  color: "#fff",
                  padding: "10px 15px",
                  fontSize: "0.9rem",
                }}
              >
                {faq.answer}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Faq;
