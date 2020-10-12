import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import Cost from "../Cost/Cost";
import Reviews from "../Reviews/Reviews";

class App extends React.Component {
  render() {
    return <div>
    <Header />
    <MainPage/>
    <Cost/>
    <Reviews/>
    </div>
  }
}
export default App;
