
import React from "react";
import { useCart } from "../src/context/CartContext";
import { useAuth } from "../src/context/AuthContext";

function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty, total } = useCart();
  const { user } = useAuth();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border p-4 rounded-lg shadow"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-pink-500">${item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-2 py-1 bg-red-500 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-2 py-1 bg-red-500 rounded"
                  >
                    +
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Ümumi məbləğ */}
          <div className="mt-8 text-right">
            <h2 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h2>
          </div>

          {/* Checkout formu */}
          {user ? (
            <div className="mt-8 p-6 border rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Checkout</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border px-3 py-2 rounded"
                  required
                />
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full border px-3 py-2 rounded"
                  required
                />
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-1/2 border px-3 py-2 rounded"
                    required
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="w-1/2 border px-3 py-2 rounded"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-pink-500 text-white px-4 py-2 rounded w-full"
                >
                  Pay ${total.toFixed(2)}
                </button>
              </form>
            </div>
          ) : (
            <p className="mt-6 text-red-500">
              You must be logged in to complete the payment.
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default Cart;