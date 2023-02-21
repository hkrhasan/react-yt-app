import React, { Component } from "react";
import Header from "./Header";

export default class Layout extends Component {
  render() {
    return (
      <div className="flex flex-col gap-y-3">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
