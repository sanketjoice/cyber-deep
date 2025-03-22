import React from "react";
import payment from "../assets/payms.png";
import social from "../assets/social.png";
const BenefitsTechnologySection = () => {
  return (
    <div className="bg-[#f7f9f8]  py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-semibold text-center text-gray-900 mb-30">
          Why & Who Benefits from Our Technology?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Column */}
          <div className="space-y-6">
            {/* 99% Accuracy Card */}
            <div className="bg-[#FAFAFA] p-6 rounded-lg shadow-sm w-[315px]">
              <div className="flex justify-center mb-4">
                <div className="text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                    <circle cx="17" cy="16" r="3"></circle>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-5">
                99% Accuracy
              </h3>
              <p className="text-gray-600 text-center text-sm mb-5">
                Industry-leading fraud detection
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="text-[#0000EE] text-sm inline-flex items-center"
                >
                  View details
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
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Billing & Payments Card */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm w-[315px]">
              <div className="h-36 mb-4 -mx-6 -mt-6">
                <img
                  src={payment}
                  alt="Analytics dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Billing & Payments
              </h3>
              <p className="text-gray-600 text-center text-sm mb-4">
                Streamline invoicing and payments with automated workflows,
                reducing ...
              </p>
              <div className="flex justify-center mb-4"></div>
              <div className="text-center">
                <a
                  href="#"
                  className="text-[#0000EE] text-sm inline-flex items-center"
                >
                  View details
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
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="space-y-6">
            {/* Most Cost-Effective Card */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm w-[315px]">
              <h3 className="text-xl font-semibold text-center mb-2 mt-0">
                Most Cost-Effective
              </h3>
              <p className="text-gray-600 text-center text-sm mb-4">
                Save on security without compromising quality
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="text-[#0000EE] text-sm inline-flex items-center"
                >
                  View details
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
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Financial Services Card */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm w-[315px]">
              <div className="flex justify-center mb-4">
                <div className="text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="7"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Financial Services
              </h3>
              <p className="text-gray-600 text-center text-sm mb-4">
                Prevent identity fraud in banking
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="text-[#0000EE] text-sm inline-flex items-center"
                >
                  View details
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
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Government & Law Card */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm w-[315px]">
              <h3 className="text-xl font-semibold text-center mb-2">
                Government & Law
              </h3>
              <p className="text-gray-600 text-center text-sm mb-4">
                Secure identity verification
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="text-[#0000EE] text-sm inline-flex items-center"
                >
                  View details
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
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Third Column */}
          <div className="space-y-6">
            {/* AI Powered Insights Card */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm w-[315px]">
              <div className="flex justify-center mb-5">
                <div className="text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-5">
                AI Powered Insights
              </h3>
              <p className="text-gray-600 text-center text-sm mb-5">
                Know exactly what is happening and get actionable...
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="text-[#0000EE] text-sm inline-flex items-center"
                >
                  View details
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
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Social Media Platforms Card */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm w-[315px]">
              <h3 className="text-xl font-semibold text-center mb-2">
                Social Media Platforms
              </h3>
              <p className="text-gray-600 text-center text-sm mb-4">
                Detect fake content before it spreads
              </p>
              <div className="text-center mb-4">
                <a
                  href="#"
                  className="text-[#0000EE] text-sm inline-flex items-center"
                >
                  View details
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
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="h-36 -mx-6 -mb-6">
                <img
                  src={social}
                  alt="Social media platforms"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsTechnologySection;
