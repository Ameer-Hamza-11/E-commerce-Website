import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-violet-700 text-white py-10 mt-20 font-[Montserrat]">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">HamzCart</h2>
          <p className="text-sm text-gray-300">
            Get the best quality electronics and gadgets at unbeatable prices.
          </p>
        </div>

        {/* Updated Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-300">Deals</a></li>
            <li><a href="#" className="hover:text-gray-300">What's New</a></li>
            <li><a href="#" className="hover:text-gray-300">Delivery</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
            <li><a href="#" className="hover:text-gray-300">Shipping</a></li>
            <li><a href="#" className="hover:text-gray-300">Returns</a></li>
            <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-300 border-t border-gray-500 pt-5">
        © {new Date().getFullYear()} Hamza Store. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
