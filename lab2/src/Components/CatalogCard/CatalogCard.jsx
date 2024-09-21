import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./CatalogCard.css";

export default function CatalogCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/CatalogCard.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="cards">
      {data.map((item, index) => (
        <div className="disappearSecond" key={index}>
          <img src={item.photo} alt={item.name}></img>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <Button information="Information" />
        </div>
      ))}
    </div>
  );
}
