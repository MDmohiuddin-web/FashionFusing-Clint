import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItems from "./ProductItems";
import Title from "./Title";


const RelatedProduct = ({category,subcategory}) => {

const {products}=useContext(ShopContext);
const [related,setRelated]=useState([]);


useEffect(()=>{
    if (products.length > 0) {
        let productCopy=products.slice()
        productCopy=productCopy.filter((item)=>item.category===category && item.subcategory===subcategory);
        // console.log(productCopy.slice(0,5));
        setRelated(productCopy.slice(0,5));
        
    }
},[products])

    return (
        <div className="my-24">
            <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"RELATED"} text2={"PRODUCTS"}></Title>
        
      </div>
      {/* for products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((product) => (
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

            
        </div>
    );
};

export default RelatedProduct;