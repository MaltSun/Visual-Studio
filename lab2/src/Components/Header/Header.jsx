import React from "react";
import logo from "../../Images/Logo.png";
import "./Header.css";
import { ButtonGroup, Button } from "@mui/material";
export default function Header(props) {
  return (
    <div className="header ">
      <img className="disappear" src={logo}></img>
      <ButtonGroup ariant="text" aria-label="Basic button group">
        <Button>{props.first}</Button>
        <Button>{props.second}</Button>
        <Button>{props.third}</Button>
      </ButtonGroup>
          </div>
  );
}
