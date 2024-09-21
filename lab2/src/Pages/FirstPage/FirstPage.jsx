// import CatalogCard from "../../Components/CatalogCard/CatalogCard";
import Header from "../../Components/Header/Header";
import MainBlock from "../../Components/MainBlock/MainBlock";
 import Footer from "../../Components/Footer/Footer";
import "./FirstPage.css"
const FirstPage = () => {
  return (
    <div className="page">
      <Header first="TARLA" second="WHO IS TARLA" third="HOW IT WORK" />
      <MainBlock/>
     <Footer first="INFORMATION" second="LOCATION" third="CATALOG" forth="HOW WORK"/>
    </div>
  );
};

export default FirstPage;
