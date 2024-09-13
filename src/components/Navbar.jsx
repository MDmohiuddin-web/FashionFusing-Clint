import { NavLink } from "react-router-dom";
import logo from "../assets/frontend_assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-5">
      <img src={logo} className="w-36" alt="" />

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <li>
          <NavLink to="/" className="flex flex-col items-center gap-1">
            Home <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/collection" className="flex flex-col items-center gap-1">
          Collection <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
          About <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
          Contact <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
