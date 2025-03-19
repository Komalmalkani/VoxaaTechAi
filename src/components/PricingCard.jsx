import PropTypes from "prop-types";

const PricingCard = ({ plan }) => {
  console.log("Received Plan in PricingCard:", plan); // ✅ Should log a single plan object

  return (
    <div
      className="card  "
      style={{
        // background: "linear-gradient(135deg,rgb(138, 136, 139),#000003,#000003,#000003,#000003,rgb(138, 136, 139))",
        background:"transparent",
        color: "white",
        borderRadius: "12px",
        boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.16)",
border:"1px solid white",
      }}
    >
      <div className="card-body text-center">
        <h2
          className="card-title fw-bold"
          style={{
            // background: "linear-gradient(90deg,rgb(200, 181, 214),rgb(184, 52, 118),rgb(177, 118, 47))",
            backgroundColor:"white",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {plan?.title || "No Title"}
        </h2>

        <p className="fs-3 fw-bold"
          style={{
            color: "#FACC15", // Bright yellow for contrast
          }}
        >
          {plan?.newPrice || "No Price"}
        </p>
        <p className="fs-5 fw-bold "
           style={{
           
            color: "#DB2777",
          }}
        >
          {plan?.price || "No Price"}
        </p>

        <p className="text-light">{plan?.description || "No description available"}</p>

        {plan?.features && plan.features.length > 0 ? (
          <ul className="list-unstyled">
            {plan.features.map((feature, index) => (
              <li key={index} className="text-secondary">{feature}</li>
            ))}
          </ul>
        ) : (
          <p className="text-muted">No features available</p>
        )}

        <button
          className="btn mt-3"
          style={{
            background: "linear-gradient(90deg, rgb(102, 42, 148), rgb(151, 27, 89), rgb(199, 126, 37))",
            color: "white",
            border: "none",
            padding: "10px 20px",
            fontSize: "18px",
            borderRadius: "8px",
          }}
        >
        Book A Call
        </button>
      </div>
    </div>
  );
};

// PropTypes validation
PricingCard.propTypes = {
  plan: PropTypes.shape({
    title: PropTypes.string,
    newPrice: PropTypes.string,
    price:PropTypes.string,
    description: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default PricingCard;
