import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");

  return (
    <div>
      <form
        action=""
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
      >
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
            <p className="prata-regular text-3xl ">{currentState}</p>
            <hr  className="border-none h-[1.5px] w-8 bg-gray-800"/>

        </div>
       {currentState === "Login" ? "": <input type="text" name="" className="rounded w-full px-3 py-2 border border-gray-800 " placeholder="Name" id="" />}
        <input type="email" name="" className="rounded w-full px-3 py-2 border border-gray-800 " placeholder="Email" id="" />
        <input type="password" name="" className="rounded w-full px-3 py-2 border border-gray-800 " placeholder="Password" id="" />
        <div className="flex justify-between w-full text-sm mt-[-8px]">
            
            <Link className="cursor-pointer">Create account</Link>
            <Link className="cursor-pointer">Forgot your password?</Link>


        </div>
        <Link className="bg-black text-white rounded py-3 text-sm active:bg-gray-700 px-8">Login</Link>



      </form>
    </div>
  );
};

export default Login;
