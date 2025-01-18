import { Plus } from 'lucide-react'
import React from 'react'

const FaqQuestions = (props:any) => {
  return (
    <div>
        <section className='grid gap-7 bg-[#F7F7F7] p-4 h-full'>
            <div className='flex justify-between'>
                <h3 className='text-sm sm:text-base md:text-lg font-bold'
                >{props.head}</h3>
                <span><Plus/></span>
            </div>
            <div>
                <p className='text-xs sm:text-sm md:text-base '>{props.desc}</p>
            </div>
        </section>
    </div>
  )
}

export default FaqQuestions