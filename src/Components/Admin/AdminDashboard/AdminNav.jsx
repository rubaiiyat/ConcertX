import React from "react";
import { CiLogout } from "react-icons/ci";
import { FaHome, FaUsers } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { IoAddCircle } from "react-icons/io5";
import { NavLink, Outlet } from "react-router";

const AdminNav = () => {
  const activeClass = "text-accent font-semibold";
  return (
    <div>
      <div className="min-h-screen bg-base-200 flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className=" bg-base-300 p-15 flex flex-col items-center ">
          {/* User info */}
          <img
            src="https://images.ctfassets.net/xjcz23wx147q/iegram9XLv7h3GemB5vUR/0345811de2da23fafc79bd00b8e5f1c6/Max_Rehkopf_200x200.jpeg"
            alt="User Avatar"
            className="w-36 h-36 rounded-full border-4 border-primary mb-4"
          />
          <h2 className="text-xl font-semibold ">Abir Rubaiyat</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            abirr@gmail.com
          </p>

          {/* Nav Links */}
          <ul className="menu w-full text-base">
            <li>
              <NavLink
                to={"/admin/dashboard"}
                end
                className={({ isActive }) => (isActive ? activeClass : "")}
              >
                <FaHome /> Admin Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"add-event"}
                className={({ isActive }) => (isActive ? activeClass : "")}
              >
                <IoAddCircle /> Add Event
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"receives-money"}
                className={({ isActive }) => (isActive ? activeClass : "")}
              >
                <FaMoneyBill1Wave /> Recieves Money
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"manage-users"}
                className={({ isActive }) => (isActive ? activeClass : "")}
              >
                <FaUsers /> Manage Users
              </NavLink>
            </li>

            <li>
              <button>
                <CiLogout /> Logout
              </button>
            </li>
          </ul>
        </div>

        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
