import React from "react";
import "./MainPage.css";
import logo from "../../images/logo.png";
import cable from "../../images/cable.jpg";
import phone from "../../images/phone.png";
import background from "../../images/background.jpg"
export default class MainPage extends React.Component {
  state = {
    display: "none",
    isToggleOn: false,

  };

  componentDidMount(){ 
 let main = document.getElementById("main");
    var params = new URLSearchParams(window.location.search)
console.log(params)
switch (params.utm_device) {
  case "?utm_model=iphone":
    main.style.background = "pink";
    break;
  case "?utm_model=Mac":
    main.style.background = "red";
    break;
  case "?utm_model=IWatch":
    main.style.background = "red";
    break;
} 

 
  }
  render() {
    return (
      <main>
        <section className="mainpage" id="main">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="title">
                  Отремонтируем ваш <span className="highlights">MacBook</span> за 1 день у вас на дому с выгодой до
                  20%
                </h1>
              </div>
              <div className="col-12 mt-5">
                <p>Бесплатно расчитайте точную стоимость ремонта за 5 мин</p>
                <form className="form-inline">
                  <div className="form-group mb-2">
                    <input
                      type="tel"
                      className="phonenumber p-2"
                      placeholder="Введите ваш телефон"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary ml-3 mb-2 p-2"
                  >
                    Рассчитать стоимость
                  </button>
                </form>
                <p>
                  + получите один из 3 подарков на выбор{" "}
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState((state) => ({
                        isToggleOn: !state.isToggleOn,
                        display: state.isToggleOn ? "none" : "block",
                      }));
                    }}
                  >
                    🛈
                  </span>
                </p>
              </div>
              <div className="col-6">
                <div
                  style={{ display: this.state.display }}
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                  id="gift"
                >
                  <button type="button" className="gift btn btn-light">
                    <span className="number">1</span>
                    <img className="thumb" src={logo} alt="" />
                  </button>
                  <button type="button" className="gift btn btn-light">
                    <span className="number">2</span>
                    <img className="thumb" src={cable} alt="cable" />
                  </button>
                  <button type="button" className="gift btn btn-light">
                    <span className="number">3</span>
                    <img
                      className="thumb"
                      src={phone}
                      style={{ height: "80px" }}
                      alt="napkin"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
