import React from 'react'
import Image from 'next/image'

const Explore = () => {

  return (
    <div className='mb-20 mt-20'>

        <section>
        <section className='flex justify-center'>
                <section className='w-[90vw]  gap-4 sm:w-[85vw] md:w-[80vw] lg:w-[75vw] '>
                    <p className='md:-rotate-90'>Explore new and popular styles</p>
                    <section className='grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4'>
                        <div className='col-span-2 row-span-2'><Image className='w-full h-full' src={"/explore/Image2.png"} alt="chair" width={300} height={300}></Image></div>
                        <div><Image className='w-full h-full' src={"/explore/Image3.png"} alt="chair" width={300} height={300}></Image></div>
                        <div><Image className='w-full h-full'  src={"/explore/Image.png"} alt="chair" width={300} height={300}></Image></div>
                        <div><Image className='w-full h-full' src={"/explore/Image4.png"} alt="chair" width={300} height={300}></Image></div>
                        <div><Image className='w-full h-full'  src={"/explore/Image.png"} alt="chair" width={300} height={300}></Image></div>
                    </section>    
                
                </section>
            </section>
        </section>
    </div>
  )
}

export default Explore