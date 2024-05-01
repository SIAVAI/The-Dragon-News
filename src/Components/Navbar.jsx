import { Link } from "react-router-dom";
import user from "../assets/user.png";
const Navbar = () => {
  const links = (
    <>
      <li>
        <Link className="text-xl font-normal text-[#706F6F] " to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-xl font-normal text-[#706F6F] " to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="text-xl font-normal text-[#706F6F] " to="/career">
          Career
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 my-4">
      <div className="navbar-start">
        <div className="dropdown">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <img className="btn w-auto mr-2 bg-white" src={user} alt="" />
        <Link
          to="/login"
          className="btn bg-[#403F3F] text-white font-normal text-xl "
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
