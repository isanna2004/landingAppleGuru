import React from "react";
import "./Checkbox.css";

export default class Checkbox extends React.Component{
    render(){
        return (
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <label className="form-check-label">
              Замена стекла - <b>1650 руб.</b>
            </label>
          </div>
        );
    }
}