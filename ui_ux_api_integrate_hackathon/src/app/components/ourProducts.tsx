import React from 'react'
import SectionHeading from './sectionHeading';
import Featured from './featured';
import FeaturedBoxes from './featuredBoxes';
import { sanityFetch } from '@/sanity/lib/fetch';
import { fourProducts } from '@/sanity/lib/queries';
import { productsType } from '@/sanity/schemaTypes/types';

const OurProducts = async () => {
    
        const products : productsType[] = await sanityFetch({query: fourProducts})
        // console.log(products)

    let heading = "Our Products";
  return (
    <div className='mb-20'>
        <section className='flex justify-center'>
            <section className='w-[90vw]  gap-4 sm:w-[85vw] md:w-[80vw] lg:w-[75vw] '>
                <div className='text-center'>
                <SectionHeading head={heading}/>
                </div>
                {/* <Featured/> */}
                <section className='grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-4  gap-x-4'>
                    {products.map((product) => {
                        return(
                            <FeaturedBoxes image={product.imageUrl} alt={product.title} name={product.title} price={product.price}/>
                        )
                    })}
                </section>
            </section>
        </section>
    </div>
  )
}

export default OurProducts