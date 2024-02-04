import React from "react";
import "./DescriptionBox.css";

export default function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-navbox">Description</div>
        <div className="descriptionbox-navbox fade">Reviews (121)</div>
      </div>
      <div className="descriptionbox-description">
        <p>E-Commerce Website</p>
      </div>
    </div>
  );
}
