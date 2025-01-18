import { Button } from '@/components/ui/button'
import { Clock5, MapPin, Phone} from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ContactUs = () => {
  return (
    <div className='mt-10 mb-20'>
        <section>
            <div className='flex justify-center text-center mt-14 mb-32'>
                <div className='w-1/2 grid gap-4'>
                    <h1 className='lg:text-[36px] text-[24px] md:text-[28px] font-semibold'>Get In Touch With Us</h1>
                    <p className='text-[#9F9F9F] text-sm md:text-base'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                </div>
            </div>
                <section className='flex justify-center pb-32'>
                    <section className='w-[90vw] grid gap-20 sm:w-[85vw] md:w-[80vw] lg:w-[75vw] '>
                        <section className='grid grid-cols-1 lg:grid-cols-3 gap-20'>
                            <section className='grid gap-8 lg:gap-10'>
                                <div className='flex gap-7'>
                                    <div>
                                    <MapPin/>
                                    </div>
                                    <div className=''>
                                    <h3 className='text-[24px] font-medium'>Address</h3>
                                    <p>236 5th SE Avenue, New York NY10000, United States</p>
                                    </div>
                                </div>
                                <div className='flex gap-7'>
                                    <div>
                                    <Phone/>
                                    </div>
                                    <div className=''>
                                    <h3 className='text-[24px] font-medium'>Phone</h3>
                                    <div>
                                    <p>Mobile: +(84) 546-6789</p>
                                    <p>Hotline: +(84) 456-6789</p>
                                    </div>
                                    </div>
                                </div>
                                <div className='flex gap-7'>
                                    <div>
                                    <Clock5/>
                                    </div>
                                    <div className=''>
                                    <h3 className='text-[24px] font-medium'>Working Time</h3>
                                    <div>
                                    <p>Monday-Friday: 9:00 - 22:00</p>
                                    <p>Saturday-Sunday: 9:00 - 21:00</p>
                                    </div>
                                    </div>
                                </div>
                            </section>
                            <section className=' px-10 lg:col-span-2 lg:row-span-2'>
                                <form className='grid gap-7'>
                                    <label htmlFor="name">Your name</label>
                                    <input type="text" placeholder='Abc' id='name' className='w-full h-[75px] p-3 border border-[#9F9F9F] rounded-lg'/>
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" placeholder='Abc@def.com' id='email' className='w-full h-[75px] border border-[#9F9F9F] rounded-lg p-3' />
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" placeholder='This is an optional' id='subject' className='w-full h-[75px] border border-[#9F9F9F] rounded-lg p-3' />
                                    <label htmlFor="message">Message</label>
                                    <textarea id='message' placeholder='Hi! i’d like to ask about' className='w-full h-[75px] border border-[#9F9F9F] rounded-lg p-3' />
                                    <Button className='bg-[#029FAE] text-[#FFFFFF] rounded-lg w-[240px] h-[60px] border border-[#B88E2F]'>Submit</Button>
                                </form>
                            </section>
                        </section>
                    </section>
                </section>
        </section>
        <section className='flex justify-center'>
            <section className='w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] '>
                <section className='flex justify-center items-center'>

                <section className='grid lg:grid-cols-3 gap-20'>
                    <section className='flex flex-col items-center text-center lg:text-left lg:flex-row gap-2'>
                        <div>
                            <Image className='w-[60px] h-[60px]' src={"/contactUS/trophy.png"} alt='trophy' width={400} height={400}></Image>
                        </div>
                        <div>
                            <h4 className='text-[18px] lg:[25px] font-semibold'>High Quality</h4>
                            <p className='text-[#898989]'>crafted from top materials</p>
                        </div>
                    </section>
                    <section className='flex flex-col items-center text-center lg:text-left lg:flex-row gap-2'>
                        <div>
                            <Image className='w-[60px] h-[60px]' src={"/contactUS/guarantee.png"} alt='guarantee' width={400} height={400}></Image>
                        </div>
                        <div>
                            <h4 className='text-[18px] lg:[25px] font-semibold'>Warranty Protection</h4>
                            <p className='text-[#898989]'>Over 2 years</p>
                        </div>
                    </section>
                    <section className='flex flex-col items-center text-center lg:text-left lg:flex-row gap-2'>
                        <div>
                            <Image className='w-[60px] h-[60px]' src={"/contactUS/customerSupport.png"} alt='customerSupport' width={400} height={400}></Image>
                        </div>
                        <div>
                            <h4 className='text-[18px] lg:[25px] font-semibold'>24 / 7 Support</h4>
                            <p className='text-[#898989]'>Dedicated support</p>
                        </div>
                    </section>
                </section>
                </section>
            </section>
        </section>
    </div>
  )
}

export default ContactUs