import { motion } from "framer-motion";
import { plans } from "../data/planData";
import PricingCard from "../components/PricingCard";
import  { useState, useEffect } from "react";

const Pricing = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile breakpoint
    };

    checkScreenSize(); // initial check
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Helper component: For conditional motion.div or normal div
  const MotionWrapper = isMobile ? "div" : motion.div;
  const MotionHeading = isMobile ? "h1" : motion.h1;
  const MotionPara = isMobile ? "p" : motion.p;

  return (
    <MotionWrapper
      className="container text-center px-3 px-md-5 py-5"
      {...(!isMobile && { // only animation if NOT mobile
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 1 },
        viewport: { amount: 0.2 },
      })}
      style={{
        background: "radial-gradient(rgb(20, 58, 58),#000003,#000003,#000003)",
        padding: "80px 0",
        borderRadius: "15px",
      }}
    >

      <MotionHeading
        className="display-5 fw-bold"
        {...(!isMobile && {
          initial: { opacity: 0, y: -30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 1, delay: 0.2 },
          viewport: { amount: 0.2 },
        })}
        style={{
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "white",
        }}
      >
        Voxxa Tech AI Pricing Plans
      </MotionHeading>

      <MotionPara
        className="lead text-light py-3"
        {...(!isMobile && {
          initial: { opacity: 0.5, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 1, delay: 0.5 },
          viewport: { amount: 0.2 },
        })}
      >
        Empower your business with our flexible and affordable AI voice agent plans.
      </MotionPara>

      <MotionWrapper
        className="row g-4 justify-content-center align-items-center"
        {...(!isMobile && {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 1, delay: 0.6 },
          viewport: { amount: 0.2 },
        })}
      >

        {plans.map((planData, index) => {
          const MotionCardWrapper = isMobile ? "div" : motion.div;
          return (
            <MotionCardWrapper
              key={index}
              className="col-12 col-md-4 d-flex justify-content-center"
              {...(!isMobile && {
                initial: { opacity: 0, scale: 0.8 },
                whileInView: { opacity: 1, scale: 1 },
                transition: { duration: 0.8, delay: 0.1 },
                viewport: { amount: 0.2 },
              })}
            >
              <PricingCard plan={planData} />
            </MotionCardWrapper>
          );
        })}

      </MotionWrapper>

    </MotionWrapper>
  );
};

export default Pricing;
