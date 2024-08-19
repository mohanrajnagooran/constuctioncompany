import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const DropdownLinks = [
  {
    name: "Location",
    link: "/#location",
  },
  {
    name: "Services",
    link: "/#services",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState (false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
   
  return (
    <div className="container w-full bg-white text-block">
      <div className="flex justify-between items-center py-2">
        {/* logo section */}
        <div>
          <Link to="/">
            <h1 className="font-bold text-3xl text-primary">VELA INDUSTRY</h1>
            <span>Structural Engineers & Consultancy</span>
          </Link>
        </div>
        {/*desktop Navlinks section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 ">
            <li className="py-4 font-semibold">
              <NavLink
                to="/"
                activeClassName="active"
                onClick={() => window.scrollTo(0, 0)}
              >
                Home
              </NavLink>
            </li>
            <li className="py-4 font-semibold">
              <NavLink
                activeClassName="active"
                to="/Products"
                onClick={() => window.scrollTo(0, 0)}
              >
                Products
              </NavLink>
            </li>
            <li className="py-4 font-semibold">
              <NavLink
                activeClassName="active"
                to="/Projects"
                onClick={() => window.scrollTo(0, 0)}
              >
                Projects
              </NavLink>
            </li>
            {/* dropdown section */}
            <li className="inline-block py-4 relative  group curser-pointer">
              <div className="dropdown flex items-center">
                <span className="font-semibold hover:text-primary">More</span>
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </div>
              <div className=" absolute -left-9 top-[57px] z-[9999] hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2">
                <ul>
                  {DropdownLinks.map((data) => {
                    return (
                      <li key={data.name}>
                        <a
                          className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                          href={data.link}
                        >
                          {data.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        {/* Contact us form */}
        <div className="flex items-center gap-4">
          <button className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-5 py-1 rounded-full">
            Contact
          </button>
          {/* mobile navigation link view */}
          <div className="md:hidden block">
                {showMenu? (
                  <HiMenuAlt1 
                  onClick={toggleMenu}
                  className="curser-pointer
                  transition-all"
                  size={30} />
                ):(
                  <HiMenuAlt3
                  onClick={toggleMenu}
                  className="curser-pointer
                  transition-all"
                  size={30} />
                )}
          </div>
        </div>
      </div>
      <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
