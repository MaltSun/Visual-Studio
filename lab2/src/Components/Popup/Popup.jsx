import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./Popup.css";
import { Button } from "@mui/material";
//import Slider from "@mui/material/Slider"
//import DenseTable from "../DenseTable/DenseTable";
const PopupComponent = ({ name, price, text }) => {
  return (
    <Popup
      trigger={<Button variant="contained">Information</Button>}
      position="top left"
      offsetY={20}
      arrow={false}
    >
      <div></div>
    </Popup>
  );
};

export default PopupComponent;
