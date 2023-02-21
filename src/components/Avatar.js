import React, { Component } from "react";
import avatarImage from "../assets/avatar.jpeg";

export default class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={`rounded-full overflow-hidden w-12 h-12`}>
        <img src={this.props.src || avatarImage} alt="avatart" />
      </div>
    );
  }
}
