import React, { Component } from "react";
import thumbnail from "../assets/thumbnail.jpeg";
import Avatar from "./Avatar";

export default class Card extends Component {
  render() {
    return (
      <div className="flex flex-col gap-y-4">
        <div className="rounded-xl overflow-hidden">
          {/* thumbnail */}
          <img src={thumbnail} alt="thumbnail" className="" />
        </div>
        <div className="flex gap-x-4">
          <div>
            <Avatar />
          </div>
          <div>
            <h4>this is heading</h4>
            <p>100k</p>
          </div>
        </div>
      </div>
    );
  }
}
