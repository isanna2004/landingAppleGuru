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
    device: [],
    arr1: [],
    elem: [],
    arr2: [],
    price: 0,
    isChecked: true,
  };
  componentDidMount() {
    data.map((data) => {
      const device = data.device;
      this.setState({
        device: device,
      });
    });
  }

  getModel = (elem) => {
    const models = elem["models"];
    this.setState({
      elem: models,
    });
  };
  getService = (modelName) => {
    const model = modelName["prices"];
    let arr1 = model.slice(0, model.length / 2);
    let arr2 = model.slice(model.length / 2);
    this.setState({
      arr1: arr1,
      arr2: arr2,
    });
  };
  Sum = (price) => {
    const { isChecked } = this.state;
  console.log(this.state.isChecked)
    this.setState((state) => ({
      price: isChecked ? price + this.state.price : state.price - price,
      isChecked:!state.isChecked
    
  }))};

  /*  Render */

  render() {
    const { device, elem, arr1, arr2 } = this.state;

    return (
      <section className="cost mt-5 text-center">
        <div className=" container">
          <h2 className="title">Стоимость услуг</h2>
          <div className="row justify-content-center align-item-center">
            {" "}
            {device.map((elem) => {
              return (
                <div
                  className="btn-group btn-group-lg mt-4 flex-wrap"
                  role="group"
                  key={elem.id}
                >
                  <button
                    type="button"
                    className="btn btn-light p-3 rounded-0"
                    style={{ minWidth: "133px" }}
                    value={elem.name}
                    onClick={() => {
                      this.getModel(elem);
                    }}
                  >
                    {elem.image}
                    {elem.name}
                  </button>
                </div>
              );
            })}
            <div className="col-10 my-5">
              <div
                className="btn-group flex-wrap"
                role="group"
                aria-label="Basic example"
              >
                {elem.map((modelName) => {
                  return (
                    <Button
                      value={modelName.name}
                      onClick={() => {
                        this.getService(modelName);
                      }}
                    />
                  );
                })}{" "}
              </div>{" "}
            </div>
            <div className="col-md-3 col-12">
              {arr1.map((service) => {
                let price = service.price;
                return <Checkbox service={service.service} price={price} />;
              })}
            </div>
            <div className="col-md-4 offset-1">
              <img src={iphone} style={{ minWidth: "320px" }} />
            </div>
            <div className="col-md-3 offset-1 col-12">
              {arr2.map((service) => {
                let price = service.price;
                return (
                  <Checkbox
                    service={service.service}
                    price={price}
                    onChange={() => {
                      this.Sum(price);
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-12 mt-5">
            <h3 className="subtitle">Итого :{this.state.price} </h3>
            <form className="form-inline justify-content-center mt-4">
              <div className="form-group mb-2">
                <input
                  type="tel"
                  className="phonenumber p-2"
                  placeholder="Введите ваш телефон"
                />
              </div>
              <button type="submit" className="btn btn-primary ml-3 mb-2 py-2">
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
        </div>
      </section>
    );
  }
}
