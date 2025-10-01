import React, { useState } from "react";

const ProductCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full md:w-1/2 mx-auto">
      <img
        src={images[currentIndex]}
        alt={`Product ${currentIndex}`}
        className="w-full h-[400px] p-2 object-cover rounded-2xl"
      />
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        &#10095;
      </button>

      <div className="flex gap-2 mt-3 justify-center">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`thumb ${index}`}
            className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${
              index === currentIndex ? "border-red-500" : "border-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
