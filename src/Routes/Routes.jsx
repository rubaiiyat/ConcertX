import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Components/Pages/Home/Home";
import SponsorSlider from "../Components/Pages/Home/SponsorSlider";
import Events from "../Components/Events/Events";
import Contact from "../Components/Pages/Contact";
import About from "../Components/Pages/About";
import News from "../Components/News/News";
import MyBookings from "../Components/UserProfile/MyBookings";
import UserProfile from "../Components/UserProfile/UserProfile";
import MyCarts from "../Components/UserProfile/MyCart/MyCarts";
import PaymentHistory from "../Components/UserProfile/PaymentHistory/PaymentHistory";
import DownloadTicket from "../Components/UserProfile/DownloadTicket/DownloadTicket";
import UpdateProfile from "../Components/UserProfile/UpdateProfile/UpdateProfile";
import AdminDashboard from "../Components/Admin/AdminDashboard/AdminDashboard";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
      {
        path: "/my-bookings",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "/news",
        element: <News></News>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/sponsors",
        element: <SponsorSlider></SponsorSlider>,
      },
      {
        path: "/partners",
        element: <SponsorSlider></SponsorSlider>,
      },
      // User Profile
      {
        path: "/user/profile",
        element: <UserProfile></UserProfile>,
        children: [
          {
            path: "my-cart",
            element: <MyCarts></MyCarts>,
          },
          {
            path: "payment-history",
            element: <PaymentHistory></PaymentHistory>,
          },
          {
            path: "download-ticket",
            element: <DownloadTicket></DownloadTicket>,
          },
          {
            path: "update-profile",
            element: <UpdateProfile></UpdateProfile>,
          },
        ],
      },

      // Admin part
      {
        path: "/admin/dashboard",
        element: <AdminDashboard></AdminDashboard>,
        children: [
          {
            path: "",
            element: <div>Admin Home</div>,
          },
          {
            path: "add-event",
            element: <div>Add Event</div>,
          },
          {
            path: "manage-users",
            element: <div>Manage Users</div>,
          },
          {
            path: "receives-money",
            element: <div>Receives Money</div>,
          },
        ],
      },
      {
        path: "*",
        element: <div>404</div>,
      },
    ],
  },
]);

export default Routes;
