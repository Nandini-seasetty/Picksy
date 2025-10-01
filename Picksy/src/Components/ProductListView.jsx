import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const ProductListView = ({ product }) => {
  const navigate = useNavigate()
  const { addToCart } = useCart()

  return (
    <div className="space-y-4 mt-2 rounded-md">
      <div className="bg-gray-100 flex flex-col md:flex-row gap-5 md:gap-7 items-center md:items-start p-4 rounded-md">
        
        <img
          src={product?.images[0]}
          alt={product.title}
          className="h-40 w-40 md:h-60 md:w-60 object-contain rounded-md cursor-pointer"
          onClick={() => navigate(`/products/${product.id}`)}
        />

        <div className="space-y-2 w-full">
          <h1 className="font-bold text-lg md:text-xl line-clamp-3 hover:text-red-400">
            {product.title}
          </h1>
          <p className="font-semibold flex items-center text-base md:text-lg">
            Rs. <span className="text-2xl md:text-4xl">{Math.round(product.price*88)}</span>
          </p>
          <p className="text-sm text-gray-700">
            FREE delivery <span className="font-semibold">Fri, 18 Apr</span> <br />
            Or fastest delivery <span className="font-semibold">Tomorrow, 17 Apr</span>
          </p>
          <button
            onClick={() => addToCart(product)}
            className="bg-red-500 text-white px-4 py-2 rounded-md w-full md:w-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductListView
