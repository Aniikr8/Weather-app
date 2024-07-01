import React from "react";

export default function Card(props) {
 
  return (
    <div className="submain3">
      <div className="sq1">
        <h6>{props.time}</h6>
        <img src={props.image.image}alt="Weather Icon" />
      </div>
    </div>
  );
}