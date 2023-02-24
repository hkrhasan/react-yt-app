import React, { Component } from "react";
import thumbnail from "../assets/thumbnail.jpeg";
import Avatar from "./Avatar";
import { BsDot } from "react-icons/bs";
import nFormatter from "../utility/numberFormatter";
import moment from "moment";
import { Link } from "react-router-dom";

export default class Card extends Component {
  render() {
    const { snippet, statistics, id } = this.props;
    const { thumbnails, title, channelTitle, publishedAt } = snippet;
    const { viewCount } = statistics;

    const date1 = moment(publishedAt);
    const date2 = moment();
    const duration = moment.duration(date1.diff(date2));

    return (
      <Link to={`/watch?v=${id}`}>
        <div className="flex flex-col gap-y-4">
          <div className="rounded-xl overflow-hidden">
            {/* thumbnail */}
            <img src={thumbnails.high.url} alt="thumbnail" className="" />
          </div>
          <div className="flex gap-x-4">
            <div>
              <Avatar />
            </div>
            <div>
              <h4 className="font-bold">{title}</h4>
              <p className="text-sm">{channelTitle}</p>
              <div className="text-sm flex items-center">
                <span>{nFormatter(viewCount)}</span> <BsDot />{" "}
                <span>{duration.humanize()}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
