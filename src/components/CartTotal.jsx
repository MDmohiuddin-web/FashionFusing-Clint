import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { GetCartAmount, currency, delivery_Fee } = useContext(ShopContext);
  return (
    <div className="w-full ">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTAL"}></Title>
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency}
            {GetCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>shipping fee</p>
          <p>
            {currency}
            {delivery_Fee}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Total</p>
          <p>
            {currency}
            {GetCartAmount() === 0 ? 0 : GetCartAmount()+delivery_Fee}.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
