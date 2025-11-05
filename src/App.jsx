import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Footer from "./Components/Shared/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-5 md:mx-18 lg:mx-24 min-h-[80vh] mb-20">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
