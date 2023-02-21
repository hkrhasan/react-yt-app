import React, { Component } from "react";
import logo from "../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { BiVideoPlus } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import Avatar from "./Avatar";
import { Navigate } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_query: "",
      enableRedirect: false,
    };
  }

  componentDidMount() {
    // console.log(window);
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.search_query) {
      this.setState({ enableRedirect: true });
    }
  };

  render() {
    if (this.state.enableRedirect) {
      //false
      return (
        <Navigate
          to={`/search?search_query=${this.state.search_query}`}
          replace={true}
        />
      );
    }

    return (
      <div className="flex items-center justify-between px-2 h-20 sticky top-0 bg-white">
        {/* logo */}
        <div>
          <img src={logo} alt="" className="w-32" />
        </div>

        {/* search */}
        <form onSubmit={this.onSubmit}>
          <div className="border border-black flex h-12 items-center justify-between min-w-[600px] rounded-full overflow-hidden">
            <input
              value={this.state.search_query}
              id="search_query"
              type="text"
              className="w-full px-5 outline-none border-none text-lg"
              onChange={(e) => this.setState({ search_query: e.target.value })}
            />
            <button
              type="submit"
              className="outline-none border-none  p-3 px-5 bg-gray-200"
            >
              <FiSearch className="text-2xl" />
            </button>
          </div>
        </form>
        {/* side icons */}
        <div className="flex gap-x-4 items-center">
          <BiVideoPlus className="text-3xl" />
          <IoNotifications className="text-3xl" />
          <Avatar />
        </div>
      </div>
    );
  }
}
