import React from "react";

import "./mortgage.css";


export default class Mortgage extends React.Component {

  render() {
    console.log("Route Name=[" +this.props.route.name +"]");
    return (
      <h4>Mortgage is here</h4>
    )
  }
}