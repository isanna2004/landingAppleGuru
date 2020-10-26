import React from "react";
import { Link } from "react-router-dom";
import Checkbox from "../Checkbox/Checkbox";
import "./Cost.css";
import iphone from "../../images/iphone.png";
import Button from "../Button/Button";
import data from "../Data/data.json";

export default class Cost extends React.Component {
  state = {
    device: [],
    model: [],
    elem: [],
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
    console.log(model);
    this.setState({
      model: model,
    });
  };

  /*   ; */

  render() {
    const { device, elem, model } = this.state;

    return (
      <section className="cost mt-5 text-center">
        <div className=" container">
          <h2 className="title">Стоимость услуг</h2>
          <div className="row justify-content-center">
            {" "}
            {device.map((elem) => {
              return (
                <div
                  className="btn-group btn-group-lg my-4 flex-wrap"
                  role="group"
                  key={elem.id}
                >
                  <button
                    type="button"
                    className="btn btn-light p-3 rounded-0"
                    style={{minWidth:"133px"}}
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
            <div className="col-10 mb-3">
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
          </div>
        <div className="check">
              <img src={iphone} />
            
            {model.map((service) => {
              return (
                <Checkbox service={service.service} price={service.price} />
              );
            })}
        </div>
          <div className="col-12 mt-5">
            <h3 className="subtitle">Итого : </h3>
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
