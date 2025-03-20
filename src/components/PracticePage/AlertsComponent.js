import React, { useState } from "react";

const AlertsComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState(null);

  // Function to show toast
  const showToast = (message, type) => {
    setToast({ message, type });

    // Auto-hide the toast after 3 seconds
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="p-6 max-w-md mx-auto space-y-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-center">Alerts Demo</h2>

      {/* Toast Notifications */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Toast Notifications</h3>

        {/* Toast Notification */}
        {toast && (
          <div
            className={`fixed top-5 right-5 px-4 py-2 rounded-lg shadow-lg text-white ${
              toast.type === "success" ? "bg-green-500" : "bg-yellow-500"
            }`}
          >
            {toast.message}
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => alert("This is a browser alert!")}
          className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
        >
          JS Alert
        </button>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-purple-500 rounded hover:bg-purple-600"
        >
          Custom Confirm
        </button>
      </div>

      {/* Custom Confirm Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <p className="mb-4">Are you sure?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-400 rounded hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                  alert("Confirmed!");
                }}
                className="px-4 py-2 bg-green-500 rounded hover:bg-green-600"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertsComponent;
