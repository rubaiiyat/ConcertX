import React from "react";
import { CiLogout } from "react-icons/ci";
import { FaCartPlus, FaCloudDownloadAlt } from "react-icons/fa";
import { MdBrowserUpdated, MdManageHistory } from "react-icons/md";
import { NavLink, Outlet } from "react-router";
import AdminNav from "./AdminNav";

const AdminDashboard = () => {
  return (
    <div style={{ fontFamily: "'Bebas Neue', cursive" }}>
      <AdminNav></AdminNav>
    </div>
  );
};

export default AdminDashboard;
