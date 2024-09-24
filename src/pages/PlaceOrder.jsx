import { useState } from "react";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between sm:pt-14 min-h-[80vh] border-t">
      {/* left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px] ">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"}></Title>
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            name=""
            className="px-3.5 py-1.5 w-full rounded border-gray-300 border"
            placeholder=" First Name  "
            id=""
          />
          <input
            type="text"
            name=""
            className="px-3.5 py-1.5 w-full rounded border-gray-300 border"
            placeholder="Last Name  "
            id=""
          />
        </div>
        <input
          type="email"
          name=""
          className="px-3.5 py-1.5 w-full rounded border-gray-300 border"
          placeholder="Email  "
          id=""
        />
        <input
          type="email"
          name=""
          className="px-3.5 py-1.5 w-full rounded border-gray-300 border"
          placeholder="Street "
          id=""
        />
        <div className="flex gap-3">
          <input
            type="text"
            name=""
            className="px-3.5 py-1.5 w-full rounded border-gray-300 border"
            placeholder=" City  "
            id=""
          />
          <input
            type="text"
            name=""
            className="px-3.5 py-1.5 w-full rounded border-gray-300 border"
            placeholder="State  "
            id=""
          />
        </div>

        <div className="flex gap-3">
          <input
            type="number"
            name=""
            className="px-3.5 py-1.5 w-full rounded border-gray-300 border"
            placeholder=" Zip Code  "
            id=""
          />
          <input
            type="text"
            name=""
            className="px-3.5 py-1.5 w-full rounded border-gray-300 border"
            placeholder="Country  "
            id=""
          />
        </div>

        <input
          type="tel"
          name=""
          className="px-3.5 py-1.5 w-full rounded border-gray-300 border"
          placeholder="Phone "
          id=""
        />
        {/* <input type="submit" value="Continue" className="bg-black text-white px-3.5 py-1.5 w-full rounded border-gray-300 border" /> */}
      </div>
      {/* right side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal></CartTotal>
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"}></Title>
          {/* this is for payment method */}
          <div className="flex gap-3 flex-col lg:flex-row uppercase">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400 " : ""
                }`}
              ></p>
              <img src={assets.stripe_logo} className="h-5 mx-4 " alt="" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-400 " : ""
                }`}
              ></p>
              <img src={assets.razorpay_logo} className="h-5 mx-4 " alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400 " : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                Cash On Delivery
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <Link to={'/order'} className="bg-black text-white rounded py-3 text-sm active:bg-gray-700 px-8">PLACE ORDER</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
