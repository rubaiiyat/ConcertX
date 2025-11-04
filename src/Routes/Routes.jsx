import { createBrowserRouter } from "react-router";
import App from "../App";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <div>this is home</div>,
  },
]);

export default Routes;
