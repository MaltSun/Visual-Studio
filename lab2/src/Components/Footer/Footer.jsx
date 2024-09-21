import React from 'react'
import phone from "../../Images/Phone.png";
import "./Footer.css"
export default function Footer(props) {
  return (
    <div className="footer">
    <div className="imgFooter">
      <img src={phone}></img>
      <img src={phone}></img>
      <img src={phone}></img>
    </div>
    <ul className="divFooter">
      <a>{props.first}</a>
      <a>{props.second}</a>
      <a>{props.third}</a>
    </ul>
  </div>
  )
}
