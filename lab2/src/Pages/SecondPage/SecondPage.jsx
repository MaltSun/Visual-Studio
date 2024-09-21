import "./SecondPage.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import InformationCard from "../../Components/InformationCard/InformationCard";
const SecondPage = () => {
  return (
    <>
      <div className="page">
        <Header first="TARLA" second="WHO IS TARLA" third="HOW IT WORK" />
        <h1>Make an order</h1>
        <InformationCard />
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
