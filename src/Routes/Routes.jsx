import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Components/Pages/Home/Home";
import SponsorSlider from "../Components/Pages/Home/SponsorSlider";
import Events from "../Components/Events/Events";
import Contact from "../Components/Pages/Contact";

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
        element: <div>My Bookings</div>,
      },
      {
        path: "/news",
        element: <div>News</div>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/sponsors",
        element: <SponsorSlider></SponsorSlider>,
      },
      {
        path: "/partners",
        element: <SponsorSlider></SponsorSlider>,
      },
      {
        path: "*",
        element: <div>404</div>,
      },
    ],
  },
]);

export default Routes;
