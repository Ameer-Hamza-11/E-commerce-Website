import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getApiData } from '../Api/api'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../Features/cartSlice'
import Loader from './Loader'
import { useCookies } from 'react-cookie'

const Cards = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart)
  const [cookies, setCookie] = useCookies(['carts'])
  const [pageNumber, setPageNumber] = useState(1)
  const limit = 5

  const getParsedCookie = () => {
    try {
      const raw = cookies.carts
      if (typeof raw === 'string') {
        return JSON.parse(raw)
      } else if (Array.isArray(raw)) {
        return raw
      } else if (typeof raw === 'object') {
        return [raw]
      }
      return []
    } catch (error) {
      console.log('Invalid cookie format:', error);
      return [];
    }
  }

  const isInCart = (id) => cartItems.some(item => item.id === id)

  const handleCartToggle = (product) => {
    const existingCart = getParsedCookie()

    if (isInCart(product.id)) {
      dispatch(removeFromCart(product.id))
      const updatedCart = existingCart.filter((item) => item.id !== product.id)
      setCookie('carts', JSON.stringify(updatedCart), { path: '/', maxAge: 86400 })
    } else {
      dispatch(addToCart(product))
      const updatedCart = [...existingCart, product]
      setCookie('carts', JSON.stringify(updatedCart), { path: '/', maxAge: 86400 })
    }
  }

  useEffect(() => {
    console.log('Current Cookie (raw):', cookies.carts);
  }, [cookies.carts])

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['products', pageNumber],
    queryFn: () => getApiData(pageNumber),
    keepPreviousData: true,
  })

  if (isPending) return <Loader />
  if (isError) return <p className="text-center text-red-600 font-semibold">Error: {error.message}</p>

  const totalpages = Math.ceil(data.total / limit)

  // Function to render stars based on rating (max 5 stars)
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const halfStar = rating - fullStars >= 0.5
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)
    const stars = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(<svg key={"full" + i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 inline" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.286 3.973c.3.922-.755 1.688-1.538 1.118l-3.388-2.462a1 1 0 00-1.176 0l-3.388 2.462c-.783.57-1.838-.196-1.538-1.118l1.286-3.973a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.973z" /></svg>)
    }
    if (halfStar) {
      stars.push(<svg key="half" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 inline" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.286 3.973c.3.922-.755 1.688-1.538 1.118l-3.388-2.462a1 1 0 00-.588-.196V2.927z" /></svg>)
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<svg key={"empty" + i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300 inline" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.286 3.973c.3.922-.755 1.688-1.538 1.118l-3.388-2.462a1 1 0 00-1.176 0l-3.388 2.462c-.783.57-1.838-.196-1.538-1.118l1.286-3.973a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.973z" /></svg>)
    }

    return stars
  }

  return (
    <div className="p-6 font-[Montserrat] bg-gradient-to-b from-purple-50 to-purple-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data.products?.map(product => (
          <div
            key={product.id}
            className="bg-white/90 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 border border-purple-300 p-6 flex flex-col"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-44 w-full object-contain mb-4 rounded-lg border border-purple-200"
            />

            <h2 className="text-purple-900 text-lg font-extrabold mb-2 line-clamp-2">
              {product.title}
            </h2>

            {/* Rating Stars */}
            <div className="mb-2">
              {renderStars(product.rating)}
              <span className="ml-2 text-sm text-purple-700 font-semibold">({product.rating.toFixed(1)})</span>
            </div>

            <p className="text-purple-700 text-sm mb-3 line-clamp-3">
              {product.description}
            </p>

            <p className="mb-5 font-extrabold text-xl text-purple-800 flex items-center gap-1">
              <span className="text-green-500 text-2xl font-bold">$</span>
              <span>{product.price}</span>
            </p>

            <button
              onClick={() => handleCartToggle(product)}
              className={`mt-auto w-full py-2 rounded-full font-semibold shadow-sm transition duration-300
                ${isInCart(product.id)
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-purple-600 hover:bg-purple-700 text-white'
                }`}
            >
              {isInCart(product.id) ? 'Remove from Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-10 gap-4 text-purple-800 font-semibold">
        <button
          onClick={() => setPageNumber(pageNumber - 1)}
          disabled={pageNumber === 1}
          className="px-4 py-2 rounded-lg bg-purple-300 hover:bg-purple-400 disabled:bg-purple-200 disabled:cursor-not-allowed transition"
        >
          Prev
        </button>
        <span>
          Page <strong>{pageNumber}</strong> of <strong>{totalpages}</strong>
        </span>
        <button
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={pageNumber === totalpages}
          className="px-4 py-2 rounded-lg bg-purple-300 hover:bg-purple-400 disabled:bg-purple-200 disabled:cursor-not-allowed transition"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Cards
