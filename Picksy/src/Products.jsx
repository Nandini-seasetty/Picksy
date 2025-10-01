import React, { useContext, useEffect, useState } from "react";
import { DataContext, getData } from "./context/DataContext";
import FilterSection from "./Components/FilterSection";
import Loading from "/public/assets/Loading.webm";
import ProductCard from "./Components/ProductCard";
import Pagination from "./Components/Pagination";
import notfound from "/public/assets/notfound.mp4"
import MobileFilter from "./Components/MobileFilter";
const Products = () => {
  const { data, fetchAllProducts } = useContext(DataContext);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([1, 5000000]);
  const [page,setPage]=useState(1)
  const [openFilter,setOpenFilter]=useState(false)

  useEffect(() => {
    fetchAllProducts();
    window.scrollTo(0,0)
  }, []);
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1)
    setOpenFilter(false)
  };
  const filteredData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item?.category.toLowerCase() === category.toLowerCase()) &&
      Math.round(item.price*88)>= priceRange[0] &&
      Math.round(item.price*88)<= priceRange[1]
  );
  console.log(filteredData)
  const pageHandler=(selectedPage)=>{
    setPage(selectedPage)
    window.scrollTo(0,0)
  }
  const dynamicPage=Math.ceil(filteredData?.length/16)
  return (
    <div className="max-w-6xl mx-auto px-4 mb-10">
      <MobileFilter openFilter={openFilter} setOpenFilter={setOpenFilter} search={search} setSearch={setSearch} priceRange={priceRange} setPriceRange={setPriceRange} category={category} setCategory={setCategory} handleCategoryChange={handleCategoryChange} />
      {data?.length > 0 ? (
         <>
          <div className='flex gap-10'>
              <FilterSection search={search} setSearch={setSearch} priceRange={priceRange} setPriceRange={setPriceRange} category={category} setCategory={setCategory} handleCategoryChange={handleCategoryChange} />
              {
                filteredData?.length > 0 ? (
                  <div className='flex flex-col items-center'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-7 mt-10'>
                      {
                        filteredData?.slice(page * 16 - 16, page * 16).map((product, index) => {
                        return <ProductCard key={index} product={product} />
                        })
                      }
                    </div>
                    <Pagination pageHandler={pageHandler} page={page} dynamicPage={dynamicPage} />
                  </div>
                      ) : (
                        <div className='flex justify-center items-center md:h-[400px] md:w-[500px] mt-20 mx-40 items-center justify-center'>                          
                              <video muted autoPlay loop>
                                <source src={notfound} type="video/webm" />
                              </video>
                        </div>
                      )
                    }
              </div>
            </>
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

export default Products;
