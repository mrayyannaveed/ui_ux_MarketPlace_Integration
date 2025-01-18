import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import AboutBrand from '../components/aboutBrand'
import SectionHeading from '../components/sectionHeading'

const AboutUs = () => {
    let aboutBrand = [
        {
            images:"/aboutUS/delivery1.png",
            alts:"1",
            heading:"Next day as standard",
            description:"Order before 3pm and get your order the next day as standard"
        },
        {
            images:"/aboutUS/Checkmark.png",
            alts:"2",
            heading: "Made by true artisans",
            description: "Handmade crafted goods made with real passion and craftmanship"
        },
        {
            images:"/aboutUS/Purchase.png",
            alts:"3",
            heading: "Unbeatable prices",
            description: "For our materials and quality you won’t find better prices anywhere"
        },
        {
            images:"/aboutUS/Sprout.png",
            alts:"4",
            heading: "Recycled packaging",
            description: "We use 100% recycled to ensure our footprint is more manageable"
        },
    ]
  return (
    <div className='mt-10 mb-20'>
        <section className='flex justify-center'>
            <section className='w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] '>
                <section className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-32'>
                    <section className='bg-[#007580] flex justify-center items-center'>
                        <section className='w-3/4 h-full flex flex-col justify-around gap-20 py-10'>
                        <div>

                            <h1 className='text-white text-[20px] sm:text-[25px]  md:text-[32px] font-bold pb-4'>About US - Comforty</h1>
                            <p className='text-white text-sm sm:text-base'>At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>
                        </div>
                        <div>
                            <Button className='bg-[#35797f] text-white py-4 px-8 text-sm sm:text-base'>View collection</Button>
                        </div>
                        </section>
                        
                    </section>
                    <section><Image className='lg:h-[478px] h-full w-full' src={"/aboutUS/Image.png"} alt='chair' width={700} height={700}></Image></section>
                </section>
                <div className='text-center'><p className='text-[32px] font-semibold'>What makes our Brand Different</p>
                </div>
                <section className='flex justify-center'>

                    <section className='grid gap-20 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 lg:gap-32 mt-20'>
                        {aboutBrand.map((item:any)=>{
                            return(
                                <AboutBrand image={item.images} alt={item.alts} head={item.heading} desc={item.description}></AboutBrand>
                            )
                        })}
                    </section>
                </section>
                <section className='mt-32'>
                    <div>
                        <SectionHeading head={"Our Popular Products"}/>
                        <section className='grid xl:grid-cols-4 gap-5 text-[#2A254B]'>
                            <div className='col-span-2'>
                                <div><Image className='xl:h-[370px] lg:h-[350px] w-full' src={"/aboutUS/Large.png"} alt='sofa' width={700} height={700}></Image></div>
                                <div className='pt-3'>
                                    <p>The Poplar suede sofa</p>
                                    <p>$99.00</p>
                                </div>
                            </div>
                            <div>
                                <div><Image className='xl:h-[370px] lg:h-[350px] w-full' src={"/aboutUS/Parent.png"} alt='sofa' width={700} height={700}></Image></div>
                                <div className='pt-3'>
                                    <p>The Dandy chair</p>
                                    <p>$99.00</p>
                                </div>
                            </div>
                            <div>
                                <div><Image className='xl:h-[370px] lg:h-[350px] w-full' src={"/aboutUS/Photo.png"} alt='sofa' width={700} height={700}></Image></div>
                                <div className='pt-3'>
                                    <p>The Dandy chair</p>
                                    <p>$99.00</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </section>
        </section>
    </div>
  )
}

export default AboutUs