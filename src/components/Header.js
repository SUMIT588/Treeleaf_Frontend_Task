import React, { useState } from "react";

import { Link } from "react-router-dom";

function Header() {
  const list = [
   
    {
      name: "Add details",
      url: "/",
    },
   
  ];

  // State to manage the visibility of navigation links
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            {/* Your logo or brand can go here */}
            <div className="text-white text-2xl font-bold">
               Logo
            </div>
          </div>
          <div className="md:hidden">
            {/* Hamburger icon to toggle navigation */}
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle navigation"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isNavOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className={`${isNavOpen ? "block" : "hidden"} md:block`}>
            <ul className="ml-4 flex  items-center  space-x-4">
              {list.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.url}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
