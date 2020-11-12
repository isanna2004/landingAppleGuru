import React from "react";
import { Link } from "react-router-dom";
import Checkbox from "../Checkbox/Checkbox";
import "./Cost.css";
import iphone from "../../images/iphone.png";
import Button from "../Button/Button";
import data from "../Data/data.json";

export default class Cost extends React.Component {
  /*  State */
  state = {
    arr1: [],
    models: [],
    arr2: [],
    price: 0
  };

  getModel = (data) => {
    const models = data.models;
    this.setState({
      models: models
    });
  };
  getService = (model) => {
    let arr1 = model.prices.slice(0, model.prices.length / 2);
    let arr2 = model.prices.slice(model.prices.length / 2);
    this.setState({
      arr1: arr1,
      arr2: arr2,
    });
  };
  Sum = (price, e) => {
    let check = e.target.checked;
    this.setState((state) => ({
      price: check ? price + this.state.price : state.price - price,
    }));
  };

  /*  Render */

  render() {
    const { models, arr1, arr2 } = this.state;

    return (
      <section className="cost text-center">
        <div className=" container">
          <h1 className="title">Стоимость услуг</h1>
          <div className="row justify-content-center">
            {data.map((data) => {
              return (
                <div
                  className="btn-group btn-group-lg mt-4 flex-wrap"
                  role="group"
                  key={data.name}
                >
                  <button
                    type="button"
                    className="btn btn-light p-3 rounded-0"
                    style={{ minWidth: "133px" }}
                    value={data.name}
                    onClick={() => {
                      this.getModel(data);
                    }}
                  >
                    {data.name}
                  </button>
                </div>
              );
            })}
            <div className="col-10 my-5">
              {models.map((model) => {
                return (
                  <div
                    className="btn-group flex-wrap"
                    role="group"
                    aria-label="Basic example"
                  >
                    <Button
                      value={model.name}
                      onClick={() => {
                        this.getService(model);
                      }}
                    />
                  </div>
                );
              })}
            </div>{" "}
            <div className="col-md-3 col-12">
              {arr1.map((service) => {
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
            <div className="col-md-4 offset-1">
              <img src={iphone} style={{ minWidth: "320px" }} alt="iphone"/>
            </div>
            <div className="col-md-3 offset-1 col-12">
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
              <form className="form-inline justify-content-center mt-4">
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
              <Link to="/">Не нашли своей поломки?</Link>
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
