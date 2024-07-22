import React from 'react'

const Navbar = () => {
  return (
    <div>
    <header className="pb-6 bg-[#1480c9] lg:pb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex">
              <img
                className="w-auto h-24 lg:h-10"
                src="/images/woodside.png"
                alt=""
              />
            </a>
          </div>
  
          <button
            type="button"
            className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            <svg
              className="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            </svg>
  
            <svg
              className="hidden w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
  
          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <a
              href="#"
              title=""
              className="text-sm font-medium text-white transition-all duration-200 hover:text-blue-300 focus:text-blue-300"
            >
              About
            </a>
  
            <a
              href="#"
              title=""
              className="text-sm font-medium text-white transition-all duration-200 hover:text-blue-300 focus:text-blue-300"
            >
              Our Services
            </a>
  
            <a
              href="#"
              title=""
              className="text-sm font-medium text-white transition-all duration-200 hover:text-blue-300 focus:text-blue-300"
            >
              Our Angels
            </a>
  
            <a
              href="#"
              title=""
              className="text-sm font-medium text-white transition-all duration-200 hover:text-blue-300 focus:text-blue-300"
            >
              Stories
            </a>
            <a
              href="#"
              title=""
              className="text-sm font-medium text-white transition-all duration-200 hover:text-blue-300 focus:text-blue-300"
            >
              Downloads
            </a>
            <a
              href="#"
              title=""
              className="text-sm font-medium text-white transition-all duration-200 hover:text-blue-300 focus:text-blue-300"
            >
              Leave a bequest
            </a>
          </div>
  
          <a
            href="#"
            title=""
            className="items-center justify-center hidden px-5 py-2 ml-10 text-sm font-semibold text-blue-500 transition-all duration-200 bg-white border border-transparent rounded-md lg:inline-flex hover:bg-blue-300 focus:bg-blue-700"
            role="button"
          >
            Support us
          </a>
        </nav>
  
        <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
          <div className="flow-root">
            <div className="flex flex-col px-6 -my-2 space-y-1">
              <a
                href="#"
                title=""
                className="inline-flex py-2 text-sm font-medium text-white transition-all duration-200 hover:text-blue-300 focus:text-blue-300"
              >
                Features
              </a>
  
              <a
                href="#"
                title=""
                className="inline-flex py-2 text-sm font-medium text-white transition-all duration-200 hover:text-blue-300 focus:text-blue-300"
              >
                Solutions
              </a>
  
              <a
                href="#"
                title=""
                className="inline-flex py-2 text-sm font-medium text-white transition-all duration-200 hover:text-blue-300 focus:text-blue-300"
              >
                Resources
              </a>
  
              <a
                href="#"
                title=""
                className="inline-flex py-2 text-sm font-medium text-white transition-all duration-200 hover:text-blue-300 focus:text-blue-300"
              >
                Pricing
              </a>
            </div>
          </div>
  
          <div className="px-6 mt-6">
            <a
              href="#"
              title=""
              className="inline-flex justify-center px-6 py-2 text-sm font-semibold text-white transition-all duration-200 bg-blue-300 border border-transparent rounded-md items-center hover:bg-blue-700 focus:bg-blue-700"
              role="button"
            >
              Get started now
            </a>
          </div>
        </nav>
      </div>
    </header>
  </div>
  
  )
}

export default Navbar