import React, { useContext } from "react";
import { DataContext, getData } from "../context/DataContext";

const FilterSection = ({ search, setSearch, priceRange, setPriceRange, category,setCategory,handleCategoryChange}) => {
  const { categoryOnlyData} = getData();

  return (
    <div className="bg-gray-100 mt-10 p-4 rounded-md h-max hidden md:block">

      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        value={search} 
        className="bg-white p-2 rounded-md border-gray-400 border-2 w-full"
      />

      <h1 className="mt-5 font-semibold text-xl">Category</h1>
      <div className="flex flex-col gap-2 mt-3">
        {categoryOnlyData?.map((item) => (
          <div key={item.id} className="flex gap-2 items-center">
            <input
              type="radio"
              name={item}
              checked={category === item}
              value={item}
              onChange={handleCategoryChange}
            />
            <label className="cursor-pointer uppercase">{item}</label>
          </div>
        ))}
      </div>

      {/* <h1 className="mt-5 font-semibold text-xl">Brand</h1>
      <div className="flex flex-col gap-2 mt-3">
        {brandOnlyData?.map((item, index) => (
          <div key={index} className="flex gap-2 items-center">
            <input type="checkbox" id={`brand-${index}`} />
            <label htmlFor={`brand-${index}`} className="cursor-pointer uppercase">
              {item}
            </label>
          </div>
        ))}
      </div> */}

      <h1 className="mt-5 font-semibold text-xl mb-3">Price Range</h1>
      <div className="flex flex-col gap-2 mt-3">
        <label>
          Price Range: Rs.{priceRange[0]} - Rs.{priceRange[1]}
        </label>
        <input
          type="range"
          min="1"
          max="5000000"
          step="100"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
        />
      </div>

      <button
        className="bg-red-500 text-white rounded-md px-3 py-1 mt-5"
        onClick={() => {
          setSearch("");
          setCategory("All");
          setPriceRange([1, 50000]);
        }}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSection;
