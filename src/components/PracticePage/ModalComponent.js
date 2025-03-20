import { useState } from "react";

const ModalComponent = () => {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center">
      {/* Button to open modal */}
      <button 
        onClick={openModal} 
        className="bg-gradient-to-r from-pink-500 to-violet-700 text-white py-2 px-4 rounded-md transition"
      >
        Open Modal
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-500/20 backdrop-blur-md bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">This is a Modal</h2>
            <button 
              onClick={closeModal} 
              className="bg-gradient-to-r from-pink-500 to-violet-700 text-white py-2 px-4 rounded-md transition"
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>

    
  );
};

export default ModalComponent;
