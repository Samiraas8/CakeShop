import React from "react";
import { useCart } from "../src/context/CartContext";

function Cart() {
  const { cart, addToCart, decreaseQuantity, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <h2 className="text-center mt-10 text-2xl font-bold">Cart is Empty 🛒</h2>;
  }

  // ümumi qiymət
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      <div className="grid gap-5">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border rounded shadow"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-pink-600">${item.price}</p>
              </div>
            </div>

            {/* Quantity controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="px-3 py-1 bg-red-500 rounded hover:bg-red-600"
              >
                -
              </button>
              <span className="font-semibold">{item.quantity}</span>
              <button
                onClick={() => addToCart(item)}
                className="px-3 py-1 bg-red-500 rounded hover:bg-red-600"
              >
                +
              </button>
            </div>

            {/* Məhsulu sil */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Sil
            </button>
          </div>
        ))}
      </div>

      {/* ümumi qiymət */}
      <div className="mt-6 text-right text-xl font-bold">
        Ümumi: ${total.toFixed(2)}
      </div>
    </div>
  );
}

export default Cart;