import logo from "../../assets/images/Logo.png";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import arrowUp from '../../assets/icons/arrow_up.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const MenuItem = (
    <>
      <li>
        <a href="#banner" className="activeNav font-semibold">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="activeNav font-semibold">
          About us
        </a>
      </li>
      <li>
        <a href="#service" className="activeNav font-semibold">
          service
        </a>
      </li>
      <li>
        <a href="#work" className="activeNav font-semibold">
          Our work
        </a>
      </li>
      <li>
        <a href="#education" className="activeNav font-semibold">
          Education
        </a>
      </li>
      <button
        className="item-border px-2 md:px-4 py-1 rounded-lg
           gradient-text gradient-border flex gap-2 items-center lg:text-lg"
      >
        Hire Us <img src={arrowUp} alt="" />
      </button>
    </>
  );

  return (
    <>
      <div className="md:hidden">
        <div className="navbar py-8 flex justify-between items-center">
          <div className="text-xl tracking-wide md:tracking-widest text-white flex items-center gap-4 md:hidden">
            <img
              src={logo}
              alt="brand logo"
              className="w-32 lg:w-40 2xl:w-60"
            />
          </div>
          <div className="dropdown z-50">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              {showMenu && (
                <FiMenu
                  onClick={() => setShowMenu(false)}
                  className="h-6 w-6 text-white"
                />
              )}
              {showMenu || (
                <FiMenu
                  onClick={() => setShowMenu(true)}
                  className="h-6 w-6 text-white"
                />
              )}
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content flex items-center gap-2 rounded-box bg-white text-black rounded-lg ${
                showMenu ? "absolute flex flex-col right-1 p-8" : "hidden"
              }`}
            >
              {MenuItem}
            </ul>
          </div>
        </div>
      </div>

      <div className="navbar-center hidden md:block ">
        <div className="flex justify-between items-center py-6">
          <div className="text-xl tracking-wide md:tracking-widest text-white flex items-center gap-4">
            <img
              src={logo}
              alt="brand logo"
              className="w-32 lg:w-40 2xl:w-60"
            />
          </div>
          <ul className="menu menu-horizontal px-1 flex justify-between gap-4 lg:gap-6 xl:gap-8 2xl:gap-10 items-center">
            <li>
              <a href="#banner" className="activeNav font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="activeNav font-semibold">
                About us
              </a>
            </li>
            <li>
              <a href="#service" className="activeNav font-semibold">
                service
              </a>
            </li>
            <li>
              <a href="#work" className="activeNav font-semibold">
                Our work
              </a>
            </li>
            <li>
              <a href="#education" className="activeNav font-semibold">
                Education
              </a>
            </li>
          </ul>
          <button
            className="item-border px-2 md:px-4 py-1 rounded-lg
           gradient-text gradient-border flex gap-2 items-center lg:text-lg"
          >
            Hire Us <img src={arrowUp} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
