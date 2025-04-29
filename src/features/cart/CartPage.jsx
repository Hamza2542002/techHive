import React from "react";
import { useCart } from "./CartContext";
import EmptyCart from "./EmptyCart";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import UpdateItemQuantity from "./UpdateItemQuantity";

export default function CartPage() {
  const { cart, total, dispatch } = useCart();

  function handleUpdate(id, quantity) {
    console.log(id, quantity);
    dispatch({ type: "item/update", payload: { id, quantity } });
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <NavBar />
      <div className="container mx-auto py-16 px-4 lg:px-0 relative z-50 min-h-[679px]">
        <h1 className="text-4xl font-bold mb-10 text">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center space-y-6">
            <EmptyCart />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-8">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition"
                >
                  <div className="flex items-start sm:items-center flex-col sm:flex-row gap-6">
                    <img
                      src={item.images}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h2 className="font-semibold text-xl">{item.name}</h2>
                      <p className="text-accent font-bold text-lg">${item.price}</p>
                    </div>
                  </div>
                  <UpdateItemQuantity item={item} />
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 sticky top-24 max-h-fit">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 text-lg">
                <div className="flex justify-between">
                  <span>Total Items</span>
                  <span>{cart.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-accent">${total.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between font-semibold text-xl">
                    <span>Grand Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-8 py-3 bg-primary text-white rounded-lg text-lg hover:bg-accent transition">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      <footer className="bg-gray-900 text-white py-10">
        <Footer />
      </footer>
    </div>
  );
}
