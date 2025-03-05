import { motion } from "framer-motion";
import { plans } from "../data/planData";
import PricingCard from "../components/PricingCard";

const Pricing = () => {
  return (
    <motion.div
    className="container text-center px-3 px-md-5 py-5"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ amount: 0.2 }}
    style={{
      background: "radial-gradient(rgb(20, 58, 58),#000003,#000003,#000003)",
      padding: "80px 0",
      borderRadius: "15px",
    }}
  >
  
      <motion.h1
        className="display-5 fw-bold"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ amount: 0.2 }}
        style={{
          // background:
          //   "linear-gradient(90deg,rgb(211, 163, 248),rgb(211, 163, 248),rgb(197, 38, 117),rgb(223, 134, 27),rgb(231, 197, 154))",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "white",
        }}
      >
        Voxxa Tech AI Pricing Plans
      </motion.h1>

      <motion.p
        className="lead text-light py-3"
        initial={{ opacity: 0.5, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ amount: 0.2 }}
      >
        Empower your business with our flexible and affordable AI voice agent plans.
      </motion.p>

      <motion.div
  className="row g-4 justify-content-center align-items-center"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.6 }}
  viewport={{ amount: 0.2 }}
>

        {plans.map((planData, index) => (
         <motion.div
         key={index}
         className="col-12 col-md-4 d-flex justify-content-center"
       
       
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 * index }}
            viewport={{ amount: 0.2 }}
          >
            <PricingCard plan={planData} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Pricing;
