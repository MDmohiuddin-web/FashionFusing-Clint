import CartTotal from "../components/CartTotal";
import Title from "../components/Title";

const PlaceOrder = () => {
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
            <div className="flex gap-3 flex-col lg:flex-row">
                

            </div>
        </div>
      </div>




    </div>
  );
};

export default PlaceOrder;
