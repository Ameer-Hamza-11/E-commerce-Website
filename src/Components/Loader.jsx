import React from 'react'

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-[60vh]">
      <div className="relative flex space-x-2">
        <div className="w-4 h-4 bg-violet-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-4 h-4 bg-violet-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-4 h-4 bg-violet-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  )
}

export default Loader
