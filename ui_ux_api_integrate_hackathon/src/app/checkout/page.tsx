"use client"
import { productsType } from '@/sanity/schemaTypes/types';
import React, { useEffect, useState } from 'react'
import { getCartItems } from '../actions/actions';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { ChevronRight } from 'lucide-react';

const Checkout = () => {
  const [cartItems, setCartItems] = useState<productsType[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: ""
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if(appliedDiscount){
      setDiscount(Number(appliedDiscount));
    }
  }, [])

  const subTotal = cartItems.reduce(
    (total, items) => total + items.price * items.inventory, 0
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value
    })
  }

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      zipCode: !formValues.zipCode,
      city: !formValues.city
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  }

  const handlePlaceOrder = () => {
    if(validateForm()){
      localStorage.removeItem("appliedDiscount")
    }
  }

  return (
    <div>
      <div className='mi-h-screen bg-gray-50'>
        <div className='mt-6'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            <nav className='flex items-center gap-2 py-4'>
              <Link href={'/cart'} className='text-[#666666] hover:text-black transition text-sm'>cart</Link>
              <ChevronRight/>
              <span>Checkout</span>
            </nav>
          </div>
        </div>

      </div>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='bg-white border rounded-lg p-6 space-y-6'>
            <h2 className='text-lg font-semibold mb-4'>Order Summary</h2>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item._id} className='flex items-center gap-4 py-3 border-b'>
                <div className='w-16 h-16 rounded overflow-hidden'>
                  {item.imageUrl && (
                    <Image
                    src={urlFor(item.imageUrl).url()}
                    alt='chair'
                    width={50}
                    height={50}
                    className='object-cover w-full h-full'
                    />
                  )}
                </div>
                <div className='flex-1'>
                  <h3 className='text-sm font-medium'>{item.title}</h3>
                  <p className='text-xs text-gray-500'>Quantity: {item.inventory}</p>
                </div>
                  <p>${item.price * item.inventory}</p>
              </div>
              ))
            ): (
              <p className='text-xs font-medium'>No items in cart</p>
            )
          }
          <div className='text-right pt-4'>
            <p className='text-sm'><span className='font-medium'> SubTotal: ${subTotal}</span></p>
            <p className='textsm'><span className='font-medium'>Discount: ${discount}</span></p>
            <p className='text-lg font-semibold'><span>Total: ${subTotal.toFixed(2)}</span></p>
          </div>
          </div>

          <div className='bg-white border rounded-lg p-6 space-y-6'>
            <h2>Billing Information</h2>
            <div className='grid gap-5'>
              <div className='grid '>
                <label htmlFor="">First Name</label>
                <input 
                className='p-2 ml-2 border-blue-600 border rounded'
                type="text"
                id='firstName'
                placeholder='Enter Your First Name'
                value={formValues.firstName}
                onChange={handleInputChange}
                />
                {formErrors.firstName && (
                  <p className='text-sm text-red-500'>First Name is Required</p>
                )}
              </div>
              <div className='grid '>
                <label htmlFor="">Last Name</label>
                <input 
                className='p-2 ml-2 border-blue-600 border rounded'
                type="text"
                id='lastName'
                placeholder='Enter Your Last Name'
                value={formValues.lastName}
                onChange={handleInputChange}
                />
                {formErrors.lastName && (
                  <p className='text-sm text-red-500'>Last Name is Required</p>
                )}
              </div>
              <div className='grid '>
                <label htmlFor="">Address</label>
                <input 
                className='p-2 ml-2 border-blue-600 border rounded'
                type="text"
                id='address'
                placeholder='Enter Your Address'
                value={formValues.address}
                onChange={handleInputChange}
                />
                {formErrors.address && (
                  <p className='text-sm text-red-500'>Address is Required</p>
                )}
              </div>
              <div className='grid '>
                <label htmlFor="">Email</label>
                <input 
                className='p-2 ml-2 border-blue-600 border rounded'
                type="text"
                id='email'
                placeholder='Enter Your Email'
                value={formValues.email}
                onChange={handleInputChange}
                />
                {formErrors.email && (
                  <p className='text-sm text-red-500'>Email is Required</p>
                )}
              </div>
              <div className='grid '>
                <label htmlFor="">Phone</label>
                <input 
                className='p-2 ml-2 border-blue-600 border rounded'
                type="text"
                id='phone'
                placeholder='Enter Your Phone'
                value={formValues.phone}
                onChange={handleInputChange}
                />
                {formErrors.phone && (
                  <p className='text-sm text-red-500'>Phone is Required</p>
                )}
              </div>
              <div className='grid '>
                <label htmlFor="">Zip Code</label>
                <input 
                className='p-2 ml-2 border-blue-600 border rounded'
                type="text"
                id='zipCode'
                placeholder='Enter Your Zip Code'
                value={formValues.zipCode}
                onChange={handleInputChange}
                />
                {formErrors.zipCode && (
                  <p className='text-sm text-red-500'>Zip Code is Required</p>
                )}
              </div>
              <div className='grid '>
                <label htmlFor="">City</label>
                <input 
                className='p-2 ml-2 border-blue-600 border rounded'
                type="text"
                id='city'
                placeholder='Enter Your City'
                value={formValues.city}
                onChange={handleInputChange}
                />
                {formErrors.city && (
                  <p className='text-sm text-red-500'>City is Required</p>
                )}
              </div>
              <button onClick={handlePlaceOrder} className='w-full h-12 bg-blue-500 hover:bg-blue-700 text-white'>
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout



// "use client"

// import React, { useState } from 'react';
// import { CreditCard, Banknote } from 'lucide-react';

// const Checkout = () => {
//   const [userInfo, setUserInfo] = useState({
//     name: '',
//     email: '',
//     address: '',
//     city: '',
//     postalCode: '',
//     country: '',
//   });

//   const [paymentMethod, setPaymentMethod] = useState('creditCard');

//   const handleInputChange = (e:any) => {
//     const { name, value } = e.target;
//     setUserInfo({ ...userInfo, [name]: value });
//   };

//   const handlePaymentChange = (method:any) => {
//     setPaymentMethod(method);
//   };

//   const handlePlaceOrder = () => {
//     alert('Order placed successfully!');
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* User Info Section */}
//         <div className="p-6 border rounded-lg shadow-md bg-white">
//           <h2 className="text-xl font-semibold mb-4">User Information</h2>
//           <form className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={userInfo.name}
//               onChange={handleInputChange}
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={userInfo.email}
//               onChange={handleInputChange}
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="text"
//               name="address"
//               placeholder="Address"
//               value={userInfo.address}
//               onChange={handleInputChange}
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="text"
//               name="city"
//               placeholder="City"
//               value={userInfo.city}
//               onChange={handleInputChange}
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="text"
//               name="postalCode"
//               placeholder="Postal Code"
//               value={userInfo.postalCode}
//               onChange={handleInputChange}
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="text"
//               name="country"
//               placeholder="Country"
//               value={userInfo.country}
//               onChange={handleInputChange}
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </form>
//         </div>

//         {/* Payment Method Section */}
//         <div className="p-6 border rounded-lg shadow-md bg-white">
//           <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
//           <div className="space-y-4">
//             <div
//               className={`flex items-center p-4 border rounded-lg cursor-pointer ${
//                 paymentMethod === 'creditCard' ? 'border-blue-500' : 'border-gray-300'
//               }`}
//               onClick={() => handlePaymentChange('creditCard')}
//             >
//               <CreditCard className="w-6 h-6 text-blue-500 mr-4" />
//               <span>Credit Card</span>
//             </div>

//             <div
//               className={`flex items-center p-4 border rounded-lg cursor-pointer ${
//                 paymentMethod === 'bankTransfer' ? 'border-blue-500' : 'border-gray-300'
//               }`}
//               onClick={() => handlePaymentChange('bankTransfer')}
//             >
//               <Banknote className="w-6 h-6 text-blue-500 mr-4" />
//               <span>Bank Transfer</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Order Summary Section */}
//       <div className="mt-6 p-6 border rounded-lg shadow-md bg-white">
//         <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//         <div className="flex justify-between mb-4">
//           <span>Item 1</span>
//           <span>$20.00</span>
//         </div>
//         <div className="flex justify-between mb-4">
//           <span>Item 2</span>
//           <span>$15.00</span>
//         </div>
//         <div className="flex justify-between font-bold text-lg">
//           <span>Total:</span>
//           <span>$35.00</span>
//         </div>
//         <button
//           onClick={handlePlaceOrder}
//           className="w-full mt-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//         >
//           Place Order
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Checkout;