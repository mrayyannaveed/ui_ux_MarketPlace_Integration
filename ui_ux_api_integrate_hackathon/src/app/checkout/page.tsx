// "use client"
// import { productsType } from '@/sanity/schemaTypes/types';
// import React, { useEffect, useState } from 'react'
// import { getCartItems } from '../actions/actions';
// import Link from 'next/link';
// import Image from 'next/image';
// import { urlFor } from '@/sanity/lib/image';
// import { ChevronRight } from 'lucide-react';
// import Swal from 'sweetalert2';
// import { client } from '@/sanity/lib/client';

// const Checkout = () => {
//   const [cartItems, setCartItems] = useState<productsType[]>([]);
//   const [discount, setDiscount] = useState<number>(0);
//   const [formValues, setFormValues] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     address: "",
//     zipCode: "",
//     city: ""
//   });

//   const [formErrors, setFormErrors] = useState({
//     firstName: false,
//     lastName: false,
//     email: false,
//     phone: false,
//     address: false,
//     zipCode: false,
//     city: false
//   });

//   useEffect(() => {
//     setCartItems(getCartItems());
//     const appliedDiscount = localStorage.getItem("appliedDiscount");
//     if(appliedDiscount){
//       setDiscount(Number(appliedDiscount));
//     }
//   }, [])

//   const subTotal = cartItems.reduce(
//     (total, items) => total + items.price * items.inventory, 0
//   )

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormValues({
//       ...formValues,
//       [e.target.id]: e.target.value
//     })
//   }

//   const validateForm = () => {
//     const errors = {
//       firstName: !formValues.firstName,
//       lastName: !formValues.lastName,
//       email: !formValues.email,
//       phone: !formValues.phone,
//       address: !formValues.address,
//       zipCode: !formValues.zipCode,
//       city: !formValues.city
//     };
//     setFormErrors(errors);
//     return Object.values(errors).every((error) => !error);
//   }

//   const handlePlaceOrder = async () => {

//      Swal.fire({
//           title: 'Processing Your Order',
//           icon: 'info',
//           showCancelButton: true,
//           confirmButtonColor: '#3085d6',
//           cancelButtonColor: '#d33',
//           confirmButtonText: 'Proceed!',
//         }).then((result) => {
//           if (result.isConfirmed) {
//             if(validateForm()){
//               localStorage.removeItem('appliedDiscount');
//               Swal.fire('Success!', 'Your order has been successfully processed.', 'success');
//             } else {
//               Swal.fire('Error!', 'Please fill out all required fields.', 'error');
//             }
//           }
//         });

//     const orderData = {
//       _type: 'order',
//       firstName: formValues.firstName,
//       lastName: formValues.lastName,
//       email: formValues.email,
//       phone: formValues.phone,
//       address: formValues.address,
//       zipCode: formValues.zipCode,
//       city: formValues.city,
//       cartItems: cartItems.map((item) => ({
//         _type: 'reference',
//         _ref: item._id,
//       })),
//       total: subTotal,
//       discount: discount,
//       orderDate: new Date().toISOString()
//     }

//     try{
//       await client.create(orderData)
//       localStorage.removeItem("appliedDiscount")
//     } catch(error){
//       console.error(error)
//     }
//   }

//   return (
//     <div>
//       <div className='mi-h-screen bg-gray-50'>
//         <div className='mt-6'>
//           <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
//             <nav className='flex items-center gap-2 py-4'>
//               <Link href={'/cart'} className='text-[#666666] hover:text-black transition text-sm'>cart</Link>
//               <ChevronRight/>
//               <span>Checkout</span>
//             </nav>
//           </div>
//         </div>

//       </div>
//       <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
//         <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
//           <div className='bg-white border rounded-lg p-6 space-y-6'>
//             <h2 className='text-lg font-semibold mb-4'>Order Summary</h2>
//           {cartItems.length > 0 ? (
//             cartItems.map((item) => (
//               <div key={item._id} className='flex items-center gap-4 py-3 border-b'>
//                 <div className='w-16 h-16 rounded overflow-hidden'>
//                   {item.imageUrl && (
//                     <Image
//                     src={urlFor(item.imageUrl).url()}
//                     alt='chair'
//                     width={50}
//                     height={50}
//                     className='object-cover w-full h-full'
//                     />
//                   )}
//                 </div>
//                 <div className='flex-1'>
//                   <h3 className='text-sm font-medium'>{item.title}</h3>
//                   <p className='text-xs text-gray-500'>Quantity: {item.inventory}</p>
//                 </div>
//                   <p>${item.price * item.inventory}</p>
//               </div>
//               ))
//             ): (
//               <p className='text-xs font-medium'>No items in cart</p>
//             )
//           }
//           <div className='text-right pt-4'>
//             <p className='text-sm'><span className='font-medium'> SubTotal: ${subTotal}</span></p>
//             <p className='textsm'><span className='font-medium'>Discount: ${discount}</span></p>
//             <p className='text-lg font-semibold'><span>Total: ${subTotal.toFixed(2)}</span></p>
//           </div>
//           </div>

//           <div className='bg-white border rounded-lg p-6 space-y-6'>
//             <h2>Billing Information</h2>
//             <div className='grid gap-5'>
//               <div className='grid '>
//                 <label htmlFor="">First Name</label>
//                 <input 
//                 className='p-2 ml-2 border-blue-600 border rounded'
//                 type="text"
//                 id='firstName'
//                 placeholder='Enter Your First Name'
//                 value={formValues.firstName}
//                 onChange={handleInputChange}
//                 />
//                 {formErrors.firstName && (
//                   <p className='text-sm text-red-500'>First Name is Required</p>
//                 )}
//               </div>
//               <div className='grid '>
//                 <label htmlFor="">Last Name</label>
//                 <input 
//                 className='p-2 ml-2 border-blue-600 border rounded'
//                 type="text"
//                 id='lastName'
//                 placeholder='Enter Your Last Name'
//                 value={formValues.lastName}
//                 onChange={handleInputChange}
//                 />
//                 {formErrors.lastName && (
//                   <p className='text-sm text-red-500'>Last Name is Required</p>
//                 )}
//               </div>
//               <div className='grid '>
//                 <label htmlFor="">Address</label>
//                 <input 
//                 className='p-2 ml-2 border-blue-600 border rounded'
//                 type="text"
//                 id='address'
//                 placeholder='Enter Your Address'
//                 value={formValues.address}
//                 onChange={handleInputChange}
//                 />
//                 {formErrors.address && (
//                   <p className='text-sm text-red-500'>Address is Required</p>
//                 )}
//               </div>
//               <div className='grid '>
//                 <label htmlFor="">Email</label>
//                 <input 
//                 className='p-2 ml-2 border-blue-600 border rounded'
//                 type="text"
//                 id='email'
//                 placeholder='Enter Your Email'
//                 value={formValues.email}
//                 onChange={handleInputChange}
//                 />
//                 {formErrors.email && (
//                   <p className='text-sm text-red-500'>Email is Required</p>
//                 )}
//               </div>
//               <div className='grid '>
//                 <label htmlFor="">Phone</label>
//                 <input 
//                 className='p-2 ml-2 border-blue-600 border rounded'
//                 type="text"
//                 id='phone'
//                 placeholder='Enter Your Phone'
//                 value={formValues.phone}
//                 onChange={handleInputChange}
//                 />
//                 {formErrors.phone && (
//                   <p className='text-sm text-red-500'>Phone is Required</p>
//                 )}
//               </div>
//               <div className='grid '>
//                 <label htmlFor="">Zip Code</label>
//                 <input 
//                 className='p-2 ml-2 border-blue-600 border rounded'
//                 type="text"
//                 id='zipCode'
//                 placeholder='Enter Your Zip Code'
//                 value={formValues.zipCode}
//                 onChange={handleInputChange}
//                 />
//                 {formErrors.zipCode && (
//                   <p className='text-sm text-red-500'>Zip Code is Required</p>
//                 )}
//               </div>
//               <div className='grid '>
//                 <label htmlFor="">City</label>
//                 <input 
//                 className='p-2 ml-2 border-blue-600 border rounded'
//                 type="text"
//                 id='city'
//                 placeholder='Enter Your City'
//                 value={formValues.city}
//                 onChange={handleInputChange}
//                 />
//                 {formErrors.city && (
//                   <p className='text-sm text-red-500'>City is Required</p>
//                 )}
//               </div>
//               <button onClick={handlePlaceOrder} className='w-full h-12 bg-blue-500 hover:bg-blue-700 text-white'>
//                 Place Order
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Checkout



"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getCartItems } from "@/app/actions/actions";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { ChevronRight } from "lucide-react";
import { productsType } from "@/sanity/schemaTypes/types";
import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";


export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<productsType[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
      phone: !formValues.phone,
      email: !formValues.email,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
    Swal.fire({
      title: "Processing Your Order",
      text: "Please wait while we process your order...",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then((result) => {
      if(result.isConfirmed){
        if(validateForm()){
          localStorage.removeItem("appliedDiscount");
          Swal.fire(
            "Success!",
            "Your Order has been successfully processed!",
            "success"
          );
        } else {
          Swal.fire(
            "Error!",
            "Please fill in all the fields.",
            "error"
          )
        }
      }
    })

    const orderData = {
      _type: "order",
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      phone: formValues.phone,
      address: formValues.address,
      zipCode: formValues.zipCode,
      cartItems: cartItems.map(item => ({
        _type: "reference",
        _ref: item._id,
      })),
      total: total,
      discount: discount,
      status: "pending",
      orderDate: new Date().toISOString
    };

    try{
      await client.create(orderData)
      localStorage.removeItem("appliedDiscount")
    } catch(error){
      console.error("error", error)
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50`}>
      {/* Breadcrumb */}
      <div className="mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4">
            <Link
              href="/cart"
              className="text-[#666666] hover:text-black transition text-sm"
            >
              Cart
            </Link>
            <ChevronRight className="w-4 h-4 text-[#666666]" />
            <span className="text-sm">Checkout</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white border rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center gap-4 py-3 border-b"
                >
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {item.imageUrl && (
                      <Image
                        src={urlFor(item.imageUrl).url()}
                        alt={item.title}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <p className="text-xs text-gray-500">
                      Quantity: {item.inventory}
                    </p>
                  </div>
                  <p className="text-sm font-medium">
                    ${item.price * item.inventory}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            )}
            <div className="text-right pt-4">
              <p className="text-sm">
                Subtotal: <span className="font-medium">${subtotal}</span>
              </p>
              <p className="text-sm">
                Discount: <span className="font-medium">-${discount}</span>
              </p>
              <p className="text-lg font-semibold">
                Total: ${total.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Billing Form */}
          <div className="bg-white border rounded-lg p-6 space-y-6">
            <h2 className="text-xl font-semibold">Billing Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  placeholder="Enter your first name"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  className="border"
                />
                {formErrors.firstName && (
                  <p className="text-sm text-red-500">
                    First name is required.
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="lastName">Last Name </label>
                <input
                  id="lastName"
                  placeholder="Enter your last name"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                />
                {formErrors.lastName && (
                  <p className="text-sm text-red-500">
                    Last name is required.
                  </p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="address">Address </label>
              <input
                id="address"
                placeholder="Enter your address"
                value={formValues.address}
                onChange={handleInputChange}
              />
              {formErrors.address && (
                <p className="text-sm text-red-500">Address is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                id="city"
                placeholder="Enter your city"
                value={formValues.city}
                onChange={handleInputChange}
              />
              {formErrors.city && (
                <p className="text-sm text-red-500">City is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="zipCode">Zip Code</label>
              <input
                id="zipCode"
                placeholder="Enter your zip code"
                value={formValues.zipCode}
                onChange={handleInputChange}
              />
              {formErrors.zipCode && (
                <p className="text-sm text-red-500">Zip Code is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                placeholder="Enter your phone number"
                value={formValues.phone}
                onChange={handleInputChange}
              />
              {formErrors.phone && (
                <p className="text-sm text-red-500">Phone is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                placeholder="Enter your email address"
                value={formValues.email}
                onChange={handleInputChange}
              />
              {formErrors.email && (
                <p className="text-sm text-red-500">Email is required.</p>
              )}
            </div>
            <button
              className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}