import React, { Component } from "react";
import avatarImage from "../assets/avatar.jpeg";

export default class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className={`rounded-full overflow-hidden h-${this.props.size || 12} w-${
          this.props.size || 12
        }`}
      >
        <img src={this.props.src || avatarImage} alt="avatart" />
      </div>
    );
  }
}
