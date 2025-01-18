import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className='mb-20'>
      <section className='flex justify-center'>
        <section className='w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] min-h-[850px] bg-[#F0F2F3] flex justify-center items-center'>
          <section className='w-[80vw] sm:w-[75vw] md:w-[70vw] lg:w-[65vw] xl:w-[60vw] flex flex-col-reverse lg:flex-row text-center lg:text-left justify-center items-center gap-8'>
          <div className='grid gap-5 md:w-1/2'>
            <p>Welcome to chairy</p>
            <h1 className='font-bold text-[36px] sm:[50px] md:[60px]'>Best Furniture Collection for your interior.</h1>
            <div className='text-center lg:text-left'>
            <Button className='bg-[#029FAE] text-[#FFFFFF] h-[52px] w-[171px]'>Shop Now <ArrowRight/></Button>
            </div>
          </div>
          <div>
            <Link href={""}>
            <Image className='w-[330px] h-[430px] lg:w-[444px] lg:h-[544px] xl:w-[538px] xl:h-[638px]' src={"/hero/ProductImage1.png"} alt="chair" width={600} height={600}></Image>
            </Link>
          </div>
          </section>
        </section>
      </section>
    </div>
  )
}

export default HeroSection