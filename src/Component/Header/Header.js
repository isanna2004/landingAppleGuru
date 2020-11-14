import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header bg-dark py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className=" col-12 col-md-2 text-md-left text-center">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="60" height="60" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use xlinkHref="#image0" transform="scale(0.00666667)" />
                  </pattern>
                  <image
                    id="image0"
                    width="150"
                    height="150"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </div>
            <div className="col-12 col-md-5">
              <nav className="header-nav">
                <ul className="nav justify-content-center flex-wrap">
                  <li className="nav-item">
                    <Link to="/" className="text-white">
                      Цены
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="text-white">
                      О нас
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="text-white">
                      Гарантия
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="text-white">
                      Контакты
                    </Link>
                  </li>
                </ul>{" "}
              </nav>
            </div>
            <div className="col-12 col-md-3 text-md-right text-center my-1">
              <p className="mb-0  text-white">+88008888888</p>
              <sub className="text-white">ежедневно с 09:00 до 19:00</sub>
            </div>
            <div className="col-12 col-md-2 text-center my-1">
              {" "}
              <button className="btn btn-primary">Заказать звонок</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
