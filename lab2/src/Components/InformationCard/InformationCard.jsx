import React, { useState, useEffect } from "react";
import "./InformationCard.css";

export default function InformationCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/InformationCard.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="cards">
      {data.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.photo} alt={item.name}></img>
          <h3>{item.name}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
