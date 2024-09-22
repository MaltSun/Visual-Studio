import "./SecondPage.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import mainPhoto from "../../Images/MainPhoto2.png"
import InformationCard from "../../Components/InformationCard/InformationCard";
const SecondPage = () => {
  return (
    <>
      <div className="page">
        <Header first="TARLA" second="WHO IS TARLA" third="HOW IT WORK" />
        <div className="mainBlock">
          <img className="disappear" src={mainPhoto} alt="" />
          <div className="divTextMainBlock">
            <h1 className="mainH1">Better than the bakery</h1>
            <p className="mainP">
              You’ll soon be making pastries to rival the best bakeries in town.
              We use only the best ingredients for generous pastries that taste
              and smell amazing. So good, that you’ll take all the credit.
            </p>
          </div>
        </div>
        <h1>Make an order</h1>
        <InformationCard data="/InformationCard.json"/>
        <Footer
          first="INFORMATION"
          second="LOCATION"
          third="CATALOG"
          forth="HOW WORK"
        />
      </div>
    </>
  );
};

export default SecondPage;
