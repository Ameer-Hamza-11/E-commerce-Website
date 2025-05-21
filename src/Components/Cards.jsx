import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getApiData } from '../Api/api'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../Features/cartSlice'

const Cards = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart)

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: getApiData,
  })

  const isInCart = (id) => cartItems.some(item => item.id === id)

  const handleCartToggle = (product) => {
    if (isInCart(product.id)) {
      dispatch(removeFromCart(product.id))
    } else {
      dispatch(addToCart(product))
    }
  }

  if (isPending) return <p className="text-center text-xl py-10">Loading...</p>
  if (isError) return <p className="text-center text-red-600 font-semibold">Error: {error.message}</p>

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 font-[Montserrat]">
      {data.map(product => (
        <div
          key={product.id}
          className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-gray-200 p-5 flex flex-col"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-44 w-full object-contain mb-4"
          />

          <h2 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">
            {product.title}
          </h2>

          <p className="text-gray-600 text-sm mb-3 line-clamp-3">
            {product.description}
          </p>

          <p className="text-violet-600 font-extrabold text-xl mb-4">
            ${product.price}
          </p>

          <button
            onClick={() => handleCartToggle(product)}
            className={`mt-auto w-full py-2 rounded-full font-semibold shadow-sm transition duration-300
              ${isInCart(product.id)
                ? 'bg-red-500 hover:bg-red-600 text-white'
                : 'bg-violet-500 hover:bg-violet-600 text-white'
              }`}
          >
            {isInCart(product.id) ? 'Remove from Cart' : 'Add to Cart'}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Cards
