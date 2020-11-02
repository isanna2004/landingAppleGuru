import React from "react";
import "./Checkbox.css";

export default class Checkbox extends React.Component {

  render() {
    const { price, service, onChange } = this.props;
    return (
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          onChange={onChange}
        />
        <label className="form-check-label">
          {service} - <b>{price}</b>
        </label>
      </div>
     
    )
  }
}
