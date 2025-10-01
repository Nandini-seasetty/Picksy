import React, { useEffect } from "react";
import { getData } from "../context/DataContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Category from "./Category";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const { data, fetchAllProducts } = getData();
  console.log("Carousel Data:", data);
  const navigate=useNavigate()
  useEffect(() => {
    fetchAllProducts();
  }, []);

  const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-2 -translate-y-1/2 text-3xl text-white bg-purple-500 rounded-md p-3 cursor-pointer z-50"
      onClick={onClick}
    >
      &#10095;
    </div>
  );
};

// Prev Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-2 -translate-y-1/2 text-3xl text-white bg-purple-500 rounded-md p-3 cursor-pointer z-50"
      onClick={onClick}
    >
      &#10094;
    </div>
  );
};

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="overflow-y-hidden overflow-x-hidden">
      <Slider {...settings}>
        {data?.slice(0, 10).map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-r from-purple-400 via-purple-300 to-orange-200 -z-10"
          >
            <div className="flex flex-col md:flex-row gap-10 justify-center h-[600px] my-20 md:my-0 items-center px-4">
              <div className="md:space-y-6 space-y-3">
                <h3 className="text-red-500 font-semibold font-sans text-sm">
                  Powering Your World with the Best Products for Every Need.
                </h3>
                <h1 className="md:text-4xl text-2xl font-bold uppercase line-clamp-2 md:line-clamp-3 text-gray-800 md:w-[500px]">
                  {item.title}
                </h1>
                <p className="md:w-[500px] line-clamp-3 text-gray-600 pr-7">
                  {item.description}
                </p>
                <button className="bg-purple-700 hover:bg-purple-800 text-white px-3 py-2 rounded-md cursor-pointer mt-2"
                onClick={()=>navigate(`/products/${item.id}`)}>
                  Shop Now
                </button>
              </div>
              <div>
                <img
                  src={item.images?.[0]} 
                  alt={item.title}
                  className="rounded-full w-[400px] h-[400px] object-cover hover:scale-150 transition-all shadow-2xl shadow-red-500"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Category />
    </div>
  );
};

export default Carousel;
