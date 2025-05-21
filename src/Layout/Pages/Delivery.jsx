import React from 'react';
import { FaTruck, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const deliveryItems = [
  {
    icon: <FaClock className="text-5xl text-violet-600 mb-4" />,
    title: "Fast Delivery",
    description: "Get your order within 2-5 business days anywhere in Pakistan.",
  },
  {
    icon: <FaMapMarkerAlt className="text-5xl text-violet-600 mb-4" />,
    title: "Nationwide Coverage",
    description: "We deliver in cities, towns, and remote locations with equal efficiency.",
  },
  {
    icon: <FaTruck className="text-5xl text-violet-600 mb-4" />,
    title: "Trusted Logistics",
    description: "Shipped with TCS, Leopard, and Pakistan Post for secure delivery.",
  },
];

const Delivery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-purple-100 to-pink-100 py-16 px-4 font-[Montserrat]">
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-violet-100">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-violet-700 mb-12"
        >
          🚚 Delivery You Can Count On
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {deliveryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
              <div className="mt-4 inline-block px-3 py-1 bg-violet-100 text-violet-600 rounded-full text-sm font-medium">
                {index === 0 ? 'Fast' : index === 1 ? 'Everywhere' : 'Secure'}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Delivery;
