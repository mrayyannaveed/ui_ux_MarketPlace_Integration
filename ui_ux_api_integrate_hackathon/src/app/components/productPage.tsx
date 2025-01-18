import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProductPage = (props:any) => {
  return (
    <div>
        <div className="bg-[#F5F5F5]">
          <div className="flex justify-center items-center flex-col">
            <Link href={"/chairCart"}><Image
              className=""
              src={props.image}
              alt={props.alt}
              width={500}
              height={500}
            ></Image></Link>
          </div>
        <div className="pt-2 flex w-full px-4 md:px-2 lg:px-0 justify-between pb-2 bg-white">  
            <div className="flex justify-between w-full gap-2">
                <span className=" text-base text-[]">{props.name}</span>
                <p className=" text-lg text-[#000]">{props.price}</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProductPage