import { Link, NavLink } from "react-router-dom";
import logo_icon from "../assets/logo.png";
import search_icon from "../assets/search_icon.png";
import profile_icon from "../assets/profile_icon.png";
import cart_icon from "../assets/cart_icon.png";
import dropdown_icon from "../assets/dropdown_icon.png";
import menu_icon from "../assets/menu_icon.png";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setvisible] = useState(false);
  const {setShowSearch,getCartCount} = useContext(ShopContext)

  return (
    <div className="flex justify-between items-center py-5">
      <Link to="/">
        <img src={logo_icon} className="w-36" alt="" />
      </Link>

      {/* for navigation */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <li>
          <NavLink to="/" className="flex flex-col items-center gap-1">
            Home
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden duration-300" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1"
          >
            Collection
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden duration-300" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            About
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden duration-300" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            Contact
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden duration-300" />
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-6">
        <img src={search_icon} onClick={()=>setShowSearch(true)} className="w-5 cursor-pointer" alt="" />

        <div className="group relative">
          <img src={profile_icon} className="w-5 cursor-pointer" alt="" />

          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 ">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black ">
                <Link>profile</Link>
              </p>
              <p className="cursor-pointer hover:text-black ">
                <Link>orders</Link>
              </p>
              <p className="cursor-pointer hover:text-black ">
                <Link> logout</Link>
              </p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={cart_icon} className="w-5 min-w-5 " alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square border-full text-[8px] rounded-full">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setvisible(true)}
          src={menu_icon}
          className="w-5 cursor-pointer sm:hidden  "
          alt=""
        />
      </div>
      {/* sidebar for small screen */}
      <div
        className={`absolute top-0 bottom-0 right-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600 cursor-pointer">
          <div
            onClick={() => setvisible(false)}
            className="flex gap-4 items-center p-3"
          >
            <img src={dropdown_icon} className="h-4 rotate-180 " alt="" />
            <p>back</p>
          </div>
          {/* for navlink */}
          <NavLink
            className="py-2 pl-6 border"
            onClick={() => setvisible(false)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="py-2 pl-6 border"
            onClick={() => setvisible(false)}
            to="/collection"
          >
            collection
          </NavLink>
          <NavLink
            className="py-2 pl-6 border"
            onClick={() => setvisible(false)}
            to="/about"
          >
            about
          </NavLink>
          <NavLink
            className="py-2 pl-6 border"
            onClick={() => setvisible(false)}
            to="/contact"
          >
            contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
