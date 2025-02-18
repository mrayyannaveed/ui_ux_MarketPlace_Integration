import { Facebook, GithubIcon, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (

      <footer className='bg-[#FFFFFF] border-t-2 box-shadow: 0px 1px 0px 0px '>
        <section className='flex justify-center'>
          <section className='w-[100vw]  gap-4 md:w-[95vw] lg:w-[95vw]'>
            <section className='grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 xl:grid-cols-4  pt-16 pb-10'>
              <section className='sm:grid sm:gap-10 flex flex-col items-center gap-10'>
              <div className="flex flex-col sm:flex-row items-center gap-1">
                  <Image className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" src={"/logo/sofa.png"} alt="sofa" width={300} height={300}></Image>
                  <p className="text-[20px] sm:text-[24px] md:text-[26px] font-medium">Comforty</p>
              </div>
              <div className='text-center sm:text-left'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid incidunt ullam commodi vero quibusdam voluptate ipsa ipsam, natus molestiae atque consectetur, placeat facilis possimus!</p>
              </div>
                <div className="flex justify-between">
                  <div className="flex justify-between gap-10">

                        <Link href={"https://www.facebook.com/rayyan.naveed.33?mibextid=ZbWKwL"} target="_blank"><Facebook/></Link>
                        <Link href={"https://www.twitter.com/"} target="_blank"><Twitter/></Link>
                        <Link href={"https://www.instagram.com/"} target="_blank"><Instagram/></Link>
                        <Link href={"https://github.com/dashboard"} target="_blank"><GithubIcon/></Link>
                        <Link href={"https://www.linkedin.com/in/muhammad-rayyan-naveed-63090b329/"} target="_blank"><Linkedin/></Link>
                    </div>
                  </div>
              </section>

                <div className='flex flex-col gap-7 items-center sm:items-start'>
                <h1 className="text-sm mb- text-[#9A9CAA]">Category</h1>
                <div>
                  <ul className='text-sm grid gap-3'>
                    <li><Link className='hover:underline hover:text-[#007580]' href={""}>Sofa</Link></li>
                    <li><Link className='hover:underline hover:text-[#007580]' href={""}>Armchair</Link></li>
                    <li><Link className='hover:underline hover:text-[#007580]' href={""}>Desk chair</Link></li>
                    <li><Link className='hover:underline hover:text-[#007580]' href={""}>Wooden chair</Link></li>
                    <li><Link className='hover:underline hover:text-[#007580]' href={""}>Park Bench</Link></li>
                  </ul>
                </div>
                </div>

                <div className='flex flex-col gap-7 items-center sm:items-start'>
                <h1 className="text-sm mb- text-[#9A9CAA]">Support</h1>
                <div>
                  <ul className='text-sm grid gap-3 '>
                    <li><Link className='hover:underline hover:hover:decoration-blue-400 hover:hover:decoration-4' href={"/FAQ"}>Help & Support</Link></li>
                    <li><Link className='hover:underline hover:hover:decoration-blue-400 hover:hover:decoration-4' href={"/FAQ"}>Terms & Conditions</Link></li>
                    <li><Link className='hover:underline hover:hover:decoration-blue-400 hover:hover:decoration-4' href={"/FAQ"}>Privacy Policy</Link></li>
                    <li><Link className='hover:underline hover:hover:decoration-blue-400 hover:hover:decoration-4' href={"/FAQ"}>Help</Link></li>
                  </ul>
                </div>
                </div>

                <div className='flex flex-col gap-7 items-center sm:items-start'>
                <h1 className="text-sm mb- text-[#9A9CAA]">NewsLetter </h1>
                <div className='flex flex-col gap-5 sm:flex-row lg:flex-col'>
                  <input type="email" placeholder='Your email' className='w-full'/>
                  <button className='bg-[#007580] text-white px-5 py-4 rounded-md'>Subscribe</button>
                </div>
                <div className='text-center md:text-left'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, expedita.</p>
                </div>
                </div>
                
            </section>
          </section>
        </section>
      <section className='flex justify-center'>
        <section className='w-[90vw]  gap-4 sm:w-[85vw] md:w-[80vw] lg:w-[75vw] flex flex-col sm:flex-row items-center justify-between'>
          <div><p className='text-sm sm:text-base'>@ 2021 - Blogy - Designed & Develop by Zakirsoft</p></div>
          <div><Image className='w-[227px] h-[27px]' src={"/footer/Group13.png"} alt='paypal' width={400} height={400}></Image></div>
        </section>
      </section>
      </footer>

  )
}

export default Footer