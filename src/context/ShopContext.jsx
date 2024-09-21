import { createContext, useState } from "react";
import {products} from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const deliveryFee = 10;
  const [search,setSearch]=useState("");
  const [showSearch,setShowSearch]=useState(false);

  const value = { products, deliveryFee, currency,setSearch,search,showSearch,setShowSearch };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
