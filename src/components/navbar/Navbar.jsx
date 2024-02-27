import logo from "../../assets/images/Logo.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import "./navbar.css";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between mt-4">
        <img src={logo} alt="brand logo" />
        <div>
                  <ul className="flex items-center gap-8">
            <li className="nav-underline">Home</li>
            <li>About us</li>
            <li>Service</li>
            <li>Our work</li>
            <li>Education</li>
          </ul>
        </div>
        <button className="btn-one gradient-text gradient-border flex gap-2 items-center">
          Hire Us <MdOutlineArrowOutward size={22} className="gradient-text" />
        </button>
      </div>
    </>
  );
};
export default Navbar;
