import React from 'react'
import Image from 'next/image'

const Sponsor = (props: any) => {
  return (
    <div>
        <div className='mx-2 my-4 sm:mx-8 sm:my-6 md:mx-6 md:my-12'>
            <Image className=' w-full h-full' src={props.image} alt={props.alt} width={500} height={500}></Image>
        </div>
    </div>
  )
}

export default Sponsor