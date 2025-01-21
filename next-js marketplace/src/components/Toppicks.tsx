"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { client } from '../sanity/lib/client';

async function fetchFeaturedProducts() {
  const products = await client.fetch(`*[_type == 'furniture' && isFeaturedProduct == true]`);
  return products.slice(0, 4);
}

const Toppicks = () => {
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([]);

  useEffect(() => {
    const loadFeaturedProducts = async () => {
      const fetchedProducts = await fetchFeaturedProducts();
      setFeaturedProducts(fetchedProducts);
    };

    loadFeaturedProducts();
  }, []);

  return (
    <main className="w-full bg-white flex flex-col items-center space-y-8 py-16">
      {/* Heading */}
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl font-medium text-black">Top Picks For You</h2>
        <p className="text-sm sm:w-[773px] font-medium text-[#9F9F9F]">
          Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {featuredProducts.map((product: any) => (
          <div key={product._id} className="w-full h-[372px] bg-white border mb-10 border-gray-200 border-none overflow-hidden">
            {/* Image */}
            <div className="w-full h-[287px]">
              <Image
                src={product.imagePath || "/fallback-image.jpg"}
                width={750}
                height={384.46}
                alt={product.name}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>

            {/* Text */}
            <div className="px-4 py-3 space-y-2">
              <p className="text-lg font-semibold text-black text-center">{product.name}</p>
              <h2 className="text-xl font-medium text-black-500 underline text-center">Rs. {product.price}</h2>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
};

export default Toppicks;
