import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Collection = () => {
  const { products } = useContext(ShopContext);
  console.log(products);
  const [filter, setFilter] = useState(false);

  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:gap-10 border-t ">
      {/* for filter  options */}
      <div className="min-w-60">
        <p  onClick={() => setFilter(!filter)}
         className="my-2 text-xl flex items-center cursor-pointer gap-2">
          Filter
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${filter ? "rotate-90" : ""}`}
            alt=""
          />
        </p>
        {/* category filter */}
        <div
          className={`border sm:block border-gray-300 pl-5 py-3 mt-6 ${
            filter ? " " : "hidden"
          }`}
        >
          <p>{`category's`}</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {/* 1 */}
            <p className="flex gap-2">
              <input
                className="w-3 "
                type="checkbox"
                name=""
                value={`MEN`}
                id=""
              />
              MEN
            </p>
            {/* 2 */}
            <p className="flex gap-2">
              <input
                className="w-3 "
                type="checkbox"
                name=""
                value={`WOMEN`}
                id=""
              />
              WOMEN
            </p>
            {/* 3 */}
            <p className="flex gap-2">
              <input
                className="w-3 "
                type="checkbox"
                name=""
                value={`KIDS`}
                id=""
              />
              KIDS
            </p>
          </div>
        </div>
        {/* sub category filter */}
        <div
          className={`border sm:block border-gray-300 pl-5 py-3 my-5 ${
            filter ? " " : "hidden"
          }`}
        >
          <p>{`type`}</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {/* 1 */}
            <p className="flex gap-2">
              <input
                className="w-3 "
                type="checkbox"
                name=""
                value={`Topwear`}
                id=""
              />
              Topwear
            </p>
            {/* 2 */}
            <p className="flex gap-2">
              <input
                className="w-3 "
                type="checkbox"
                name=""
                value={`BottomWare`}
                id=""
              />
              BottomWare
            </p>
            {/* 3 */}
            <p className="flex gap-2">
              <input
                className="w-3 "
                type="checkbox"
                name=""
                value={`Winterware`}
                id=""
              />
              Winterware
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
    </div>
  );
};

export default Collection;
