import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import "./Review.css";
export default function Review() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/ReviewCard.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Ошибка при загрузке данных:", error));
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <div className="reviewElement" key={index}>
          <Avatar alt="photo" src={index.photo} />
          <div>
            <h1>{item.name}</h1>
            <p>{item.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
