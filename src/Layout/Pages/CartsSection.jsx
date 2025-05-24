import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../../Features/cartSlice'
import { FiTrash2, FiStar } from 'react-icons/fi'

const CartsSection = () => {
  const cartItems = useSelector(state => state.cart)
  const dispatch = useDispatch()

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0)

  // Helper: render rating stars filled based on rating (out of 5)
  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating - fullStars >= 0.5
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FiStar key={i} className="text-yellow-400 inline-block" />)
    }
    if (hasHalfStar) {
      stars.push(
        <FiStar
          key="half"
          className="text-yellow-400 inline-block"
          style={{ clipPath: 'inset(0 50% 0 0)' }}
        />
      )
    }
    while (stars.length < 5) {
      stars.push(
        <FiStar key={'empty' + stars.length} className="text-gray-300 inline-block" />
      )
    }
    return stars
  }

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-purple-50 to-violet-100 font-[Montserrat]">
      <h2 className="text-3xl font-bold text-center text-violet-700 mb-10">
        🛒 Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-gray-400 space-y-3 mt-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 opacity-50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 9m5-9v9m4-9v9m4-9l2 9"
            />
          </svg>
          <p className="text-lg font-medium">No items in cart yet</p>
        </div>
      ) : (
        <>
          <div className="max-w-5xl mx-auto space-y-6">
            {cartItems.map(item => (
              <div
                key={item.id}
                className="bg-white/90 backdrop-blur-md border border-purple-300 rounded-3xl p-5 shadow-lg flex items-center gap-6 hover:shadow-2xl transition duration-300"
              >
                {/* Image */}
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-28 w-28 object-contain rounded-lg border border-purple-200"
                />

                {/* Info */}
                <div className="flex-1 flex flex-col gap-1">
                  <h3 className="text-xl font-bold text-violet-900 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-purple-700 text-sm line-clamp-2">{item.description}</p>

                  {/* Category & Quantity */}
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide bg-purple-100 px-3 py-1 rounded-full select-none">
                      {item.category || 'General'}
                    </span>
                    <span className="text-purple-700 font-semibold text-sm bg-purple-200 px-3 py-1 rounded-full select-none">
                      Qty: 1
                    </span>
                  </div>

                  {/* Rating with stars */}
                  <div className="flex items-center mt-3 gap-2">
                    <div className="flex">{renderStars(item.rating || 4)}</div>
                    <span className="text-purple-700 font-semibold text-sm">
                      {item.rating ? item.rating.toFixed(1) : '4.0'} / 5.0
                    </span>
                  </div>

                  {/* Progress bar for rating */}
                  <div className="w-full bg-purple-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-violet-600 h-2 rounded-full"
                      style={{ width: `${((item.rating || 4) / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Price & Remove */}
                <div className="flex flex-col items-end gap-4">
                  <p className="text-2xl font-extrabold text-violet-900">
                    $ <span className="text-green-600">{item.price.toFixed(2)}</span>
                  </p>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full font-semibold transition duration-300 shadow-md"
                    aria-label={`Remove ${item.title} from cart`}
                  >
                    <FiTrash2 className="text-xl" />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total Price Summary */}
          <div className="max-w-5xl mx-auto mt-10 p-6 bg-purple-100 rounded-xl shadow-inner text-right text-xl font-bold text-violet-900">
            Total: $ <span className="text-green-700">{totalPrice.toFixed(2)}</span>
          </div>
        </>
      )}
    </div>
  )
}

export default CartsSection
