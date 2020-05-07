import React from "react";

const CardWithImage = ({ title, description, img, onClick }) => {
  let newDesc =
    description
      .split("")
      .filter((s, i) => i < 45)
      .join("") + "...";
  return (
    <div
      className="card"
      style={{ width: "14rem", height: "13rem", overflow: "hidden" }}
      onClick={onClick}
    >
      <img
        className="card-img-top"
        src={img}
        height="110px"
        alt="Card image cap"
      />
      <div className="card-body">
        <h6 style={{ fontWeight: "bold" }} className="card-title">
          {title}
        </h6>
        <p style={{ fontSize: 13, color: "#818a89" }}>
          {description.length >= 48 ? newDesc : description}
        </p>
      </div>
    </div>
  );
};

export default CardWithImage;
