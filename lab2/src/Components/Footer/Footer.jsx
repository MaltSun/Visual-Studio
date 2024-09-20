import React from 'react'
import phone from "../Images/Phone.png";

export default function Footer(props) {
  return (
    <div className="footer">
    <div className="imgFooter">
      <img src={phone}></img>
      <img src={phone}></img>
      <img src={phone}></img>
    </div>
    <ul className="divFooter">
      <a className="link">{props.first}</a>
      <a className="link">{props.second}</a>
      <a className="link">{props.third}</a>
    </ul>
  </div>
  )
}
