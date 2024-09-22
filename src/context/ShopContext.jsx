import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import toast from "react-hot-toast";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_Fee = 10;
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

  const updateQuantity = (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    // toast.success(
    //   `${products.find((item) => item._id === itemId).name} cart updated`
    // );

    setCartItems(cartData);
  };

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


  const GetCartAmount = () => {
    let totalAmount = 0;
    for (const items of Object.values(cartItems)) {
      let iteminfo = products.find((item) => item._id === items);
      if (iteminfo) {
        for (const item in cartItems[items]) {
          try {
            if (cartItems[items][item] > 0) {
              totalAmount += iteminfo.price * cartItems[items][item];
            }
          } catch (err) {
            console.log(err);
          }
        }
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const value = {
    products,
    delivery_Fee,
    currency,
    setSearch,
    search,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    GetCartAmount,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
