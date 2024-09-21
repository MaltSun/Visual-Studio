import React from 'react'
import logo from "../../Images/Logo.png";
import "./Header.css"
export default function Header(props) {
  return (
    <div className="header ">
        <img className="disappear" src={logo}></img>
        <div className="list">
          <p>{props.first}</p>
          <p>{props.second}</p>
          <p>{props.third}</p>
        </div>
      </div>
  )
}
