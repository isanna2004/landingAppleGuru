import React from "react";
import photo from "../../images/photo3.jpg";

export default class Slide extends React.Component {
  render() {
    return (
      <div className="item p-2 mr-2 text-left">
        <img src={photo} className="sliderimg w-100" alt="man" />
        <h3>Max Holden</h3>
        <p>Founder & Art Director</p>
        <hr
          style={{
            width: "100px",
            height: "4px",
            backgroundColor: "#53A2FC",
            marginLeft: "0",
          }}
        />
        <p>
          Max invented our company. He is the father of our main goals and
          values. He has founded first core members of our team and helped them
          to show their unique talents in work process.
        </p>
      </div>
    );
  }
}
