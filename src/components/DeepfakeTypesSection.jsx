import React from "react";

const DeepfakeTypesSection = () => {
  return (
    <div className="bg-[#f7f9f8] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="md:text-5xl font-semibold text-gray-900 mb-36 text-center">
          What Types of Deepfake Do We Identify
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Type 1 - Voice */}
          <div className="rounded-lg p-6 transition-transform hover:scale-105">
            <div className="h-48 w-48 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-blue-100 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-3">
              Type 1 - Voice
            </h3>
            <p className="text-gray-600 text-[18px] text-center">
              Detects voice cloning by analyzing vocal patterns and acoustic
              inconsistencies.
            </p>
          </div>

          {/* Type 2 - Photo */}
          <div className="rounded-lg p-6 transition-transform hover:scale-105">
            <div className="h-48 w-48 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-red-100 rounded-full "></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-3">
              Type 2 - Photo
            </h3>
            <p className="text-gray-600 text-[18px] text-center">
              Identifies manipulated images through pixel analysis and lighting
              abnormalities.
            </p>
          </div>

          {/* Type 3 - Video */}
          <div className="rounded-lg p-6 transition-transform hover:scale-105">
            <div className="h-48 w-48 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-green-100 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-3">
              Type 3 - Video
            </h3>
            <p className="text-gray-600 text-[18px] text-center">
              Spots video deepfakes by analyzing unnatural movements and facial
              expressions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeepfakeTypesSection;
