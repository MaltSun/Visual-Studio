import React, { useEffect } from "react";
import "./ThirdPage.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import InformationCard from "../../Components/InformationCard/InformationCard";

const ThirdPage = () => {
  useEffect(() => {
    const mapContainer = document.getElementById("yandexMap");
    
    // Проверка на наличие ранее добавленного скрипта
    if (!mapContainer.querySelector("script")) {
      const script = document.createElement("script");
      script.src =
        "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A4f0ac3b2d2c74549785d8975bd770fee7cb4cca0ecf27e116aee8d0893e0982a&amp;width=500&amp;height=316&amp;lang=ru_RU&amp;scroll=true";
      script.async = true;
      mapContainer.appendChild(script);
    }
  }, []);

  return (
    <>
      <div className="page">
        <Header first="TARLA" second="WHO IS TARLA" third="HOW IT WORK" />
        <div className="map">
          <div className="mapDiv">
            <h1>Our location in USA</h1>
            <p>
              We like to keep things simple and authentic. We’ve sourced the
              very best from the very best, from our Poitou-Charentes butter to
              our Valrhona chocolate batons.
            </p>
          </div>
          <div className="mapImage" id="yandexMap" ></div>
        </div>
        <InformationCard data="./InformationFor3.json" />
        <Footer
        first="../second"
        one="INFORMATION"
        two="LOCATION"
        second="../ErrorPage"
        three="CATALOG"
        third="../"
      />
      </div>
    </>
  );
};

export default ThirdPage;
