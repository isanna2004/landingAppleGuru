import React from "react";
import { Link } from "react-router-dom";
import Checkbox from "../Checkbox/Checkbox";
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
let utm_device = urlParams.get("utm_device");console.log(utm_device)
utm_device = utm_device && devices[utm_device]

export default class Cost extends React.Component {
  /*  State */
  state = {
    device: data,
    selectedDevice: utm_device,
    selectedModel: 0,
    arr1: [],
    arr2: [],
    price: 0,
  };

  /** */
  Sum = (price, e) => {
    let check = e.target.checked;
    this.setState((state) => ({
      price: check ? price + this.state.price : state.price - price,
    }));
  };

  /*  Render */

  render() {
    const { device, arr1, arr2, selectedDevice, selectedModel } = this.state;

    return (
      <section className="cost text-center">
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
                      idx == selectedDevice ? "btn-primary" : "btn-light"
                    }`}
                    style={{ minWidth: "133px" }}
                    onClick={() => this.setState({ selectedDevice: idx })}
                  >
                    {deviceItem.name}
                  </button>
                </div>
              );
            })}
            <div className="col-10 my-5">
              {device[selectedDevice].models.map((model, idx) => {
                let arr1 = model.prices.slice(0, model.prices.length / 2),
                  arr2 = model.prices.slice(model.prices.length / 2);

                return (
                  <div
                    className="btn-group flex-wrap"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      className={`btn m-1 rounded-0 ${
                        idx == selectedModel ? "btn-primary" : "btn-light"
                      }`}
                      style={{ width: "105px", height: "52px" }}
                      onClick={() =>
                        this.setState({
                          selectedModel: idx,
                          arr1: arr1,
                          arr2: arr2,
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
              {arr1.map((item) => {
                return (
                  <Checkbox
                    service={item.service}
                    price={item.price}
                    onChange={(e) => {
                      this.Sum(item.price, e);
                    }}
                  />
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
              {arr2.map((service) => {
                let price = service.price;
                return (
                  <Checkbox
                    service={service.service}
                    price={price}
                    onChange={(e) => {
                      this.Sum(price, e);
                    }}
                  />
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
                  type="submit"
                  className="btn btn-primary ml-3 mb-2 py-2"
                >
                  заказать ремонт
                </button>
              </form>
              <Link to="/" className="link">
                Не нашли своей поломки?
              </Link>
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
          </div>{" "}
        </div>
      </section>
    );
  }
}
