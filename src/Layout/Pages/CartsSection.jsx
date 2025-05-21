import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../../Features/cartSlice'

const CartsSection = () => {
  const cartItems = useSelector(state => state.cart)
  const dispatch = useDispatch()

  return (
    <div className="p-8 min-h-screen  bg-gradient-to-br from-purple-50 to-violet-100 font-[Montserrat]">
      <h2 className="text-3xl font-bold text-center font-[Montserrat] text-violet-700 mb-10">
        🛒 Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No items in cart</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cartItems.map(item => (
            <div
              key={item.id}
              className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-5 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center text-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-32 w-32 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-violet-600 font-bold text-xl mb-4">
                Rs {item.price}
              </p>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-semibold transition duration-300"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CartsSection
