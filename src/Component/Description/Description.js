import React from "react";


export default class Description extends React.Component {
  render() {
    return (
      <section className="description">
        <div className="container">
          <div className="row justify-content-center text-center">
            <h2 className="slider-title w-100">
              Для каждого клиента мы{" "}
              <b className="slider-title-bold">
                экономим от 10 тысяч на ремонте
              </b>{" "}
              за счет
              <b> прозрачности, честности</b> и запасных частей в{" "}
              <b>разных ценовых вариантах</b>. Мы заинтересованны в{" "}
              <b>долгосрочном сотрудничестве</b>, а не получении большой
              одноразовой прибыли
            </h2>
            <h4 className="slider-subtitle w-75">
              Мы не занижаем цены ни на сайте, ни по телефону. С нами у Вас не
              будет сюрпризов "увеличения стоимости ремонта в разы"
            </h4>
            <h2 className="slider-title w-100">
              <b className="slider-title-bold">Более 40% </b>клиентов приходят к
              нам <b className="slider-title-bold">по рекомендации</b>
            </h2>
          </div>
        </div>
      </section>
    );}}