import React from "react";

const AdvancedFeaturesSection = () => {
  return (
    <div className="bg-[#f7f9f8] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="md:text-5xl font-semibold text-gray-900 mb-46">
          How Our AI Detects DeepFakes with 99% Accuracy
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className=" rounded-lg  p-6 transition-transform hover:scale-105">
            <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-16 ring-[40px] ring-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-3">
              AI Analysis
            </h3>
            <p className="text-gray-600 text-[18px] text-center">
              AI scans and analyzes for anomalies in real time
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-lg  p-6 transition-transform hover:scale-105">
            <div className="h-14 w-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-16 ring-[40px] ring-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-600 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-3">
              Upload Content
            </h3>
            <p className="text-gray-600 text-[18px] text-center">
              Upload or stream content (video, photo, or voice)
            </p>
          </div>

          {/* Feature 3 */}
          <div className=" rounded-lg  p-6 transition-transform hover:scale-105">
            <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-16 ring-[40px] ring-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-3">
              Get Results
            </h3>
            <p className="text-gray-600 text-[18px] text-center">
              Get instant results with fraud confidence scores
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedFeaturesSection;
