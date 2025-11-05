import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-100 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link to={"/about"} className="link link-hover">
          About us
        </Link>
        <Link to={"/contact"} className="link link-hover">
          Contact
        </Link>
        <Link to={"'/partners"} className="link link-hover">
          Partners
        </Link>
        <Link to={"/sponsors"} className="link link-hover">
          Sponsor
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link to={"https://x.com/"}>
            <FaTwitter className="w-6 h-6" />
          </Link>
          <Link to={"https://www.youtube.com/"}>
            <FaYoutube className="w-6 h-6" />
          </Link>
          <Link to={"https://www.facebook.com/"}>
            <FaFacebook className="w-6 h-6" />
          </Link>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          <Link to={"/"} className="text-accent mx-1 font-bold text-base">
            ConcertX
          </Link>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
