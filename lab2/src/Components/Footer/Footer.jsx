import React from 'react'
import phone from "../../Images/Phone.png";
import "./Footer.css"
import { Link } from 'react-router-dom';
export default function Footer(props) {
  return (
    <div className="footer">
    <div className="imgFooter">
      <img src={phone}></img>
      <img src={phone}></img>
      <img src={phone}></img>
    </div>
    <ul className="divFooter">
      <Link to={props.first}>{props.one}</Link>
      <Link to={props.second}>{props.two}</Link>
      <Link to={props.third}>{props.three}</Link>
    </ul>
  </div>
  )
}
