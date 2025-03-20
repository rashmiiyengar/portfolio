import React, { useState } from 'react';

const ToggleComponent = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const [isToggled, setIsToggled] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const handleToggleChange = () => {
    setIsToggled(!isToggled);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTextAreaChange = (e) => {
    setTextAreaValue(e.target.value);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-slate-500/20 backdrop-blur-2xl shadow-lg rounded-lg mt-10 space-y-6">
     <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 to-violet-700 text-transparent bg-clip-text">Advanced Elements</h2>
      <div>
        <label className="block text-gray-200 font-medium mb-2">Slider</label>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
          className="w-full h-2 bg-blue-300 rounded-lg appearance-none cursor-pointer"
        />
        <p className="text-center text-gray-600">{sliderValue}</p>
      </div>

      {/* Toggle Switch */}
      <div>
        <label className="block text-gray-200 font-medium mb-2">Toggle Switch</label>
        <label className="inline-flex items-center cursor-pointer">
          <span className="mr-2 text-gray-700">Off</span>
          <input
            type="checkbox"
            checked={isToggled}
            onChange={handleToggleChange}
            className="toggle-checkbox hidden"
          />
          <span className="toggle-label block w-10 h-6 bg-gray-300 rounded-full"></span>
          <span className="toggle-button absolute w-4 h-4 bg-white rounded-full shadow transform transition-all duration-300"></span>
        </label>
      </div>

      {/* Date Picker */}
      <div>
        <label className="block text-gray-200 font-medium mb-2">Select Date</label>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
        />
      </div>

      {/* Text Area */}
      <div>
        <label className="block text-gray-200 font-medium mb-2">Text Area</label>
        <textarea
          value={textAreaValue}
          onChange={handleTextAreaChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
          rows="4"
          placeholder="Enter some text"
        />
      </div>
    </div>
  );
};

export default ToggleComponent;
