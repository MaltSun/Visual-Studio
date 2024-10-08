import Header from "../../Components/Header/Header";
import MainBlock from "../../Components/MainBlock/MainBlock";
import Footer from "../../Components/Footer/Footer";
import "./FirstPage.css";
import CatalogCard from "../../Components/CatalogCard/CatalogCard";
import PollResults from "../../Components/PollResults/PollResults"
const FirstPage = () => {
  return (
    <div className="page">
      <Header first="TARLA" second="WHO IS TARLA" third="HOW IT WORK" />
      <MainBlock />
      <div className="CatalogBlock">
        <h1>Shop pastry kits</h1>
        <CatalogCard />
      </div>
      <PollResults></PollResults>
      <Footer
        first="../second"
        one="INFORMATION"
        two="LOCATION"
        second="../third"
        three="CATALOG"
        third="../ErrorPage"
      />
    </div>
  );
};

export default FirstPage;
