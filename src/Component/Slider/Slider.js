import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Slide from "../Slide/Slide";
import "./Slider.css";


export default class Slider extends React.Component {
  render() {
    const responsive = {
      0: { items: 1 },
      568: { items: 2 },
      1024: { items: 4 },
    };

    const items = [
      <Slide />,
      <Slide />,
      <Slide />,
      <Slide />,
      <Slide />,
      <Slide />,
    ];

    return (
      <section className="slider text-center" id="about us">
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="slider-title">
              У нас работают мастера с{" "}
              <b className="slider-title-bold">опытом работы от 3-х лет</b> с
              подтверждённой квалификацией.
            </h2>
            <h4 className="slider-subtitle">
              <b> Каждые 6 месяцев</b> наши
              инженеры повышают квалификацию на специальных курсах и вебинарах.
              Вы защищены от некомпетентних специалистов
            </h4>{" "}
            <div className="col-12">
              <AliceCarousel
                responsive={responsive}
                items={items}
              ></AliceCarousel>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
