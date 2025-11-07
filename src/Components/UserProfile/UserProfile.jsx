import React from "react";
import UserProfileInfo from "./UserProfileInfo";
import { Outlet } from "react-router";

const UserProfile = () => {
  return (
    <div style={{ fontFamily: "'Bebas Neue', cursive" }} className="">
      <UserProfileInfo />
    </div>
  );
};

export default UserProfile;
