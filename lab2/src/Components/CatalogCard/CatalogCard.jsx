import React, { useState, useEffect } from "react";
import "./CatalogCard.css";
import PopupComponent from "../Popup/Popup";

export default function CatalogCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/CatalogCard.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const addItem = () => {
    const newItem = {
      photo: "/Images/almondCroissant.png",
      name: "NEW ITEM",
      price: "KIT OF 1 - 10.00",
      description: "This is a new item",
    };
    setData([...data, newItem]);
  };

  const deleteItem = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  const editItem = (index, updatedItem) => {
    const newData = data.map((item, i) => (i === index ? updatedItem : item));
    setData(newData);
  };

  return (
    <div className="section">
      <div className="cards">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.photo} alt={item.name}></img>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <PopupComponent
              name={item.name}
              price={item.price}
              text={item.description}
            />
            <button className="button" onClick={() => deleteItem(index)}>
              Delete
            </button>
            <button
              className="button"
              onClick={() =>
                editItem(index, {
                  ...item,
                  name: "NEW ITEM",
                  price: "NEW PRICE",
                })
              }
            >
              Edit
            </button>
          </div>
        ))}
      </div>
      <button className="button" onClick={addItem}>
        Add New Item
      </button>
    </div>
  );
}
