import React from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import "./Cost.css";
import iphone from "../../images/iphone.png";

import data from "../Data/data.json";

const devices = {
  "iphone/": 0,
  "ipad/": 1,
  "mac/": 2,
  "iwatch/": 3,
};
const urlParams = new URLSearchParams(window.location.search);
let utm_device = urlParams.get("utm_device");
utm_device = utm_device && devices[utm_device];

export default class Cost extends React.Component {
  /*  State */
  state = {
    device: data,
    selectedDevice: utm_device || 0,
    selectedModel: 0,
    price: 0,
  };

  /** */
  Sum = (price, e) => {
    let check = e.target.checked;
    this.setState((state) => ({
      price: check ? price.price + this.state.price : state.price - price.price,
    }));
  };

  /*  Render */

  render() {
    const { device, selectedDevice, selectedModel } = this.state;
    let price = device[selectedDevice].models[selectedModel].prices;
    const price_left = price.slice(0, Math.floor(price.length / 2));
    const price_right = price.slice(Math.floor(price.length / 2));

    return (
      <section className="cost text-center" id="cost">
        <div className=" container">
          <h1 className="title">Стоимость услуг</h1>
          <div className="row justify-content-center">
            {device.map((deviceItem, idx) => {
              return (
                <div
                  className="btn-group btn-group-lg mt-4 flex-wrap"
                  role="group"
                  key={deviceItem.name}
                >
                  <button
                    type="button"
                    className={`btn  p-3 rounded-0 ${
                      idx === selectedDevice ? "btn-primary" : "btn-light"
                    }`}
                    style={{ minWidth: "133px" }}
                    onClick={() =>
                      this.setState({
                        selectedDevice: idx,
                        selectedModel: deviceItem.defaultSelectedModel,
                        price: 0,
                      })
                    }
                  >
                    {deviceItem.name}
                  </button>
                </div>
              );
            })}
            <div className="col-10 my-5">
              {device[selectedDevice].models.map((model, idx) => {
                return (
                  <div
                    className="btn-group flex-wrap"
                    role="group"
                    aria-label="Basic example"
                    key={model.name}
                  >
                    <button
                      className={`btn m-1 py-1 ${
                        idx === selectedModel ? "btn-primary" : "btn-light"
                      }`}
                      style={{ width: "105px", height: "52px" }}
                      onClick={() =>
                        this.setState({
                          selectedModel: idx,
                          price: 0,
                          check: false,
                        })
                      }
                    >
                      {model.name}
                    </button>
                  </div>
                );
              })}
            </div>{" "}
          </div>
          <div className="row  position-relative justify-content-center">
            <div className="col-lg-3 col-12">
              {price_left.map((service) => {
                return (
                  <div className="form-check" key={service.service}>
                    <input
                      key={"" + selectedDevice + selectedModel}
                      className="form-check-input"
                      type="checkbox"
                      onChange={(e) => {
                        this.Sum(service, e);
                      }}
                    />
                    <label className="form-check-label">
                      {service.service} - <b>{service.price}</b>
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="col-lg-6 iphone col-12">
              <img
                src={iphone}
                alt="iphone"
                style={{ minWidth: "300px" }}
                className="iphone-img"
              />
            </div>
            <div className="col-lg-3 col-12">
              {price_right.map((service) => {
                return (
                  <div className="form-check" key={service.service}>
                    <input
                      key={"" + selectedDevice + selectedModel}
                      className="form-check-input"
                      type="checkbox"
                      onChange={(e) => {
                        this.Sum(service, e);
                      }}
                    />
                    <label className="form-check-label">
                      {service.service} - <b>{service.price}</b>
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="col-12 mt-5">
              <h3 className="subtitle">Итого : {this.state.price} рублей </h3>
              <form className="form-inline justify-content-center my-4">
                <div className="form-group mb-2">
                  <input
                    type="tel"
                    className="phonenumber p-2"
                    placeholder="Введите ваш телефон"
                  />
                </div>
                <button
                onClick={()=>{
                   let modal = document.getElementById("modal");
                   modal.style.display = "block";
                }}
                  type="submit"
                  className="btn btn-primary ml-3 mb-2 py-2"
                >
                  заказать ремонт
                </button>
              </form>
              <Link to="/" className="link">
                Не нашли своей поломки?
              </Link>
              <Modal/>
            </div>{" "}
          </div>{" "}
        </div>
        <div className="banner my-5">
          <div className=" text-layer">
            <p className="cost-text">Выедем к вам в течение 30 минут</p>
          </div>
          <div className=" text-layer">
            <p className="cost-text">Ремонт от 30 минут</p>
          </div>
          <div className=" text-layer">
            <p className="cost-text">Запасные запчасти в наличии</p>
          </div>
          <div className=" text-layer">
            <p className="cost-text">Гарантия 1 год</p>
          </div>
          <div className=" text-layer">
            <p className="cost-text">Выедем к вам в течение 30 минут</p>
          </div>
        </div>{" "}
      </section>
    );
  }
}
