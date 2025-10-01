import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products?limit=1000");
      setData(res.data.products); // save products in state
      console.log(res.data.products);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(data)
  const getUniqueCategory = (data) => {
    const categories = data.map((item) => item?.category);
    console.log(categories)
    return ["All", ...new Set(categories)];
  };

  const categoryOnlyData = getUniqueCategory(data);

  return (
    <DataContext.Provider
      value={{ data, setData, fetchAllProducts, categoryOnlyData }}    >
      {children}
    </DataContext.Provider>
  );
};

export const getData = () => useContext(DataContext);
