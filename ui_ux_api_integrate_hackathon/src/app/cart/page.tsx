
"use client"

import { productsType } from '@/sanity/schemaTypes/types';
import React, { useEffect, useState } from 'react';
import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions';
import Swal from 'sweetalert2';
import Image from 'next/image';
import { Trash2 } from 'lucide-react';
import Link from 'next/link';

const CartPage = () => {
  const [cartItems, setCartItems] = useState<productsType[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to recover this item!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!'
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire('Removed!', 'Item has been removed.', 'success');
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
  };

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };

   const handleProceed = () => {
    Swal.fire({
      title: 'Proceed to checkout?',
      text: 'Review your cart before checkout!',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, proceed!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Proceeded!', 'Your order has been successfully placed.', 'success');
        setCartItems([]);
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty</div>
      ) : (
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div key={item._id} className="p-4 border rounded-lg shadow-md bg-white flex items-center">
              <Image src={item.imageUrl} alt={item.title} width={500} height={500} className="w-24 h-24 object-cover rounded-md mr-4" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
                <p className="text-gray-700 mb-2">Price: ${item.price}</p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDecrement(item._id)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span>{item.inventory}</span>
                  <button
                    onClick={() => handleIncrement(item._id)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item._id)}
                className="ml-4 text-red-500 hover:text-red-700"
              >
                <Trash2 size={24} />
              </button>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-6 p-4 border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-xl font-bold">${calculatedTotal().toFixed(2)}</span>
          </div>
          <Link href={'/checkout'}>
          <button
            // onClick={handleProceed}
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
            Proceed to Checkout
          </button>
            </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
