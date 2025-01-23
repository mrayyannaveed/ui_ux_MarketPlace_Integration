"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Heart, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { sanityFetch } from '@/sanity/lib/fetch'
import { productsType, propsType } from '@/sanity/schemaTypes/types'
import { allproducts, getCartPro } from '@/sanity/lib/queries'

const AddCart = (props:any) => {
  console.log(props.params.productId)
    const [count, setCount] = useState(1);

  const inCount = () => {
    setCount(count + 1);
  }

  const deCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  const [products, setProducts] = useState<productsType[] | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchProduct = getCartPro(props.params.productId)
        const data = await sanityFetch({ query: fetchProduct });
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);


  if (!products) {
    // Render a loading state while products are being fetched
    return <div>Loading...</div>;
  }

  return (
    <div className='mt-10 mb-20'>
        <section className='flex justify-center'>
        <section className='w-[90vw] grid gap-20 sm:w-[85vw] md:w-[80vw] lg:w-[75vw] '>
              {products.map((cartProd:productsType) =>{
                const productPrice = cartProd.price * count
                const tax = 0.10 * productPrice
                const totalPrice = productPrice + tax
                return(
                  <section key={cartProd._id} className='grid  grid-cols-2 gap-8'> 
                <section className='lg:col-span-3 col-span-2 grid gap-1'>
                    <h2 className='font-medium text-[22px]'>Bag</h2>
                    <div className='flex flex-col lg:flex-row gap-2 py-2'>
                        <div className='flex justify-center lg:justify-start pb-4'>
                        <Image className='w-[200px] h-[200px]'  src={cartProd.imageUrl} alt={cartProd.title} width={400} height={400}></Image>
                        </div>
                        <div className='flex justify-between w-full lg:w-3/4 lg:pr-5'>
                            <div className='grid gap-6 lg:gap-1'>
                                <p>{cartProd.title}</p>
                                <p className='text-[#757575] text-[15px]'>{cartProd.description}</p>
                                <div className='flex flex-col gap-1'>
                                <div className="flex items-center gap-1">
                                <Button onClick={deCount}>-</Button>
                                <input type="number" value={count} className="w-12 text-center" />
                                <Button onClick={inCount}>+</Button>
                                </div>
                                </div>
                                <div className='flex gap-4'>
                                    <span><Heart/></span>
                                    <span><Trash2/></span>
                                </div>
                            </div>
                            <div>
                                <p>MRP: ${productPrice}</p>
                            </div>
                            </div>
                        </div>
                </section>
                <section className='col-span-2 text-[15px] grid gap-6 mt-10 lg:mt-0 lg:gap-0'>
                    <h1 className='text-[21px] font-medium'>Summary</h1>
                    <div className='text-[#111111] flex justify-between'>
                        <span className=''>Subtotal</span>
                        <span>${productPrice}</span>
                    </div>
                    <div className='flex justify-between text-[#111111] text-[15px]'>
                        <span>Tax 10%</span>
                        <span>${tax}</span>
                    </div>
                    <div className='flex justify-between text-[#111111] text-[15px]'>
                        <span>Estimated Delivery & Handling</span>
                        <span>Free</span>
                    </div>
                    <div className='flex justify-between text-[#111111] text-[15px] mb-10'>
                        <span>Total</span>
                        <span>${totalPrice}</span>
                    </div>
                    <Button className='text-[#FFFFFF] bg-[#029FAE] h-[60px] rounded-full w-96 m-auto'>Member Checkout</Button>
                </section>
            </section> //
                )
              })}
        </section>
        </section>
</div>
)}

export default AddCart