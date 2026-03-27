import React from "react";
import { Link } from "react-router-dom";

const CollectionCard = ({ name, link }) => {
  return (
    <div className="collection-card">
      <div className="img-box">
        <img src="/images/icon.png" alt="placeholder" />
      </div>

      <p className="name">{name}</p>

      <Link to={link} className="btn">
        watch product →
      </Link>
    </div>
  );
};

export default CollectionCard;