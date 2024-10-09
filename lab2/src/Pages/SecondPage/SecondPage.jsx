import "./SecondPage.css";
import { Button } from "@mui/material";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import mainPhoto from "../../Images/MainPhoto2.png";
import Review from "../../Review/Review";
import PollResults from "../../Components/PollResults/PollResults";
import InputWithIcon from "../../Components/InputWithIcon/InputWithIcon";
import Profile from "../../Components/Profile/Profile";
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
        <section className="reviewSection">
          <Review></Review>
          <div>
            <PollResults></PollResults>
            <div className="direction">
              <InputWithIcon />
              <Button
                width="120px"
                variant="contained"
                onClick={() => alert("Отзыв отравлен")}
              >
                Send
              </Button>
            </div>
          </div>
        </section>
        <Profile></Profile>
        <Footer
          first="../ErrorPage"
          one="INFORMATION"
          two="LOCATION"
          second="../third"
          three="CATALOG"
          third="/"
        />
      </div>
    </>
  );
};

export default SecondPage;
