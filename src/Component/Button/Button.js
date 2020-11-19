import React from "react";


export default class Button extends React.Component {
  render() {
    return (
      <button type="button" className="btn btn-light rounded m-1" onClick={this.props.onClick} >
     {this.props.value}
      </button>
    );
  }
}