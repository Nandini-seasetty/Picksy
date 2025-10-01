import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "/assets/loading.webm";
import BreadCrums from "./Components/BreadCrums";
import { SiMg } from "react-icons/si";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "./context/CartContext";
import ProductCarousel from "./Components/ProductCarousel";
import { AiOutlineStar } from "react-icons/ai";
const SingleProduct = () => {
  const params = useParams();
  console.log(params);
  const [singleProduct, setSingleProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/${params.id}`
      );
      console.log(res.data);
      setSingleProduct(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);
  return (
    <div>
      {singleProduct ? (
        <div className="px-4 pb-4 md:px-0">
          <BreadCrums title={singleProduct.title} />
          <div className="max-w-6xl mx-automd:p-6 grid grid-cols-1 md:grid-cols-2 gap-10 mx-10">
            <div className="w-full">
              <ProductCarousel images={singleProduct.images} />
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="md:text-3xl text-xl font-bold text-gray-800">
                {singleProduct.title}
              </h1>
              <div className="text-gray-700">
                {singleProduct.brand?.toUpperCase()}/
                {singleProduct?.category.toUpperCase()}
              </div>
              <div className="flex gap-4">
                <span className="text-xl text-red-500 font-bold">
                  Rs. {Math.round(singleProduct.price * 88)}
                </span>
                <span className="text-white bg-red-500 rounded-md px-3 py-1 font-bold">
                  {Math.round(singleProduct.discountPercentage)}% off
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                M.R.P.:{" "}
                <span className="line-through">
                  Rs.
                  {Math.round(
                    ( (singleProduct.price*88)/(1-singleProduct.discountPercentage/100)
                  ))}
                </span>
              </p>
              <p className="text-gray-600">{singleProduct.description}</p>
              {/* <div className='flex items-center gap-4'>
                        <label htmlFor='' className='text-sm font-medium text-gray-700'>Quantity:</label>
                        <input type='number' min={1} value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className='w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500'/>
                      </div>                   */}
              <div className="flex gap-2 tems-center">
                {singleProduct.tags.map((item) => (
                  <span className="text-black bg-gray-200 rounded-md px-2">{item}</span>
                ))}
              </div>
              <span className="flex gap-1 items-center font-semibold">
                <AiOutlineStar />
                {singleProduct.rating} out of 5
              </span>
              <div className="flex gap=4 mt-4">
                <button
                  onClick={() => addToCart(singleProduct)}
                  className="flex gap-2 text-lg bg-red-500 text-white font-bold rounded-md px-2 py-1"
                >
                  <IoCartOutline className="w-[30px] h-[30px]" />
                  Add to Cart
                </button>
              </div>
              
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[400px]">
          <video muted autoPlay loop>
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
