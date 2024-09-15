import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItems from "../components/ProductItems";


const Collection = () => {
  const { products } = useContext(ShopContext);
  // console.log(products);
  const [filter, setFilter] = useState(false);
  // this is filter products
  const [filterProducts, setFilterProducts] = useState([]);
  // for filter  options
  const [Categories, setCategories] = useState([]);
  const [Subcategory, setSubcategory] = useState([]);
  // for sortType
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (Categories.includes(e.target.value)) {
      setCategories((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategories((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (Subcategory.includes(e.target.value)) {
      setSubcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubcategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
    if (Categories.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        Categories.includes(item.category)
      );
    }
    if (Subcategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        Subcategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productsCopy);
  };

  const sortProducts = () => {
    let FilterProductsCopy = products.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(FilterProductsCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(FilterProductsCopy.sort((a, b) => b.price - a.price));
        break;
      case "relevant":
        // Assuming you have a way to determine relevance, apply that sorting logic here
        setFilterProducts(FilterProductsCopy); // Placeholder for relevance sorting
        break;
      default:
        setFilterProducts(FilterProductsCopy); // Default case to handle any other sort types
        break;
    }
  };
  

  useEffect(() => {
    applyFilter();
    // console.log(Categories, "category");
    // console.log(Subcategory, "Subcategory");
  }, [Categories, Subcategory]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  // don't need this useEffect now
  // useEffect(() => {
  //   setFilterProducts(products);
  //   console.log(filterProducts, "filterProducts");
  // }, [products]);

  return (<>
    <div className="flex flex-col gap-1 sm:flex-row sm:gap-10 border-t ">
      
      {/* for filter  options */}
      <div className="min-w-60">
        <p
          onClick={() => setFilter(!filter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
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
                value={`Men`}
                onChange={toggleCategory}
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
                value={`Women`}
                onChange={toggleCategory}
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
                value={`Kids`}
                onChange={toggleCategory}
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
                onChange={toggleSubCategory}
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
                onChange={toggleSubCategory}
                className="w-3 "
                type="checkbox"
                name=""
                value={`Bottomwear`}
                id=""
              />
              BottomWare
            </p>
            {/* 3 */}
            <p className="flex gap-2">
              <input
                onChange={toggleSubCategory}
                className="w-3 "
                type="checkbox"
                name=""
                value={`Winterwear`}
                id=""
              />
              Winterware
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"all "} text2={"collections "}></Title>
          {/* products  sort*/}
          <select
            className="border-2 border-gray-300 text-sm px-2 capitalize"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* products  mapping */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((product) => (
            <ProductItems
              key={product._id}
              id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div></>
  );
};

export default Collection;
