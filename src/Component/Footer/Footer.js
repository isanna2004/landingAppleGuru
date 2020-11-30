import React from "react";
import "./Footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <footer id="footer" >
        <div className="row flex-wrap justify-content-center">
          <div className="col-md-6 col-12 px-3">
            <div className="text-center">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2009.3198844031906!2d50.2727129634066!3d53.208927583288244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41661b9575f9a52d%3A0x1aa0da2ccbac7ebb!2z0L_RgC4g0JrQuNGA0L7QstCwLCAyOCwg0KHQsNC80LDRgNCwLCDQodCw0LzQsNGA0YHQutCw0Y8g0L7QsdC7Liwg0KDQvtGB0YHQuNGPLCA0NDMwMjI!5e0!3m2!1sru!2skg!4v1606331025988!5m2!1sru!2skg"
                width="90%"
                height="450"
                frameBorder="0"
                style={{ border: 0, minWidth: "300px" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
          <div
            className="col-md-6 col-12 px-3 text-center text-md-left"
            style={{ minWidth: "300px" }}
          >
            <h1 className="title">Контакты:</h1>
            <address>
              <p className="phone">8 (987) 65 432 10</p>
              <p className="mail">rere@info.ru</p>
              <p className="address">Проспект Кирова 28, Самара</p>
            </address>
            <p className="w-75 m-auto m-md-0">
              Мы находимся в центре города, ближайшее станция метро
              «Университет». Также подписывайтесь на нас в соц сетях!
            </p>
          </div>
        </div>
      </footer>
    );}}