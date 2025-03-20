import React, { useState } from "react";

const DragAndDrop = () => {
  // Track the items in the draggable area and the drop zone area
  const [dragItems, setDragItems] = useState(["Item 1", "Item 2", "Item 3"]);
  const [droppedItems, setDroppedItems] = useState([]);

  // Handle drag start event
  const handleDragStart = (e, item) => {
    e.dataTransfer.setData("text", item); // Store item to be dragged
    e.target.style.opacity = "0.5"; // Make the item semi-transparent while dragging
  };

  // Handle drag end event
  const handleDragEnd = (e) => {
    e.target.style.opacity = "1"; // Restore opacity when dragging ends
  };

  // Handle drag over event to allow dropping
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Handle drop event
  const handleDrop = (e, isDropArea) => {
    e.preventDefault();
    const draggedItem = e.dataTransfer.getData("text"); // Get the item being dragged

    if (isDropArea) {
      // If dropping in the drop zone (Card 2), add the item to droppedItems
      setDroppedItems((prevItems) => [...prevItems, draggedItem]);
      // Remove item from dragItems list
      setDragItems((prevItems) => prevItems.filter((item) => item !== draggedItem));
    } else {
      // If dragging back to Card 1, remove from droppedItems and add back to dragItems
      setDragItems((prevItems) => [...prevItems, draggedItem]);
      setDroppedItems((prevItems) => prevItems.filter((item) => item !== draggedItem));
    }
  };

  return (
    <div className="flex space-x-4">
      {/* Card 1 - Draggable Items */}
      <div
        className="w-[400px] p-4 bg-slate-500/20 backdrop-blur-2xl shadow-lg rounded-lg"
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, false)} // Allow drop back into drag area
      >
        <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 to-violet-700 text-transparent bg-clip-text">Draggable Items</h3>
        {dragItems.length > 0 ? (
          dragItems.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-gradient-to-r from-pink-200 to-violet-300 cursor-move mb-2 rounded"
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
              onDragEnd={handleDragEnd}
            >
              {item}
            </div>
          ))
        ) : (
          <div className="p-4 bg-gradient-to-r from-pink-200 to-violet-300 text-white">No items to drag</div>
        )}
      </div>

      {/* Card 2 - Drop Zone */}
      <div
        className="w-[400px] p-4 bg-slate-500/20 backdrop-blur-2xl shadow-lg rounded-lg"
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, true)} // Allow drop into drop zone
      >
        <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 to-violet-700 text-transparent bg-clip-text">Drop Here</h3>
        {droppedItems.length > 0 ? (
          droppedItems.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-gradient-to-r from-pink-200 to-violet-300 text-white cursor-move mb-2 rounded"
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
              onDragEnd={handleDragEnd}
            >
              {item}
            </div>
          ))
        ) : (
          <div className="p-4 bg-gradient-to-r from-pink-200 to-violet-300 text-white">Drop items here</div>
        )}
      </div>
    </div>
  );
};

export default DragAndDrop;
