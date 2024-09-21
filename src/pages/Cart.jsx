import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Cart = () => {
  const { cartItems, currency, products } = useContext(ShopContext);

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
        {
            cartData.map((item) => {
                const product = products.find((product) => product._id === item._id);
                return (
                    <div key={item._id} className="flex justify-between items-center">
                        <div className="flex items-center">
                            <img src={product.image} alt={product.name} className="w-20 h-20 object-cover mr-4" />
                            <div>
                                <p className="text-lg font-semibold">{product.name}</p>
                                <p className="text-gray-600">Size: {item.size}</p>
                                <p className="text-gray-600">Quantity: {item.quantity}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-semibold">
                                {currency}
                                {product.price * item.quantity}
                            </p>
                        </div>
                    </div>
                );
            })
        }
      </div>
    </div>
  );
};

export default Cart;
