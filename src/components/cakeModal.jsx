import React from "react";

function CakeModal({ pro, onClose, onAddToCart }) {
  if (!pro) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-[500px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>

        <img src={pro.thumbnail} alt={pro.title} className="w-full h-64 object-cover rounded-lg" />
        <h2 className="text-black text-2xl font-bold mt-4">{pro.title}</h2>
        <p className="text-pink-600 text-xl font-semibold mt-2">${pro.price}</p>
        <p className="text-gray-600 mt-3">This moist Cake Recipe is fluffy, tangy and so easy to make from scratch! Every bite of this supremely moist pound cake is bursting with fresh lemon flavor and the easy lemon glaze on top will have you hooked after just one bite....</p>

        <button
          onClick={() => {
            onClose();
          }}
          className="mt-5 w-full px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default CakeModal;