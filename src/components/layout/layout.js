import React from "react";

import NavBar from "../navbar/navbar.js";
import Main from "../main/main.js";
import Footer from "../footer/footer.js";

require("./layout.css");

export default class Layout extends React.Component {
  render() {
    return (
      <div id="layoutcontainer" class ="ui container">
        <NavBar />
        <Main>
        {this.props.children}
        </Main>
        <Footer />
      </div>
    );
  }
}