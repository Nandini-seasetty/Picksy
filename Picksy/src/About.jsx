import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8">
        <h1 className="text-4xl font-bold  text-center">About Picksy</h1>

        <p className="text-gray-700 text-lg">
          Welcome to <span className="font-semibold text-red-600">Picksy</span>, your ultimate destination for a wide range of products, from trendy fashion and stylish footwear to cutting-edge electronics and home essentials. Whatever you’re looking for, Picksy is here to make your shopping experience effortless, fun, and rewarding.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Our Mission</h2>
          <p className="text-gray-700 text-base">
            At Picksy, our mission is to bring convenience, variety, and quality to every shopper’s fingertips. We strive to connect you with products that enhance your lifestyle — whether it’s the latest tech, fashionable apparel, cozy furniture, or everyday essentials — all at competitive prices and delivered straight to your door.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Why Choose Picksy?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Top-quality products from trusted brands</li>
            <li>Friendly customer support, ready to assist you anytime</li>
            <li>Fast, secure, and reliable shipping</li>
            <li>Easy returns and hassle-free shopping experience</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Our Vision</h2>
          <p className="text-gray-700 text-base">
            We envision a world where online shopping is simple, reliable, and enjoyable for everyone. Picksy is committed to curating the best products across multiple categories, making it easy for you to discover exactly what you need — all in one place.
          </p>
        </div>

        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold text-red-600 mb-2">Join the Picksy Family</h3>
          <p className="text-gray-700 mb-4">
           Whether you’re a trendsetter, a home improver, a tech lover, or just looking for something practical and stylish, Picksy has something for everyone. Explore, shop, and enjoy the convenience of a store that truly has it all.
          </p>
         <Link to={'/products'}><button className="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition duration-300">
            Start Shopping
          </button></Link> 
        </div>
      </div>
    </div>
  );
};

export default About;