import React, { useEffect } from "react";
import "./ThirdPage.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import InformationCard from "../../Components/InformationCard/InformationCard";
import CaloriesCard from "../../Components/CaloriesCard/CaloriesCard";
const ThirdPage = () => {
  return (
    <>
      <div className="page">
        <Header first="TARLA" second="WHO IS TARLA" third="HOW IT WORK" />
        <InformationCard data="./InformationFor3.json" />
        <CaloriesCard />
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
