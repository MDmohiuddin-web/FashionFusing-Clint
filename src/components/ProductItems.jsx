import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";


const ProductItems = ({id,image,name,price}) => {
    // console.log(id)
    const {currency}=useContext(ShopContext);
    return (
        <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer" > 
        <div className="overflow-hidden">
            <img src={image[0]} alt="" className="hover:scale-110 transition ease-in-out duration-300" />
        </div>
        <p className="pt-3 pb-1 text-xs">{name}</p>
        <p className="text-gray-500 text-sm font-medium">{currency} {price}</p>
        </Link>
    );
};

export default ProductItems;