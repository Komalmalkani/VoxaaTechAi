import { motion } from "framer-motion";

const integrationsData = [
  {
    category: "Most Used Healthcare Integrations",
    integrations: [
      {
        name: "Epic Systems",
        description:
          "Direct HIPAA-compliant integration with Epic Systems for secure patient data and AI-driven appointment booking.",
      },
      {
        name: "SalesForce",
        description:
          "Enhance AI Voice Agents capabilities with a direct HIPAA-compliant CRM integration.",
      },
      {
        name: "HubSpot",
        description: "Optimize CRM integration with HubSpot.",
      },
      {
        name: "Cerner (Oracle Health)",
        description:
          "Schedule appointments, access medical data, and enhance interoperability across healthcare systems.",
      },
      {
        name: "Athenahealth",
        description:
          "Streamline billing queries, automate reminders, and manage patient records.",
      },
    ],
  },
  {
    category: "Most Used Hospitality Integrations",
    integrations: [
      {
        name: "Toast POS",
        description:
          "Optimize restaurant AI Agents with direct Toast POS integration, enabling seamless table booking, order tracking, and payment handling.",
      },
      {
        name: "Oracle Hospitality Suite (OPERA)",
        description:
          "Automate room reservations, manage guest profiles, and provide personalized services via AI Voice Agents.",
      },
      {
        name: "Cloudbeds",
        description:
          "Improve efficiency by integrating AI Agents to automate reservation confirmations, billing queries, and check-in/check-out processes.",
      },
    ],
  },
  {
    category: "Most Used E-commerce Integrations",
    integrations: [
      {
        name: "Shopify",
        description:
          "Integrate AI Voice Agents to handle customer inquiries, track orders, process returns, and provide product updates.",
      },
      {
        name: "WooCommerce",
        description:
          "Enable AI Agents to assist with order tracking, product questions, and refunds directly for WooCommerce stores.",
      },
      {
        name: "BigCommerce",
        description:
          "Automate FAQs, shipping updates, and customer support inquiries through AI Voice Agents for a seamless shopping experience.",
      },
    ],
  },
];

const IntegrationsPage = () => {
  return (
    <motion.div
      className="container-fluid px-4 py-5 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{
        backgroundImage:
          "radial-gradient(rgb(32, 13, 22),#000003,#000003,#000003), url('https://e7.pngegg.com/pngimages/841/592/png-clipart-blue-smoke-illustration-smoke-transparency-and-translucency-youtube-background-light-smoke-blue-hand-thumbnail.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#000003",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        width: "100%",
        padding: "50px 0",
      }}
    >
      <motion.h2
        className="display-5 fw-bold text-white"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Unify Your Processes
      </motion.h2>

      <motion.p
        className="lead text-light"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Direct, safe integrations with AI-powered automation for seamless
        operations.
      </motion.p>

      {integrationsData.map((section, index) => (
        <motion.div
          key={index}
          className="mt-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 * index }}
          viewport={{ once: true }}
        >
          <h4 className="text-warning fw-semibold">{section.category}</h4>

          <motion.div
            className="row g-4 justify-content-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {section.integrations.map((integration, i) => (
              <motion.div
                key={i}
                className="col-md-4 d-flex"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.8 },
                  },
                }}
               
              >
                <div
                  className="card p-4 shadow-sm w-100 h-100"
                  style={{
                    backgroundColor: "transparent", // Lighter version of #000003
                    color: "#fff", // White text
                    border: "0.5px solid rgba(190, 190, 190, 0.5)",
                  }}
                >
                  <h5 className="fw-bold">{integration.name}</h5>
                  <p style={{ color: "#bbbbbb" }}>{integration.description}</p>
                  </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default IntegrationsPage;
