import React from "react";

const EducationalResources = () => {
  const resources = [
    {
      title: "Stock Market Basics",
      description: "Learn the fundamentals of stock trading, including how to read charts, analyze trends, and execute trades.",
      link: "https://www.investopedia.com/stock-market-basics-4587742",
    },
    {
      title: "Technical vs. Fundamental Analysis",
      description: "Understand the differences between these two analysis methods and when to use them for making trading decisions.",
      link: "https://www.investopedia.com/technical-vs-fundamental-analysis-4587743",
    },
    {
      title: "Options Trading Guide",
      description: "A beginner's guide to options trading, including strategies, risks, and rewards.",
      link: "https://www.investopedia.com/options-trading-guide-4587744",
    },
    {
      title: "Risk Management in Trading",
      description: "Learn how to manage risks in trading, set stop-loss levels, and optimize your portfolio.",
      link: "https://www.investopedia.com/risk-management-trading-4587745",
    },
    {
      title: "Understanding Market Trends",
      description: "Gain insights into market cycles, trends, and how to identify opportunities.",
      link: "https://www.investopedia.com/understanding-market-trends-4587746",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Educational Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{resource.title}</h2>
            <p className="text-gray-600 mb-4">{resource.description}</p>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-medium hover:underline"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalResources;
