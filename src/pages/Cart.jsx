import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, currency, products, updateQuantity } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  // useEffect(() => {
  //     const tempData = [];
  //     for (const items of Object.values(cartItems)) {
  //         for (const [size, quantity] of Object.entries(items)) {
  //             if (quantity > 0) {
  //                 tempData.push({
  //                     _id: items._id, // Assuming items have an _id property
  //                     size: size,
  //                     quantity: quantity,
  //                 });
  //             }
  //         }

  //     }

  //     // You might want to do something with tempData here
  //     console.log(tempData);
  // }, [cartItems]);

  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      const item = cartItems[itemId];
      for (const size in item) {
        if (item[size] > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: item[size],
          });
        }
      }
    }

    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14 ">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"}></Title>
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  src={productData.image[0]}
                  alt=""
                  className="w-16 sm:w-20"
                />
                <div className="text-xs sm:text-lg font-medium">
                  <p>{productData.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                type="number"
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
                min={1}
                defaultValue={item.quantity}
                className="border max-w-20 px-1 sm:px-2 py-1"
                name=""
                id=""
              />
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                src={assets.bin_icon}
                className="w-4 mr-4 sm:w-5 cursor-pointer "
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450]">
          <CartTotal></CartTotal>
          <div className="w-full md:text-end mt-10 text-center">
            <Link to='/place-order'  className="bg-black text-white rounded py-3 text-sm active:bg-gray-700 px-8">PROCEED TO CHECKOUT</Link>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;
