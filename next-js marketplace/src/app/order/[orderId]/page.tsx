"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const OrderConfirmation = () => {
  const searchParams = useSearchParams();


  const orderId = searchParams.get("orderId");
  const totalAmount = searchParams.get("totalAmount");
  const cartDetails = searchParams.get("cartDetails");

  if (!orderId || !totalAmount || !cartDetails) {
    return <p className="text-red-500 font-semibold">Missing order details!</p>;
  }

 
  let cart = [];
  try {

    const decodedCartDetails = decodeURIComponent(cartDetails);


    cart = JSON.parse(decodedCartDetails);
  } catch (error) {
    console.error("Error parsing cartDetails:", error);
    return <p className="text-red-500 font-semibold">Error parsing cart details.</p>;
  }

  return (
    <main className="p-5 md:p-10 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-orange-500">Thank You for Ordering!</h1>
        <p className="mt-2 text-center text-lg font-medium text-gray-700">Your order is being processed.</p>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Order ID: {orderId}</h2>
          <p className="mt-3 text-lg text-gray-600">Total Amount: Rs {totalAmount}</p>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800">Ordered Products:</h3>
          <ul className="mt-4 space-y-4">
            {cart.map((item: any) => (
              <li key={item._id} className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 pb-4">
                <img src={item.imagePath} alt={item.name} className="w-24 h-24 object-cover rounded-md md:mr-4" />
                <div className="flex-1 text-center md:text-left">
                  <p className="font-medium text-lg">{item.name} {item.quantity > 1 && `x${item.quantity}`}</p>
                  <p className="text-gray-600">Rs {item.price * item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => window.location.href = "/"}
            className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300"
          >
            Back to Shop
          </button>
        </div>
      </div>
    </main>
  );
};

export default OrderConfirmation;
