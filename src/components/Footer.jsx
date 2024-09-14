import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*  */}
        <div>
          <Link to={"/"}>
            <img src={assets.logo} className="mb-5 w-32" alt="" />
          </Link>
          <p className="w-full md:w-2/3 text-gray-600 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        {/*  */}
        <div className="">
          <p className="text-xl font-medium mb-5 ">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="">
          <p className="text-xl font-medium mb-5 ">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              
              <a href="tel:+8801865540885">+88 01865540885</a>
            </li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>
              <a href="mailto:mohiu5204@gmail.com">mohiu5204@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="border-gray-300" />
        <p className="py-5 text-sm text-center">© 2024 - All right reserved by Mohi uddin</p>
      </div>

    </div>
  );
};

export default Footer;
