import React from 'react'
import logo from "../Images/Logo.png";

export default function Header(props) {
  return (
    <div className="header ">
        <img className="disappearSecond" src={logo}></img>
        <div className="list">
          <p className="listA">{props.first}</p>
          <p className="listA">{props.second}</p>
          <p className="listA">{props.third}</p>
        </div>
      </div>
  )
}
