import React from "react";
import "../style/wishlist.scss";

const Wishlist = () => {
  return (
    <div className="wishlist-page">
      <h2 className="title">My Wish List</h2>

      <div className="product-list">
        {[1,2,3,4,5,6,7,8].map((item) => (
          <div className="product-card" key={item}>
            
            <div className="img-box">
              <img src="/images/icon.png" alt="" />
            </div>

            <div className="info">
              <span>상품명</span>
              <span>00,000</span>
            </div>

            <button className="btn">
              add to cart ☑
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;