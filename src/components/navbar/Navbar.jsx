import { NavLink, useLocation } from "react-router-dom";

const Navber = () => {
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
        <a className="p-2 rounded-full bg-pink-400 h-7 w-7 flex justify-center items-center ml-2">
          b
        </a>
        <a className="p-2 rounded-full bg-pink-400 h-7 w-7 flex justify-center items-center ml-2">
          w
        </a>
      </div>
    </div>
  );
};

export default Navber;
