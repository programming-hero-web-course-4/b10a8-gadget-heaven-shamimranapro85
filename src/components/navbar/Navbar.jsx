import { CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const Navber = ({ addCart, addfav }) => {
  const { pathname } = useLocation();
  const navItems = (
    <>
      <NavLink className={"mr-2 mb-2 px-3 rounded-md py-2"} to="/">
        Home
      </NavLink>
      <NavLink to="/Statistics" className={"mr-2 mb-2 px-3 rounded-md py-2"}>
        Statistics
      </NavLink>
      <NavLink to="/Dashboard" className={"mr-1 mb-2 px-3 rounded-md py-2"}>
        Dashboard
      </NavLink>
    </>
  );
  return (
    <div
      className={`navbar  container mx-auto ${
        pathname == "/" ? "text-white " : ""
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 !text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <a className="text-xl">Gadeget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <NavLink
          to={"/dashboard"}
          className="p-2 rounded-full relative !text-gray-200  bg-pink-400 h-7 w-7 flex justify-center items-center ml-2"
        >
          {addCart < 1 ? (
            ""
          ) : (
            <span className="rounded-full w-4 h-4 absolute -top-2 -right-1 bg-red-500 text-[10px] flex justify-center items-center">
              {addCart}
            </span>
          )}
          <FaCartPlus />
        </NavLink>
        <NavLink
          to={"/dashboard"}
          className="p-2 rounded-full relative bg-pink-400 h-7 w-7 flex !text-gray-200  justify-center items-center ml-2"
        >
          {addfav < 1 ? (
            ""
          ) : (
            <span className="rounded-full w-4 h-4 absolute -top-2 -right-1 bg-red-500 text-[10px] flex justify-center items-center">
              {addfav}
            </span>
          )}
          <CiHeart />
        </NavLink>
      </div>
    </div>
  );
};

export default Navber;
