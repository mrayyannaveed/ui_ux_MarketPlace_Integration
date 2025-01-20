import React from 'react'
import Featured from '../components/featured'
import FeaturedBoxes from '../components/featuredBoxes'
import New from '../components/new'
import ProductPage from '../components/productPage'
import { twoType } from '@/sanity/schemaTypes/types'
import { sanityFetch } from '@/sanity/lib/fetch'
import { tweProducts } from '@/sanity/lib/queries'


const Product = async () => {

    let heading = "All Products"
    const products : twoType[] = await sanityFetch({query: tweProducts})
    // console.log(products)
  return (
    <div className='mt-10'>
        <section className='flex justify-center'>
            <section className='w-[90vw] grid sm:w-[85vw] md:w-[80vw] lg:w-[75vw] '>            
                <Featured head={heading}/>
                <section className='bg-[#1E28320D] mt-14'>

                <section className='mt-32 mb-20 flex justify-center'>
                    <section className='w-[60vw] text-center'>
                        <h1 className='lg:text-[40px] text-[25px] sm:text-[30px] font-medium mb-10'>Or Subscribe To The Newsletter</h1>
                        <div className='flex gap-4'>
                            <input type="text" placeholder='Enter Address' className='border-b-2 w-full border-black'/>
                            <button className='border-b-2 border-black'>SUBMIT</button>
                        </div>
                    </section>
                </section>
                <section className='mb-20 flex justify-center items-center'>
                    <section className='text-center'>
                        <h1 className='lg:text-[40px] text-[25px] sm:text-[30px] font-medium mb-14'>Follow Products And Discounts On Instagram</h1>
                        <section className='grid-cols-3 lg:grid-cols-6 gap-3 grid'>
                        {products.map((product) => {
                            return(
                                <ProductPage image={product.imageUrl} alt={product.title} id={product.title}/>
                            )
                            })}
                     </section>
                    </section>
                </section> 
                </section>
            </section>
        </section>
    </div>
  )
}

export default Product