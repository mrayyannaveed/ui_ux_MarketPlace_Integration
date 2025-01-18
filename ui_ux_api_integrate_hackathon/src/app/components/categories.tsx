import React from 'react'
import SectionHeading from './sectionHeading'
import CategoryBoxes from './categoryBoxes'

const Categories = () => {
    type pro = {
        image: string,
        alt: string,
        desc: string,
        buyer: string,
        alt2?: string,
        name?: string,
        price?: string,
        cart?: string,
        new?: {}
        bg?: {}
    }
    let categories = [
        {image: "/categories/Image1.png", alt: "Chair", desc: "Wing Chair", buyer: "3,584 Products"},
        {image: "/categories/Image2.png", alt: "Chair", desc: "Wooden Chair", buyer: "157 Products"},
        {image: "/categories/Image3.png", alt: "Chair", desc: "Desk Chair", buyer: "3154 Products"},
    ]
    let heading = "Top Categories"
    return (
        <div className='mb-10'>
            <section className='flex justify-center'>
                <section className='w-[90vw]  gap-4 sm:w-[85vw] md:w-[80vw] lg:w-[75vw] '>
                    <div className='text-center sm:text-left mb-4'>
                    <SectionHeading head={heading}/>
                    </div>
                    <section className=''>
                        <section className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                            {categories.map((products) => {
                                return(
                                    <CategoryBoxes image={products.image} alt={products.alt} chair={products.desc} products={products.buyer}/>
                                )
                            })}
                        </section>
                    </section>
                </section>
                
            </section>
        </div>
      )
    }

export default Categories