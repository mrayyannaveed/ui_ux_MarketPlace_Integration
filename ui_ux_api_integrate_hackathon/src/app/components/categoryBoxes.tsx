import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CategoryBoxes = (props:any) => {
  return (
    <div>
        <div className="bg-[#F5F5F5]" id="btn_div">
          <span className="p-4 absolute">
            {props.new}
          </span>
          <div className="">
            <Link href={"/404"}><Image
              className="w-full h-full relative"
              src={props.image}
              alt={props.alt}
              width={500}
              height={500}
            ></Image></Link>
            <div className='z-10 h-[100%] py-1 opacity-60 mb-4 relative mt-[-50px] bg-black flex flex-col pl-2'>
              <p className='text-white text-l'>{props.chair}</p>
              <p className='text-white text-l'>{props.products}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CategoryBoxes