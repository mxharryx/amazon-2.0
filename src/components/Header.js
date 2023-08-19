/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Header = () => {
    return (
        <header className="bg-amazon_blue p-4 flex items-center justify-between">
          {/* Logo */}
          <img
            className="w-24 object-contain cursor-pointer"
            src="/amazon.png"
            alt="Amazon Logo"
          />
    
          {/* Search Bar */}
          <input
            type="text"
            className="flex-grow px-2 py-1 rounded-l-md border border-gray-600 focus:outline-none"
            placeholder="Search for products..."
          />
          <button className="p-2 bg-yellow-400 rounded-r-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Search icon */}
            </svg>
          </button>
    
          {/* Navigation */}
          <div className="flex items-center space-x-4 text-black">
            <div className="cursor-pointer">Hello, Sign In</div>
            <div className="cursor-pointer">Returns</div>
            <div className="cursor-pointer">Orders</div>
            <div className="cursor-pointer">Cart</div>
          </div>
        </header>
      );
};

export default Header;
