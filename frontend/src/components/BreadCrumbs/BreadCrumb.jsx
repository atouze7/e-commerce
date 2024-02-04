import React from "react";
import arrow_icon from "../assets/breadcrum_arrow.png";
import "./BreadCrumb.css";

export default function BreadCrumb(props) {
  const { product } = props;
  return (
    <div className="breadcrumb">
      Home <img src={arrow_icon} alt="" /> Shop <img alt="" src={arrow_icon} />{" "}
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
}
