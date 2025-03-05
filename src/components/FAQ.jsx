import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/FAQ.css"
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
      className="faq-container min-vw-100 min-vh-80  d-flex  py-5 gap-5  justify-content-center "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
    <motion.h1 className="faq-heading ">
  <span className="first-word ">Frequently  Asked</span> <br />
  Questions
</motion.h1>


      <div className="faq-accordion">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="faq-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                onClick={() => toggleAccordion(index)}
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
              className="accordion-body-container"
            >
              <div className="accordion-body">{faq.answer}</div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Faq;
