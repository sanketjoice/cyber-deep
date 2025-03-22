import React, { useState } from "react";

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState("what-is");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: "what-is",
      question: "What is CyberDeep360?",
      answer:
        "CyberDeep360 is a AI-Powered DeepFake Detection – 99% Accurate, Cost-Effective, Easy to Integrate tool.",
    },
    {
      id: "how-works",
      question: "How does it work?",
      answer:
        "Our technology uses advanced AI algorithms to analyze media files for signs of manipulation. The system examines pixel-level inconsistencies, audio-visual syncing issues, and other markers that indicate artificial generation.",
    },
    {
      id: "cost",
      question: "How much does it cost?",
      answer:
        "We offer flexible pricing plans based on your organization's needs. Our packages start at $99/month for basic detection capabilities, with enterprise solutions available for larger organizations requiring higher volume processing.",
    },
  ];

  return (
    <div className="w-full bg-[#f7f9f8] py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-10">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700 mb-2">
            Find answers to common questions about our services and features.
          </p>
          <p className="text-lg text-gray-700">
            For more details, contact our support team.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Ask Q! e.g Tell me about key Features."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F54F35]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-0 top-0 h-full px-5 bg-[#F54F35] text-white rounded-r-lg flex items-center justify-center">
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
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full p-4 text-left flex justify-between items-center bg-white hover:bg-gray-50"
                onClick={() => toggleFaq(faq.id)}
              >
                <span className="text-xl font-medium text-gray-900">
                  {faq.question}
                </span>
                <span className="ml-6">
                  {openFaq === faq.id ? (
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
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  ) : (
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
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  )}
                </span>
              </button>

              {openFaq === faq.id && (
                <div className="p-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Support Link */}
        <div className="text-center mt-10">
          <p className="text-lg">
            Haven't got your answer?
            <a href="#" className="text-[#0000EE]  hover:underline">
              Contact our support now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
