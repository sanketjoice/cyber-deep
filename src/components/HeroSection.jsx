import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="w-full bg-[#f7f9f8] py-16 md:py-24 relative overflow-hidden">
      {/* Background dashed circle - using a pseudo-element for the dashed circle */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="w-[80%] h-[80%] rounded-full border-2 border-dashed border-gray-200 opacity-50"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        {/* Main heading */}
        <h1 className="text-[60px] md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
          AI-Powered DeepFake
          <br />
          Detection – 99% Accurate
        </h1>

        {/* Subheading with colored text */}
        <h2 className="text-2xl md:text-3xl lg:text-[60px] font-semibold mb-8">
          <span style={{ color: "#C00CF2" }}>Cost-Effective, </span>
          <span className="text-red-500">Easy to Integrate</span>
        </h2>

        {/* Description text */}
        <p className="text-gray-700 max-w-xl mx-auto mb-12">
          Protect your business from fraud with the most advanced DeepFake
          detection technology.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <button
            className="flex items-center justify-center gap-2 px-6 py-3 font-medium text-white rounded-[8px] shadow-sm hover:shadow-md text-lg"
            style={{ backgroundColor: "#F54F35" }}
          >
            Get Started
            <ArrowRight size={18} />
          </button>
          <button className="px-6 py-3 font-medium text-gray-800 bg-white rounded-md border border-gray-300 shadow-sm hover:shadow-md text-lg">
            Book A Demo
          </button>
        </div>

        {/* Feature list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-800">
          <div className="text-[20px] font-medium bg-white py-1.5 px-4 rounded-[6px]">
            Seamless Performance
          </div>
          <div className="text-lg bg-white py-1.5 px-4 rounded-[6px] font-medium">
            Layered Analysis
          </div>
          <div className="text-lg font-medium bg-white py-1.5 px-4 rounded-[6px]">
            Generate Report
          </div>
          <div className="text-lg font-medium bg-white py-1.5 px-4 rounded-[6px]">
            Multiple Formats
          </div>
        </div>

        {/* Logo positioned in the bottom right */}
      </div>
    </div>
  );
};

export default HeroSection;
