import React from "react";
import "./MainPage.css";
import logo from "../../images/logo.png";
import cable from "../../images/cable.jpg";
import phone from "../../images/phone.png";
class MainPage extends React.Component {
  state = {
    display: "none",
    isToggleOn: false,
  };
  render() {
    return (
      <section className="mainpage">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="title w-50">
                Отремонтируем ваш MacBook за 1 день у вас на дому с выгодой до
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
                  Փ
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
                <button type="button" className="gift btn btn-light p-0">
                  <span className="number">1</span>
                  <img className="thumb" src={logo} />
                </button>
                <button type="button" className="gift btn btn-light p-0">
                  <span className="number">2</span>
                  <img className="thumb" src={cable} />
                </button>
                <button type="button" className="gift btn btn-light p-0">
                  <span className="number">3</span>
                  <img
                    className="thumb"
                    src={phone}
                    style={{  height: "80px" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default MainPage;
