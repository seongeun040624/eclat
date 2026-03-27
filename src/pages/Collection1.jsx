import React from "react";
import "../style/collectionPage.scss";

const Collection1 = () => {
  return (
    <div className="collection-page">
      <h2 className="title">collection 1</h2>

      <div className="product-list">
        {[1,2,3,4,5,6].map((item) => (
          <div className="product-card" key={item}>
            <div className="img-box">
              <img src="/images/icon.png" alt="" />
            </div>

            <div className="info">
              <span>상품명</span>
              <span>00,000</span>
            </div>

            <button className="btn">add to cart ☑</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection1;