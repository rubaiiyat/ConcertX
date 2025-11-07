import React from "react";
import { CiLogout } from "react-icons/ci";
import { FaCartPlus, FaCloudDownloadAlt } from "react-icons/fa";
import { MdBrowserUpdated, MdManageHistory } from "react-icons/md";
import { NavLink, Outlet } from "react-router";
const UserProfileInfo = () => {
  return (
    <div className="">
      <div className="min-h-screen bg-base-200 flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className=" bg-base-300 p-15 flex flex-col items-center ">
          {/* User info */}
          <img
            src="https://images.ctfassets.net/xjcz23wx147q/iegram9XLv7h3GemB5vUR/0345811de2da23fafc79bd00b8e5f1c6/Max_Rehkopf_200x200.jpeg"
            alt="User Avatar"
            className="w-36 h-36 rounded-full border-4 border-primary mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Abir Rubaiyat
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            abirr@gmail.com
          </p>

          {/* Nav Links */}
          <ul className="menu w-full text-base ">
            <li>
              <NavLink to={"my-cart"}>
                <FaCartPlus /> My Cart
              </NavLink>
            </li>
            <li>
              <NavLink to={"payment-history"}>
                <MdManageHistory />
                Payment History
              </NavLink>
            </li>
            <li>
              <NavLink to={"download-ticket"}>
                <FaCloudDownloadAlt /> Download Ticket
              </NavLink>
            </li>
            <li>
              <NavLink to={"update-profile"}>
                <MdBrowserUpdated /> Update Profile
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

export default UserProfileInfo;
