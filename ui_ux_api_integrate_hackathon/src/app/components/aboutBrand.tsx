import Image from 'next/image'
import React from 'react'

const AboutBrand = (props:any) => {
  return (
    <div>
        <section className='text-[#007580] w-[200px] grid gap-5'>
            <div>
                <Image className='h-6 w-6' src={props.image} alt={props.alt} width={500} height={500}></Image>
            </div>
            <div>
                <h4>{props.head}</h4>
            </div>
            <div>
                <p>{props.desc}</p>
            </div>
        </section>
    </div>
  )
}

export default AboutBrand