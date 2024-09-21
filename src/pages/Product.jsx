import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Product = () => {
  const { productId } = useParams();
  console.log(productId);
  const { products, currency } = useContext(ShopContext);
  const [ProductData, setProductData] = useState(false);

  const [quantity, setQuantity] = useState('');

  const [image, setImage] = useState("");



  const fetchProduct = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        console.log(item);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProduct();
  }, [productId]);

  return ProductData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 ">
      {/* for product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* for product image */}
        <div className="flex flex-col-reverse gap-3 sm:flex-row flex-1 ">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll sm:w-[18.7%] w-full gap-2 justify-between sm:justify-normal ">
            {ProductData?.image.map((item, index) => {
              return (
                <img
                  onClick={() => setImage(item)}
                  key={index}
                  src={item}
                  alt=""
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer "
                />
              );
            })}
          </div>
          <div className="w-full sm:w-[80%] ">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        </div>
        {/* for product information */}

        <div className="flex-1">
          <h1>{ProductData?.name}</h1>
          <div className="flex items-center gap-1 mt-2 ">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p> (122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {ProductData?.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5 ">
            {" "}
            {ProductData?.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {ProductData?.sizes.map((item, index) => {
                return (
                  <button onClick={() => setQuantity(item)}
                    key={index}
                    className={`border py-2 px-4 bg-gray-100 rounded ${item === quantity ? "border-orange-500" : ""}`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
