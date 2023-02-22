import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { BiVideoPlus } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import Avatar from "./Avatar";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

export default function Header({ search }) {
  let [searchParams, setSearchParam] = useSearchParams();
  const searchQuery = searchParams.get("search_query");
  const [searchText, setSearchText] = useState(searchQuery);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    if (searchParams.get("search_query") === searchText) {
      search(searchText);

      return;
    }

    if (searchText) {
      navigate(`/search?search_query=${searchText}`);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      search(searchQuery);
    }
  }, []);

  return (
    <div className="flex items-center justify-between px-2 h-20 sticky top-0 bg-white">
      {/* logo */}
      <Link to={"/"}>
        <img src={logo} alt="" className="w-32" />
      </Link>

      {/* search */}
      <form onSubmit={onSubmit}>
        <div className="border border-black flex h-12 items-center justify-between min-w-[600px] rounded-full overflow-hidden">
          <input
            value={searchText}
            id="search_query"
            type="text"
            className="w-full px-5 outline-none border-none text-lg"
            onChange={(e) => {
              setSearchText(e.target.value);

              if (searchQuery) setSearchParam({ search_query: e.target.value });
            }}
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

// export default class Header extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       search_query: "",
//       enableRedirect: false,
//     };
//   }

//   componentDidMount() {
//     // console.log(window);
//   }

//   onSubmit = (e) => {
//     e.preventDefault();

//     if (this.state.search_query) {
//       this.setState({ enableRedirect: true });
//     }
//   };

//   render() {
//     if (this.state.enableRedirect) {
//       //false
//       return (
//         <Navigate
//           to={`/search?search_query=${this.state.search_query}`}
//           replace={true}
//         />
//       );
//     }

//     return (
//       <div className="flex items-center justify-between px-2 h-20 sticky top-0 bg-white">
//         {/* logo */}
//         <div>
//           <img src={logo} alt="" className="w-32" />
//         </div>

//         {/* search */}
//         <form onSubmit={this.onSubmit}>
//           <div className="border border-black flex h-12 items-center justify-between min-w-[600px] rounded-full overflow-hidden">
//             <input
//               value={this.state.search_query}
//               id="search_query"
//               type="text"
//               className="w-full px-5 outline-none border-none text-lg"
//               onChange={(e) => this.setState({ search_query: e.target.value })}
//             />
//             <button
//               type="submit"
//               className="outline-none border-none  p-3 px-5 bg-gray-200"
//             >
//               <FiSearch className="text-2xl" />
//             </button>
//           </div>
//         </form>
//         {/* side icons */}
//         <div className="flex gap-x-4 items-center">
//           <BiVideoPlus className="text-3xl" />
//           <IoNotifications className="text-3xl" />
//           <Avatar />
//         </div>
//       </div>
//     );
//   }
// }
