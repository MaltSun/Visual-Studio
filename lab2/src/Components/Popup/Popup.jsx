import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./Popup.css";
const PopupComponent = ({ name, price, text }) => {
  return (
    <Popup
      trigger={<button className="button">Information</button>}
      position="top left"
      offsetY={20}
      arrow={false}
    >
      <div>
        <h1>{name}</h1>
        <p>{text}</p>
        <h3>{price}</h3>
      </div>
    </Popup>
  );
};

export default PopupComponent;
