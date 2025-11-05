import { useEffect, useState } from "react";
import { GrMenu } from "react-icons/gr";
import { IoMoon, IoSunny } from "react-icons/io5";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [dark]);
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-accent font-semibold underline text-base"
              : "hover:underline text-base"
          }
          style={{ fontFamily: "'Bebas Neue', cursive" }}
        >
          HOME
        </NavLink>
      </li>
      {
        <li>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive
                ? "text-accent font-semibold underline text-base"
                : "hover:underline text-base"
            }
            style={{ fontFamily: "'Bebas Neue', cursive" }}
          >
            EVENTS
          </NavLink>
        </li>
      }
      <li>
        <NavLink
          to="/my-bookings"
          className={({ isActive }) =>
            isActive
              ? "text-accent font-semibold underline text-base"
              : "hover:underline text-base"
          }
          style={{ fontFamily: "'Bebas Neue', cursive" }}
        >
          MY BOOKINGS
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            isActive
              ? "text-accent font-semibold underline text-base"
              : "hover:underline text-base"
          }
          style={{ fontFamily: "'Bebas Neue', cursive" }}
        >
          NEWS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-accent font-semibold underline text-base"
              : "hover:underline text-base"
          }
          style={{ fontFamily: "'Bebas Neue', cursive" }}
        >
          CONTACT
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-accent font-semiboldd underline text-base"
              : "hover:underline text-base"
          }
          style={{ fontFamily: "'Bebas Neue', cursive" }}
        >
          ABOUT
        </NavLink>
      </li>
      {/* 
      {role === "Admin" && (
        <li>
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-[#F16623] font-bold underline text-base"
                : "hover:underline text-base"
            }
          >
            Admin Dashboard
          </NavLink>
        </li>
      )} */}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-0 md:px-16 p-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <GrMenu />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <NavLink
            className="text-3xl font-bold tracking-tight"
            style={{
              fontFamily: "'Metal Mania', cursive",
              letterSpacing: "-1px",
            }}
          >
            <span className="text-accent drop-shadow-[0_0_6px_#f87171]">C</span>
            oncert
            <span className="text-accent drop-shadow-[0_0_6px_#f87171]">X</span>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end space-x-2">
          <div className="flex items-center gap-2">
            <label className="toggle text-base-content">
              <input type="checkbox" onChange={() => setDark(!dark)} />
              <IoMoon />
              <IoSunny />
            </label>
          </div>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="" className="">
              <Link
                className="text-small md:text-base border border-accent p-2 px-5 bg-[#202F34] text-white rounded-full hover:bg-[#2a4751] transition duration-500"
                style={{ fontFamily: "'Bebas Neue', cursive" }}
              >
                Sign In
              </Link>
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <Link to={"/user/auth/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/user/auth/register"}>Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
