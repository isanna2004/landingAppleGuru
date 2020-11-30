import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import Cost from "../Cost/Cost";
import Reviews from "../Reviews/Reviews";
import Description from "../Description/Description";
import Slider from "../Slider/Slider";
import Reputation from "../Reputation/Reputation";
import Footer from "../Footer/Footer";


class App extends React.Component {
  render() {
    return <div>
    <Header />
    <MainPage/>
    <Cost/>
    <Reviews/>
    <Description/>
    <Slider/>
    <Reputation/>
    <Footer/>
    </div>
  }
}
export default App;
