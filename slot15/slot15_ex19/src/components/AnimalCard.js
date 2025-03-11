import React from "react";
import PropTypes from "prop-types";

export default function AnimalCard({
  name,
  scientificName,
  size,
  diet,
  additional,
  imageUrl,
}) {
  const showAdditional = (additionalData) => {
    const infoArray = Object.entries(additionalData);
    const alertMessage = infoArray
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    alert(alertMessage);
  };

  const cardStyle = {
    backgroundColor: "#ffd700",
    borderRadius: "10px",
    padding: "10px",
    width: "300px",
    margin: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const titleStyle = {
    color: "#ff0000",
    fontSize: "24px",
    margin: "10px 0 5px 0",
    fontWeight: "bold",
    textAlign: "left",
  };

  const infoBlockStyle = {
    backgroundColor: "#f0f0f0",
    padding: "5px",
    margin: "5px 0",
    borderRadius: "5px",
    textAlign: "left",
    fontSize: "16px",
    color: "#000000",
  };

  const buttonStyle = {
    backgroundColor: "#ff0000",
    color: "#ffffff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    display: "block",
    marginTop: "10px",
    textAlign: "left",
    marginLeft: "auto",
    marginRight: "auto  ",
  };

  return (
    <div className="card" style={cardStyle}>
      <img
        src={imageUrl}
        className="card-img-top"
        alt={name}
        style={{
          borderRadius: "10px 10px 0 0",
          objectFit: "cover",
          height: "150px",
        }}
      />
      <div className="card-body" style={{ padding: "10px 0" }}>
        <h2 style={titleStyle}>{name}</h2>
        <div style={infoBlockStyle}>Scientific Name: {scientificName}</div>
        <div style={infoBlockStyle}>{size} kg</div>
        <div style={infoBlockStyle}>{diet.join(", ")}.</div>
        <button style={buttonStyle} onClick={() => showAdditional(additional)}>
          More Info
        </button>
      </div>
    </div>
  );
}

AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string,
  }),
  imageUrl: PropTypes.string.isRequired,
};

AnimalCard.defaultProps = {
  additional: {
    notes: "No Additional Information",
  },
};
