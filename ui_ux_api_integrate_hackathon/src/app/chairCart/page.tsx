import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import SectionHeading from '../components/sectionHeading'
import ProductPage from '../components/productPage'
import Link from 'next/link'

const Chair = () => {
  type pro = {
    image: string,
    alt: string,
    name: string,
    price: string
}

let featuredBoxes: pro[] = [
    {image: "/productPage/Image1.png", alt: "chair", name: "Library Stool chair", price: "$90"},
    {image: "/productPage/Image2.png", alt: "chair", name: "Library Stool chair", price: "$90"},
    {image: "/productPage/Image3.png", alt: "chair", name: "Library Stool chair", price: "$90"},
    {image: "/productPage/Image4.png", alt: "chair", name: "Library Stool chair", price: "$90"},
    {image: "/productPage/Image5.png", alt: "chair", name: "Library Stool chair", price: "$90"},
]
  return (
    <div className='mt-10 mb-20'>
        <section className='flex justify-center'>
            <section className='w-[90vw] grid gap-20 sm:w-[85vw] md:w-[80vw] lg:w-[75vw] '>
                <section className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                    <div><Image className='w-full h-[450px] sm:h-[600px] md:h-[500px] md:w-full lg:h-[550px] xl:h-' src={"/featured/Image1.png"} alt='chair' width={500} height={500}></Image></div>
                    <div className='grid gap-10 md:gap-0'>
                        <h1 className='text-[40px] md:text-[35px] lg:text-[60px] font-bold'>Library Stool Chair</h1>
                        <div className='border-b-2 pb-10 md:pb-0'>
                        <p className='bg-[#029FAE] py-1 text-center text-white rounded-2xl w-[118px]'>$20.00 USD</p>
                        </div>
                        <div className='md:pt-10'>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        </div>
                        <div className=''> 
                        <Link href={"/addCart"}>     
                        <Button type='button' className='text-[#FFFFFF] w-[212px] h-[63px] flex items-center bg-[#029FAE] text-xl'>
                          
                        <Image className='w-[29px] h-[29px]' src={"/featured/Cart1.png"} alt='cart' width={400} height={400}></Image>
                          Add To Cart</Button></Link>
                        </div>

                    </div>
                </section>
                <section >

                <div className="my-10 flex justify-between items-center ">
                <SectionHeading head={"Featured Products"}/>
                <span className='font-bold text-lg underline decoration-2 underline-offset-8 hover:bg-slate-300'>View all</span>
                </div>
                <section className='grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-5 gap-10'>
                    {featuredBoxes.map((products) => {
                      return(
                        <ProductPage image={products.image} alt={products.alt} name={products.name} price={products.price} />
                      )
                    })}
                </section>
                </section>
            </section>
        </section>
    </div>
  )
}

export default Chair