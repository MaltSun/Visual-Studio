import React from 'react'
import Button from "./Pages/ButtonComponent/ButtonComponent";

export default function CatalogCard(props) {
  return (
    <div className="card disappearSecond">
        <img src={props.image}></img>
        <h3>{props.bunName}</h3>
        <p>{props.bunPrice}</p>
        <Button information="Information" />
      </div> 
  )
}
