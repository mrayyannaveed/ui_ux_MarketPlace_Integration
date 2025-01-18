import React from 'react'
import Image from 'next/image'
import { Heart, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Page = () => {
  return (
    <div className='mt-10 mb-20'>
        <section className='flex justify-center'>
        <section className='w-[90vw] grid gap-20 sm:w-[85vw] md:w-[80vw] lg:w-[75vw] '>
            <section className='grid lg:grid-cols-5 grid-cols-2 gap-8'>
                <section className='lg:col-span-3 col-span-2 grid gap-3'>
                    <h2 className='font-medium text-[22px]'>Bag</h2>
                    <div className='flex flex-col lg:flex-row gap-2 py-2'>
                        <div className='flex justify-center lg:justify-start pb-4'>
                        <Image className='w-[150px] h-[150px]'  src={"/addCart/Image.png"} alt="chair" width={400} height={400}></Image>
                        </div>
                        <div className='flex justify-between w-full lg:w-3/4 lg:pr-5'>
                            <div className='grid gap-6 lg:gap-1'>
                                <p>Library Stool Chair</p>
                                <p className='text-[#757575] text-[15px]'>Ashen Slate/Cobalt Bliss</p>
                                <div className='flex gap-8'>
                                <span className='text-[#757575] flex gap-2 text-[15px]'>
                                    <span>Size</span>
                                    <span>L</span>
                                </span>
                                <span className='text-[#757575] flex gap-2 text-[15px]'>
                                    <span>Quantity</span>
                                    <span>1</span>
                                </span>
                                </div>
                                <div className='flex gap-4'>
                                    <span><Heart/></span>
                                    <span><Trash2/></span>
                                </div>
                            </div>
                            <div>
                                <p>MRP: $99</p>
                            </div>
                            </div>
                        </div>
                    <div className='flex flex-col lg:flex-row gap-2 py-2'>
                        <div className='flex justify-center lg:justify-start pb-4'>
                        <Image className='w-[150px] h-[150px]' src={"/addCart/Image1.png"} alt="chair" width={400} height={400}></Image>
                        </div>
                        <div className='flex justify-between w-full lg:w-3/4 lg:pr-5'>
                            <div className='grid gap-6 lg:gap-1'>
                                <p>Library Stool Chair</p>
                                <p className='text-[#757575] text-[15px]'>Ashen Slate/Cobalt Bliss</p>
                                <div className='flex gap-8'>
                                <span className='text-[#757575] flex gap-2 text-[15px]'>
                                    <span>Size</span>
                                    <span>L</span>
                                </span>
                                <span className='text-[#757575] flex gap-2 text-[15px]'>
                                    <span>Quantity</span>
                                    <span>1</span>
                                </span>
                                </div>
                                <div className='flex gap-4'>
                                    <span><Heart/></span>
                                    <span><Trash2/></span>
                                </div>
                            </div>
                            <div>
                                <p>MRP: $99</p>
                            </div>
                            </div>
                    </div>
                </section>
                <section className='col-span-2 text-[15px] grid gap-6 mt-10 lg:mt-0 lg:gap-0'>
                    <h1 className='text-[21px] font-medium'>Summary</h1>
                    <div className='text-[#111111] flex justify-between'>
                        <span className=''>Subtotal</span>
                        <span>$198.00</span>
                    </div>
                    <div className='flex justify-between text-[#111111] text-[15px]'>
                        <span>Estimated Delivery & Handling</span>
                        <span>Free</span>
                    </div>
                    <div className='flex justify-between text-[#111111] text-[15px]'>
                        <span>Total</span>
                        <span>$198.00</span>
                    </div>
                    <Button className='text-[#FFFFFF] bg-[#029FAE] h-[60px] rounded-full'>Member Checkout</Button>
                </section>
            </section>
        </section>
        </section>
    </div>
  )
}

export default Page