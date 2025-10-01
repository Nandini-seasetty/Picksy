import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "/assets/loading.webm";
import { ChevronLeft } from "lucide-react";
import ProductListView from "./Components/ProductListView";
const CategoryProduct = () => {
  const params = useParams();
  const category = params.category;
  const [searchData, setSearchData] = useState([]);
  const navigate = useNavigate();
  const getFilterData = async () => {
    try {
      if (category.toLowerCase() === "all") {
        navigate("/products")
      } else {
        const res = await axios.get(
          `https://dummyjson.com/products/category/${category}`
        );
        setSearchData(res.data.products);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setSearchData([]);
    }
  };
  useEffect(() => {
    getFilterData();
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {searchData.length > 0 ? (
        <div className="max-w-6xl mx-auto mt-10 mb-10 px-4">
          <button
            onClick={() => navigate("/")}
            className="bg-gray-800 mb-5 text-white px-3 py-1 rounded-md flex gap-1 items-ceter"
          >
            <ChevronLeft />
            Back
          </button>
          {searchData?.map((product) => {
            return <ProductListView key={product.id} product={product} />;
          })}
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

export default CategoryProduct;
