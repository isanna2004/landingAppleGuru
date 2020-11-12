import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import map from "../../images/map.png"
export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="row flex-wrap justify-content-center">
          <div className="col-md-6 col-12 px-3">
            <div>
              <img src={map} style={{ width: "90%",minWidth:"300px" }} />
            </div>
          </div>
          <div className="col-md-6 col-12 px-3" style={{minWidth:"300px"}}>
            <h1 className="title">Контакты:</h1>
            <address>
              <p className="phone">8 (987) 65 432 10</p>
              <p className="mail">rere@info.ru</p>
              <p className="address">Проспект Кирова 28, Самара</p>
            </address>
            <p className="w-75">
              Мы находимся в центре города, ближайшее станция метро
              «Университет». Также подписывайтесь на нас в соц сетях!
            </p>
          </div>
        </div>
      </footer>
    );}}