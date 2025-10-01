import React, { useEffect } from "react";
import { getData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const { data } = getData();
  const getUniqueCategory = (data) => {
    if (!data) return [];
    const categories = data.map((item) => item?.category).filter(Boolean); // get names only
    return ["All", ...new Set(categories)];
  };

  const categoryOnlyData = getUniqueCategory(data, "category");
  return (
    <div className="bg-[#101829]">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-center md:justify-around py-7 px-4">
        {categoryOnlyData.map((item) => {
          return (
            <div key={item.id}>
              <button
                onClick={() => navigate(`/category/${item}`)}
                className="uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white rounded-md px-3 py-1"
              >
                {item}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
