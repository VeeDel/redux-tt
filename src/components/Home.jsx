import { ShoppingBag, ShoppingBagOpen } from "phosphor-react";
import React, { useState } from "react";

export default function Home() {
  const [openBag, setOpenBag] = useState(false);
  return (
    <div className="item-center w-[500px] p-5 border-2 shadow-lg rounded-md bg-white flex justify-between">
      <div className="cart-wrapper flex items-center justify-between">
        <div className="img-wrapper item">
          <img
            className="rounded-md"
            width={100}
            src="https://images-cdn.ubuy.co.in/65297d3c60f8a75cb9292133-like-new-apple-iphone-x-256gb-factory.jpg"
            alt="iPhone X"
          />
        </div>
        <div className="ml-4">
          <span className="text-lg font-semibold">iPhone X</span>
          <span className="block text-gray-600">Price: $999.98</span>
        </div>
        <div className="">
          <button className="text-white bg-blue-500 p-2 rounded-lg hover:bg-blue-600">
            Add To Cart
          </button>
        </div>
      </div>
      <div
        onMouseEnter={() => setOpenBag(true)}
        onMouseLeave={() => {
          setOpenBag(false);
        }}
      >
        {openBag ? (
          <ShoppingBagOpen size={28} color="blue" />
        ) : (
          <ShoppingBag size={28} color="blue" />
        )}
      </div>
    </div>
  );
}
