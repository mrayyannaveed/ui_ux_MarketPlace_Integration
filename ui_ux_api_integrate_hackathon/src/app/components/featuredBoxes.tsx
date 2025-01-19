import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { propsType } from '@/sanity/schemaTypes/types'



const FeaturedBoxes = (props:propsType) => {
  console.log(props)
  return (
    <div>
        <div className="bg-[#f1ede7] py-3 shadow-lg text-ellipsis" id="btn_div">
          <div className="flex justify-center items-center flex-col h-[22rem]">
            <Link href={`/chairCart`}><Image
              className="w-44 h-36"
              src={props.image}
              alt={props.alt}
              width={500}
              height={500}
            ></Image></Link>
          {/* <p className="text-center overflow-hidden text-ellipsis">{props.desc}</p> */}
          <div className="flex flex-col gap-2 pt-5 px-2">
              <span className=" text-base">{props.name}</span>
              <p className=" text-lg text-[#000]">${props.price}</p>
          </div>

          <div className="relative">
          <div className="text-center mt-3 hidden absolute translate-x-[-50%] left-[50%]" id="btn">
            <Link href={"/addCart"}><Button className="bg-black text-white" variant="outline">More Details</Button></Link>
        </div>
          </div>
        {/* <div className="mt-16 flex w-full justify-between pb-2 bg-white">  
        </div> */}
          </div>
        </div>
    </div>
  )
}

export default FeaturedBoxes