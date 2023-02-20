import React, { Component } from "react";
import logo from "../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { BiVideoPlus } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import Avatar from "./Avatar";

export default class Header extends Component {
  render() {
    return (
      <div className="flex items-center justify-between px-2 h-20 sticky top-0 bg-white">
        {/* logo */}
        <div>
          <img src={logo} alt="" className="w-32" />
        </div>

        {/* search */}
        <div>
          <div className="border border-black flex h-12 items-center justify-between min-w-[600px] rounded-full overflow-hidden">
            <input
              type="text"
              className="w-full px-5 outline-none border-none text-lg"
            />
            <div className="p-3 px-5 bg-gray-200">
              <FiSearch className="text-2xl" />
            </div>
          </div>
        </div>
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
