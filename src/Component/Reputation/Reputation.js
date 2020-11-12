import React from "react";
import first from "../../images/first.png";
import second from "../../images/second.png";
import third from "../../images/third.png";
import "./Reputation.css";
export default class Reputation extends React.Component {
  render() {
    return (
      <section className="Reputation text-center">
        <h1 className="title">Дорожим своей репутацией</h1>
        <h4 className="slider-subtitle mt-4">Мы никогда не нарушаем 3 железных правила в нашей кампании</h4>
        <div className="row justify-content-center mt-5 flex-wrap">
          <div className="col-3 p-1" style={{ minWidth: "300px" }}>
            <div className="wrapper">
              <img src={first} alt="number1" />
              <h4>Фиксированные цены</h4>
              <p>
                Мы сразу говорим по телефону какая будет стоимость за работу
                вместе с комплектующими. Стоимость может измениться только если
                после диагностики окажется что это другая поломка
              </p>
            </div>
          </div>
          <div className="col-3 p-1" style={{ minWidth: "300px" }}>
            <div className="wrapper">
              <img src={second} alt="number2" />
              <h4>Официальная гарантия</h4>
              <p>
                Если в гарантийный период устройство выйдет из строя по нашей
                вине мы выполним гарантийный ремонт бесплатно
              </p>
            </div>
          </div>
          <div className="col-3 p-1" style={{ minWidth: "300px" }}>
            <div className="wrapper">
              <img src={third} alt="number3" />
              <h4>Конфиденциальность</h4>
              <p>
                Ремонт осуществляем в Вашем присутствии. Мы не берём доступы к
                вашему устройству без крайней необходимости. В случае ремонта в
                сервисном центре мы проводим видеофиксацию ремонта
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
