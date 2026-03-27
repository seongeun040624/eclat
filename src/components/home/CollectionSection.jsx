import React from "react";
import CollectionCard from "./CollectionCard";
import "../style/collection.scss";

const CollectionSection = () => {
  return (
    <section className="collection-section">
      <h2 className="title">collection</h2>

      <div className="collection-list">
        <CollectionCard name="collection 1" link="/collection1" />
        <CollectionCard name="collection 2" link="/collection2" />
        <CollectionCard name="collection 3" link="/collection3" />
      </div>
    </section>
  );
};

export default CollectionSection;