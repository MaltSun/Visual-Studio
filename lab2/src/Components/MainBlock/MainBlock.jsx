import React from 'react'
import Button from "../Button/Button"
import mainPhoto from "../../Images/MainPhoto.png"
import "./MainBlock.css"
export default function MainBlock() {
  return (
    <div className="mainBlock">
        <div className="divTextMainBlock">
          <h1 className="mainH1">Fresh pastry kits</h1>
          <p className="mainP">
            Bringing the smells and tastes of your favourite patisserie to your
            home. Our kits have everything you need to easily make killer
            pastries every time. We’ve done ou need to do is roll, proof and
            bake!
          </p>
          <Button information="Catalog" />
        </div>
        <img className="disappear" src={mainPhoto}></img>
      </div>
  )
}
