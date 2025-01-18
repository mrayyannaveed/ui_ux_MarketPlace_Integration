import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const FeaturedBoxes = (props:any) => {
  return (
    <div>
        <div className="bg-[#F5F5F5]" id="btn_div">
          <span className="p-4 absolute">
            {props.new}
          </span>
          <div className="flex justify-center items-center flex-col">
            <Link href={"/chairCart"}><Image
              className="w- h-"
              src={props.image}
              alt={props.alt}
              width={500}
              height={500}
            ></Image></Link>
          <div className="relative">

          <div className="text-center my-5 hidden absolute translate-x-[-50%] left-[50%]" id="btn">
            <Link href={"/addCart"}><Button className="bg-black text-white" variant="outline">Add to Cart</Button></Link>
        </div>
          </div>
          </div>
        <div className="mt-16 flex w-full justify-between pb-2 bg-white">  
            <div className="flex flex-col gap-2">
                <span className=" text-base text-[]">{props.name}</span>
                <p className=" text-lg text-[#000]">{props.price}</p>
            </div>
            <div style={{backgroundColor: props.bg}} className='bg-[#029FAE] justify-center w-[45px] h-[40px] flex items-center rounded-full'>
                <Image className="w-7 h-7" src={props.cart} alt={props.alt2} width={500} height={500}></Image>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FeaturedBoxes