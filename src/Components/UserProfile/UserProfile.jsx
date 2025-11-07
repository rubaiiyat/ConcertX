import React from "react";
import UserProfileInfo from "./UserProfileInfo";
import { Outlet } from "react-router";
import { Helmet } from "react-helmet-async";

const UserProfile = () => {
  return (
    <div style={{ fontFamily: "'Bebas Neue', cursive" }} className="">
      <Helmet>
        <title>ConcertX | User Profile</title>
      </Helmet>
      <UserProfileInfo />
    </div>
  );
};

export default UserProfile;
