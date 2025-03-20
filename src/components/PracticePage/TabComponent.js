import { useState } from "react";

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="w-96 mx-auto mt-8 p-4 bg-slate-500/20 backdrop-blur-md rounded-lg shadow-lg">
      {/* Tab Buttons */}
      <div className="flex border-b">
        {["Tab 1", "Tab 2", "Tab 3"].map((tab, index) => (
          <button
            key={index}
            className={`flex-1 py-2 text-center ${
              activeTab === index + 1
                ? "border-b-2 border-indigo-700 font-semibold"
                : "text-white"
            }`}
            onClick={() => setActiveTab(index + 1)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 text-center ">
        {activeTab === 1 && <p className="text-white">Content for Tab 1</p>}
        {activeTab === 2 && <p className="text-white">Content for Tab 2</p>}
        {activeTab === 3 && <p className="text-white">Content for Tab 3</p>}
      </div>
    </div>
  );
};

export default TabsComponent;
