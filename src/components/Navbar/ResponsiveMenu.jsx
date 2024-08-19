import React from "react";
import { Link } from "react-router-dom";


const navbarLinks = [
    {
        name:"home",
        link:"/",
    },
    {
        name:"Products",
        link:"/products",
    },
    {
        name:"Projects",
        link:"/projects",
    },
];

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${showMenu ? "left-0" : "-left-[100%]"}
            fixed bottom-0 top-0 z-20 flex h-screen w-[50%] flex-col justify-between bg-white  dark:text-white 
            px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="Navbar_card">
        <div className="text-black mt-12">
            <ul className="space-y-4 text-xl">
                {
                    navbarLinks.map(({ name, link}) => 
                        (<li>
                            <Link to={link}
                            onClick={() => setShowMenu(false)}
                            className="mb-5 inline-block"
                            >{name}
                            </Link>
                        </li>
                   ) )}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
