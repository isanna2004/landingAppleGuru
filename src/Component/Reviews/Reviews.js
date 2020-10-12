import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Reviews.css";

export default class Reviews extends React.Component {
  render() {
    return (
      <div className="reviews">
        <div className="container">
          <div className="row reviews">
            <div className="col-6">
              <div className="review">
                <p className="review-text">
                  Поменяли заднюю панель и дисплей на iPhone 6, сделали все
                  быстро, качественно и недорого. Я попросил мастера приехать ко
                  мне в офис, и через час мой телефон был отремонтирован!
                  Спасибо большое!
                  
                    {" "}
                    <a>Читать полностью...</a>
                  
                  <span className="triangle"></span>
                </p>

                <img/>
                <p>
                  <b>Михаил Яковлев</b> <br />
                  Замена стекла -<b>980 руб.</b>
                </p>
              </div>
            </div>
            <div className="col-6">
              {" "}
              <div className="review">
                <p className="review-text">
                  Отличный сервис и низкие цены! Ребята помогли мне
                  отремонтировать ноутбук, когда я уже думала что он больше не
                  будет работать! Спасибо!
                 
                    <a>Читать полностью...</a>
                
                  <span className="triangle"></span>
                </p>

                <img></img>
                <p>
                  <b>Михаил Яковлев</b> <br />
                  Замена аккумулятора -<b>1150 руб.</b>
                </p>
              </div>
            </div>
            <div className="col-6">
              {" "}
              <div className="review">
                <p className="review-text">
                  Отличный сервис и низкие цены! Ребята помогли мне
                  отремонтировать ноутбук, когда я уже думала что он больше не
                  будет работать! Спасибо!
                  
                    <a>Читать полностью...</a>
                  
                  <span className="triangle"></span>
                </p>

                <img/>
                <p>
                  <b>Михаил Яковлев</b> <br />
                  Замена аккумулятора -<b>1150 руб.</b>
                </p>
              </div>
            </div>

            <div className="col-6">
              <div className="review">
                <p className="review-text">
                  Поменяли заднюю панель и дисплей на iPhone 6, сделали все
                  быстро, качественно и недорого. Я попросил мастера приехать ко
                  мне в офис, и через час мой телефон был отремонтирован!
                  Спасибо большое!
                  
                    <a>Читать полностью...</a>
               
                  <span className="triangle"></span>
                </p>

                <img></img>
                <p>
                  <b>Михаил Яковлев</b> <br />
                  Замена стекла -<b>980 руб.</b>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 text-center">
              <Link to="/">Посмотреть ещё</Link>
          </div>
        </div>
      </div>
    );
  }
}
