import React, { useState, useEffect } from "react";
import "./InformationCard.css";

export default function InformationCard(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(props.data)
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="InformationCards">
      {data.map((item, index) => (
        <div className="InformationCard" key={index}>
          <img className="InfrormationImage" src={item.photo} alt={item.name}></img>
          <h3 className="InformationCardH1">{item.name}</h3>
          <p className="InformationCardP">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
