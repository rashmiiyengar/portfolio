import React from "react";

const CardComponent = () => {
  return (
    <div className="max-w-sm mx-auto p-6 bg-neutral-50 border border-gray-300 rounded-lg shadow-md mt-10">
      <div className="space-y-4">
        {/* Add your UI elements here */}
        <h3 className="text-lg font-semibold">Basic Card Text</h3>
        <p className="text-gray-700">This is a test card. Validate text visibility, font size, and alignment.</p>
      </div>
    </div>
  );
};

export default CardComponent;