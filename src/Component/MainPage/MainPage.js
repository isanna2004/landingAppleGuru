import React from "react";
import "./MainPage.css";
import logo from "../../images/logo.png";
import cable from "../../images/cable.jpg";
import phone from "../../images/phone.png";
import Background from "../../images/background.jpg";
import Background2 from "../../images/background2.png";
import Ba from "../../images/ba.png";
import ModalWindow from "../Modal/Modal";
import Background3 from "../../images/background3.jpg";
export default class MainPage extends React.Component {
  state = {
    device: "macbook",
    show: false,
    phone: 0,
  };
  

  componentDidMount() {
    let main = document.getElementById("main");
    const params = new URLSearchParams(window.location.search);
    const device = params.get("utm_device");
    if (
      device === null ||
      device.toLowerCase().replace("/", "") === this.state.device
    ) {
      main.style.background = `center no-repeat url(${Background})`;
      this.setState({
        device: "macbook",
      });
    } else {
      switch (device.toLowerCase().replace("/", "")) {
        case "iphone":
          main.style.background = `right no-repeat url(${Ba})`;
          main.style.backgroundSize = "610px";
          break;
        case "mac":
          main.style.background = `no-repeat right url(${Background2})`;
          main.style.backgroundSize = "765px";
          break;
        case "iwatch":
          main.style.background = `center no-repeat url(${Background})`;
          break;
        case "ipad":
          main.style.background = `right no-repeat url(${Background3})`;
          break;
        default:
          main.style.background = `right no-repeat url(${Ba})`;
          main.style.backgroundSize = "610px";
      }
      this.setState({
        device: device.replace("/", ""),
      });
    }
  }
  render() {
    const { device } = this.state;
    let gift = document.getElementById("gift");
    return (
      <main>
        <section className="mainpage" id="main">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="title">
                  Отремонтируем ваш
                  <span className="highlights"> {device}</span> за 1 день у вас
                  на дому с выгодой до 20%
                </h1>
              </div>
              <div className="col-12 mt-5">
                <p>Бесплатно расчитайте точную стоимость ремонта за 5 мин</p>{" "}
                <form className="form-inline">
                  <div className="form-group mb-2 mr-3 ">
                    <input
                      type="tel"
                      className="phonenumber p-2"
                      placeholder="Введите ваш телефон"
                    />
                  </div>
                  <button
                  type="button"
                    onClick={() => this.setState({ show: true })}
                    className="btn btn-primary ml-2 mb-2 p-2"
                  >
                    Рассчитать стоимость
                  </button>
                </form>
                <ModalWindow
                  show={this.state.show}
                  close={() => {
                    this.setState({ show: false });
                  }}
                  value={(e) => {
                    let phone = document.getElementById("phoneNumber").value;
                    this.setState({
                      phone: phone,
                      show: false,
                    });
                    e.preventDefault();
                  }}
                />
                <div className="col-6">
                  <p>
                    + получите один из 3 подарков на выбор{" "}
                    <span
                      className="sign"
                      style={{ cursor: "pointer" }}
                      onMouseEnter={() => {
                        gift.style.opacity = "1";
                      }}
                    >
                      🛈
                    </span>
                  </p>
                  <div
                    onMouseLeave={() => {
                      gift.style.opacity = "0";
                    }}
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
          </div>
        </section>
      </main>
    );
  }
}
