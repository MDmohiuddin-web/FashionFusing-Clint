import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import toast from "react-hot-toast";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const deliveryFee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId, size) => {
    if (size === "") {
      toast.error("Please select a size");
      return;
    }
    if (!size) {
      alert("Please select a size");
      return;
    } else {
      toast.success(
        `${products.find((item) => item._id === itemId).name} added to cart`
      );
    }
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  const removeFromCart = (itemId, size) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId][size] > 1) {
      cartData[itemId][size] -= 1;
    } else {
      delete cartData[itemId][size];
    }
    setCartItems(cartData);
  };

  // const getCartCount = () => {
  //   let count = 0;
  //   for (const items in cartItems) {
  //     for (const item in cartItems[items]) {
  //       try {
  //         if (cartItems[item][items] > 0) {
  //           count += cartItems[items][item];
  //         }
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     }
  //   }
  //   return count;
  // };
  const getCartCount = () => {
    let count = 0;
    for (const items of Object.values(cartItems)) {
      for (const item of Object.values(items)) {
        try {
          if (item > 0) {
            count += item;
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
    return count;
  };
  
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const value = {
    products,
    deliveryFee,
    currency,
    setSearch,
    search,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    removeFromCart,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
