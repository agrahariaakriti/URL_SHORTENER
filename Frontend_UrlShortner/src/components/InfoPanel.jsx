import React from "react";

const InfoPanel = () => {
  return (
    <div className="md:w-1/2">
      <h3 className="text-2xl font-bold mb-4">Why use our URL Shortener?</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Quick and easy to use</li>
        <li>Secure and reliable</li>
        <li>Shareable and trackable links</li>
      </ul>
    </div>
  );
};

export default InfoPanel;
