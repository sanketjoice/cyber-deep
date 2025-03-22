import React from "react";

const MobileAppSection = () => {
  return (
    <div className="w-full bg-[#f7f9f8] items-center justify-center flex py-16 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="items-center">
          <div className="w-full mb-10 md:mb-0 text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-8">
              Manage Your Uploads On the Go
            </h2>
            <p className="text-lg text-gray-700 mb-10 mx-auto px-4 md:px-0 md:ml-6 max-w-2xl">
              With free Mobile App, you can manage your uploaded content from
              anywhere. Stay connected and stay in control, no matter where your
              day takes you.
            </p>
          </div>

          <div className="w-full justify-center flex flex-col sm:flex-row gap-4">
            {/* App Store button */}
            <button className="flex items-center justify-center gap-3 w-full sm:w-[205px] h-[74px] bg-white rounded-lg border border-[#090909] hover:shadow-md transition-all mx-auto sm:mx-0 max-w-xs">
              <svg
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="currentColor"
                className="text-black"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span className="font-medium text-xl">App Store</span>
            </button>

            {/* Google Play button */}
            <button className="flex items-center justify-center gap-3 w-full sm:w-[205px] h-[74px] bg-white rounded-lg border border-[#090909] hover:shadow-md transition-all mx-auto sm:mx-0 max-w-xs">
              <svg
                viewBox="0 0 24 24"
                width="32"
                height="32"
                className="text-black"
              >
                <path fill="#EA4335" d="M12.545 12L5 19.5V4.5z" />
                <path fill="#FBBC04" d="M12.545 12L5 4.5l12 6.5z" />
                <path fill="#4285F4" d="M12.545 12L5 19.5l12-6.5z" />
                <path fill="#34A853" d="M12.545 12L17 9.5v5z" />
              </svg>
              <span className="font-medium text-xl">Google Play</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppSection;
