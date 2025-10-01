import React from "react";
import { useCart } from "./context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuNotepadText } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { useUser } from "@clerk/clerk-react";
import emptyCart from "/assets/emptyCart.jpg";
import { useNavigate } from "react-router-dom";
const Cart = ({ location, getLocation }) => {
  const { cartItem, updateQuantity, deleteItem } = useCart();
  const { user } = useUser();
  console.log(user);
  const totalPrice = cartItem.reduce(
    (total, item) => total + Math.round(item.price * item.quantity *88),
    0
  );
  const navigate = useNavigate();
  return (
    <div className="mt-10 max-w-6xl mx-auto mb-5 px-4 md:px-0">
      {cartItem?.length > 0 ? (
        <div>
          <h1 className="text-2xl font-bold">My Cart ({cartItem.length})</h1>
          <div>
            <div className="mt-10">
              {cartItem.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="bg-gray-100 p-5 rounded flex items-center justify-between mt-3 w-full"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={Array.isArray(item.images) ? item.images[0] : item.images}
                        alt={item.title}
                        className="w-20 h-20 rounded-md"
                      />
                      <div>
                        <h1 className="md:w-[300px] line-clamp-2 ">
                          {item.title}
                        </h1>
                        <p className="text-red-500 font-semibold text-lg">
                          Rs.{Math.round(item.price*88)}
                        </p>
                      </div>
                    </div>
                    <div className="bg-red-500 text-white flex gap-4 p-2 rounded-md font-bold text-xl">
                      <button
                        onClick={() =>
                          updateQuantity( item.id, "Decrease")
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, "Increase")
                        }
                      >
                        +
                      </button>
                    </div>
                    <span className="hover:bg-white/60 transition-all rouunded-full p-3 hover:shadow-2xl">
                      <FaRegTrashAlt
                        onClick={() => deleteItem(item.id)}
                        className="text-red-500 text-2xl cursor-pointer"
                      />
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20">
              <div className="bg-gray-100 rounded-md p-7 mt-4 space-y-2">
                <h1 className="text-gray-800 font-bold text-xl">
                  Delivery Info
                </h1>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="">Full Name</label>
                  <input
                    type="text"
                    value={user?.fullName}
                    placeholder="Enter your name"
                    className="p-2 rounded-md"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="">Address</label>
                  <input
                    type="text"
                    value={location.city}
                    placeholder="Enter your address"
                    className="p-2 rounded-md"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="">State</label>
                    <input
                      type="text"
                      value={location.principalSubdivision}
                      placeholder="Enter your state"
                      className="p-2 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="">PinCode</label>
                    <input
                      type="text"
                      placeholder="Enter your pincode"
                      className="p-2 rounded-md"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <div className="flex flex-col space-y-1 w-full md:w-1/2">
                    <label htmlFor="">Country</label>
                    <input
                      type="text"
                      value={location?.countryName || ""}
                      placeholder="Enter your country"
                      className="p-2 rounded-md w-full"
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col space-y-1 w-full md:w-1/3">
                    <label htmlFor="">Phone No.</label>
                    <input
                      type="text"
                      placeholder="Enter your phone number"
                      className="p-2 rounded-md w-full"
                    />
                  </div>
                </div>

                <button className="bg-red-500 text-white rounded-md px-3 py-1 mt-3">
                  Submit
                </button>
                <div className="flex items-center justify-center w-full text-gray-700">
                  ---------OR---------
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={getLocation}
                    className="bg-red-500 text-white px-3 py-1 mt-3 rounded-md"
                  >
                    Detect my location
                  </button>
                </div>
              </div>
              <div className="bg-white border border-gray-100 shadow-xl rounded-md p-7 mt-4 space-y-2 h-max">
                <h1 className="text-xl font-bold text-gray-800">
                  Bill Details
                </h1>
                <div className="flex justify-between items-center">
                  <h1 className="flex gap-1 items-center text-gray-700">
                    <span>
                      <LuNotepadText />
                    </span>
                    Items total
                  </h1>
                  <p>Rs. {totalPrice}</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="flex gap-1 items-center text-gray-700">
                    <span>
                      <MdDeliveryDining />
                    </span>
                    Delivery Charge
                  </h1>
                  <p className="text-red-500 font-semibold">
                    <span className="text-gray-600 line-through">Rs.100</span> FREE
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="flex gap-1 items-center text-gray-700">
                    <span>
                      <GiShoppingBag />
                    </span>
                    Handling Charge
                  </h1>
                  <p className="text-red-500 font-semibold">Rs.50</p>
                </div>
                <hr className="text-gray-200 mmt-2" />
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-lg">Grand Total</h1>
                  <p>RS.{totalPrice + 50}</p>
                </div>
                <div>
                  <h1 className="font-semibold text-gray-700 mb-3 mt-7 ">
                    Apply Promo Code
                  </h1>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="p-2 rounded-md w-full"
                    />
                    <button className="hover:bg-gray/60 transition-all rouunded-full p-3 hover:shadow-xl">
                      Apply
                    </button>
                  </div>
                </div>
                <button className="bg-red-500 text-white rounded-md px-3 py-2 w-full mt-3">
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3 justify-center items-center h-[500px]">
          <h1 className="text-red-500/80 font-bold text-4xl text-muted">
            Oh no! Your cart is empty.
          </h1>
          <img src={emptyCart} className="w-[300px]" />
          <button
            onClick={() => navigate("/products")}
            className="bg-red-500 text-white px-3 py-2 rounded-md"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
