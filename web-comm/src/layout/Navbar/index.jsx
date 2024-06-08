import {MdOutlineMenu} from "react-icons/md"
import { BUTTON_LINKS, NAV_LINKS } from "../../assets/Data";
import { Link, NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import { Logo } from "../../assets/logos/index";

function Navbar() {
  const [activeLink, setActiveLink] = useState(null);
  const handleActiveLinkClick = (path) => {
    setActiveLink(path);
  };
  return (
    <div className=" fixed w-full right-0 z-10 navbar-transparent flex px-10 py-2 max-lg:p-0 max-xl:p-0 max-sm:p-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <MdOutlineMenu fontSize={24} />
          </div>

          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.id} className="px-2 py-2 sm:py-1">
                <Link to={link.path}>{link.linkName}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                onClick={() => handleActiveLinkClick(link.path)}
                className={
                  activeLink === link.path
                    ? "active-link text-blue-500 font-medium px-2 py-1 ml-8 text-base"
                    : "px-2 py-1 ml-8 text-base"
                }
              >
                {link.linkName === "Dodo" ? (
                  <h1 className="w-20 lowercase font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-blue-400">
                    <Link to="/">
                      <img src={Logo} alt="main-logo" className="" />
                    </Link>
                  </h1>
                ) : (
                  link.linkName
                )}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>

      <div className="navbar-end flex items-center gap-3 max-md:w-full max-lg:px-1">
        {BUTTON_LINKS.map((button) => (
          <Link
            key={button.id}
            className={`${
              button.variant === "none"
                ? "btn btn-ghost "
                : button.variant === "outlined"
                ? "border-2 border-blue-600 rounded flex items-center gap-2 p-1 max-lg:gap-0 max-lg:px-1 text-blue-600"
                : button.variant === "filled"
                ? "bg-[#031AFD] text-white rounded flex items-center gap-2 p-1 max-lg:gap-0 max-lg:px-1"
                : "btn btn-ghost"
            }`}
            to={button.path}
          >
            {button.name}
            <FaArrowRightLong />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;