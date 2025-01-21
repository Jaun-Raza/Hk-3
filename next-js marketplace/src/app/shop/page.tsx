"use client";

import Shophead from "@/components/Shophead";
import Image from "next/image";
import React, { useState } from "react";
import Delivery from "@/components/Delivery";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { client } from '../../sanity/lib/client';
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";

async function fetchProducts() {
  const products = await client.fetch(`*[_type == 'furniture']`);
  return products;
}


export default function Page() {
  const [products, setProducts] = useState<any[]>([]);
  const [cart, setCart] = useState<any[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const router = useRouter();

  // Fetch products on page load
  React.useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    loadProducts();
  }, []);

  // Add product to cart
  const addToCart = (product: any) => {
    const existingProduct = cart.find((item) => item._id === product._id);

    if (existingProduct) {
      existingProduct.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter((item) => item._id !== productId));
  };


  const placeOrder = () => {
    const orderId = Math.random().toString(36).substr(2, 9); 
    const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const cartDetails = encodeURIComponent(JSON.stringify(cart)); 

    router.push(`/order/${orderId}?orderId=${orderId}&totalAmount=${totalAmount}&cartDetails=${cartDetails}`);
    setCart([]);

  };

  return (
    <main>
      <Navbar bgColor="bg-white" />
      <Shophead headText="Shop" linkChange="shop" />
      <div className="relative text-center p-10">
        <section
          id="products"
          className="w-full mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
          {products.map((product: any) => (
            <div
              key={product._id}
              className="w-80 bg-white rounded-xl duration-500 hover:scale-105 relative"
            >
              <Link href={"#"}>
                <Image
                  className="h-40 w-80 object-cover rounded-t-xl"
                  src={product.imagePath || "/fallback-image.jpg"} 
                  width={300}
                  height={200}
                  alt={product.name}
                />
                <div className="px-4 py-3 w-72">
                  <p className="text-lg font-bold text-black">{product.name}</p>
                  <p className="text-sm text-gray-600">{product.category}</p>
                  <p className="text-sm text-gray-500 my-2">{product.description}</p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black my-3">
                      RS: {product.price.toFixed(2)}
                    </p>
                    {product.discountPercentage > 0 && (
                      <p className="ml-4 text-sm text-red-600">
                        {product.discountPercentage}% OFF
                      </p>
                    )}
                    <div className="ml-auto">
                      {product.stockLevel > 0 ? (
                        <span className="text-green-600">In Stock</span>
                      ) : (
                        <span className="text-red-600">Out of Stock</span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full mt-3 bg-orange-400 text-white py-2 rounded-md"
                  >
                    Add to Cart
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </section>
      </div>

    
      {cartOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 w-[70%] md:w-[50%] rounded-xl">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <div>
              {cart.length === 0 ? (
                <p>Your cart is empty!</p>
              ) : (
                <div>
                  {cart.map((item) => (
                    <div key={item._id} className="flex justify-between items-center my-3">
                      <Image src={item.imagePath} width={50} height={50} alt={item.name} />
                      <p>{item.name} {item.quantity > 1 && `x${item.quantity}`}</p>
                      <p>Rs {item.price * item.quantity}</p>
                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="text-red-500"
                      >
                        <MdDelete />
                      </button>
                    </div>
                  ))}
                  <div className="mt-5 flex justify-between">
                    <p className="font-semibold">Total:</p>
                    <p className="font-semibold">
                      Rs {cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                    </p>
                  </div>
                  <div className="mt-5">
                    <button
                      onClick={placeOrder}
                      className="w-full bg-orange-500 text-white py-2 rounded-md"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={() => setCartOpen(false)}
              className="mt-5 text-gray-500 underline"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setCartOpen(true)}
        className="fixed bottom-5 right-5 bg-orange-500 text-white p-3 rounded-full"
      >
        View Cart {cart.length > 0 && `(${cart.length})`}
      </button>

      <Delivery />
    </main>
  );
}
