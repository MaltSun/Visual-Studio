import React, { useState, useEffect } from "react";
import "./CaloriesCard.css"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export default function CaloriesCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Загрузка данных из JSON файла
    fetch("/CaloriesCard.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Ошибка при загрузке данных:", error));
  }, []);

  return (
    <div className="CaloriesElement">
      {data.map((item, index) => (
        <div>
          <img src={item.photo}></img>
          <h1>{item.name}</h1>
          <TableContainer component={Paper} style={{ margin: "20px 0" }}>
            <Table>
               <TableHead>
                <TableRow>
                  <TableCell>Калорийность (ккал)</TableCell>
                  <TableCell>Углеводы (гр)</TableCell>
                  <TableCell>Жиры (гр)</TableCell>
                  <TableCell>Белки (гр)</TableCell>
                </TableRow>
              </TableHead>
              <TableRow key={index}>
                <TableCell>{item.calories}</TableCell>
                <TableCell>{item.carbs}</TableCell>
                <TableCell>{item.fats}</TableCell>
                <TableCell>{item.protein}</TableCell>
              </TableRow>
              {/* Тело таблицы, где отображаются данные */}
              <TableBody></TableBody>
            </Table>
          </TableContainer>
        </div>
      ))}
    </div>
  );
}
