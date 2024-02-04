import React from "react";
import data_products from "../assets/data";
import "./RelatedProducts.css";

export default function RelatedProducts() {
  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_products.map((item, i) => {
          return (
            <item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}
