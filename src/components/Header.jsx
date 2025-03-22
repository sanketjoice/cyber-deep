import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-[1056px] mx-auto p-[8px] rounded-xl bg-white h-[54px] border border-[#E5E7EB]">
      <div className="max-w-[1056px] mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-[20px] ml-2 font-bold">
              <span className="text-black">Cyber</span>
              <span style={{ color: "#C00CF2" }}>Deep</span>
              <span className="text-red-600">360</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="font-medium hover:text-purple-600">
              Home
            </a>
            <div className="relative">
              <button className="flex items-center font-medium hover:text-purple-600 w-full text-left">
                Features
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div className="hidden mt-2 pl-4 border-l border-gray-200">
                <a
                  href="#"
                  className="block py-2 text-sm text-gray-700 hover:text-purple-600"
                >
                  Enterprise
                </a>
                <a
                  href="#"
                  className="block py-2 text-sm text-gray-700 hover:text-purple-600"
                >
                  Small Business
                </a>
                <a
                  href="#"
                  className="block py-2 text-sm text-gray-700 hover:text-purple-600"
                >
                  Government
                </a>
              </div>
            </div>
            <a href="#" className="font-medium hover:text-purple-600">
              Pricing
            </a>
            <div className="relative group">
              <button className="flex items-center font-medium hover:text-purple-600">
                Use Cases
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100"
                >
                  Enterprise
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100"
                >
                  Small Business
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100"
                >
                  Government
                </a>
              </div>
            </div>

            <div className="h-4 w-0.5 bg-[#D1D5DB]"></div>
            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#"
                className="px-[13p] py-[9px] w-[61px] h-[38px] text-black text-sm flex justify-center bg-white rounded-[6px]  border border-[#E5E7EB] hover:shadow-md"
              >
                Login
              </a>
              <a
                href="#"
                style={{ backgroundColor: "#C00CF2" }}
                className="px-[13px] py-[9px] w-[101px] h-[38px] text-white rounded-[6px] shadow-sm hover:shadow-md text-sm"
              >
                Try For Free
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 border-t pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="font-medium hover:text-purple-600">
                Home
              </a>
              <a href="#" className="font-medium hover:text-purple-600">
                Features
              </a>
              <a href="#" className="font-medium hover:text-purple-600">
                Pricing
              </a>
              <div className="relative">
                <button
                  className="flex items-center font-medium hover:text-purple-600 w-full text-left"
                  onClick={(e) => {
                    e.preventDefault();
                    const dropdown = e.currentTarget.nextElementSibling;
                    if (dropdown) {
                      dropdown.classList.toggle("hidden");
                    }
                  }}
                >
                  Use Cases
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div className="hidden mt-2 pl-4 border-l border-gray-200">
                  <a
                    href="#"
                    className="block py-2 text-sm text-gray-700 hover:text-purple-600"
                  >
                    Enterprise
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-sm text-gray-700 hover:text-purple-600"
                  >
                    Small Business
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-sm text-gray-700 hover:text-purple-600"
                  >
                    Government
                  </a>
                </div>
              </div>
              <div className="pt-4 border-t flex flex-col space-y-4">
                <a
                  href="#"
                  className="px-6 py-3 font-medium text-gray-800 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md text-center"
                >
                  Login
                </a>
                <a
                  href="#"
                  style={{ backgroundColor: "#C00CF2" }}
                  className="px-6 py-3 font-medium text-white rounded-xl shadow-sm hover:shadow-md text-xl text-center"
                >
                  Try For Free
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
