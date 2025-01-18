import React from 'react'
import SectionHeading from './sectionHeading';
import Featured from './featured';
import FeaturedBoxes from './featuredBoxes';
import New from './new';

const OurProducts = () => {
    type pro = {
        image: string,
        alt: string,
        alt2: string,
        name: string,
        price: string,
        cart: string,
        new?: {}
        bg?: {}
    }

    let featuredBoxes: pro[] = [
        {image: "/OurProduct/Image1.png", alt: "featured1", name: "Library Stool chair", price: "$20", cart: "/featured/Cart1.png", new: <New text={"New"} bg={"#00FF66"}/>, alt2: "cart1", bg: "#029FAE"},
        {image: "/OurProduct/Image5.png", alt: "featured2", name: "Library Stool chair", price: "$20", cart: "/featured/Cart.png", new: <New text={"Sales"} bg={"#F5813F"}/>, alt2: "cart",bg: "#fff"},
        {image: "/OurProduct/Image2.png", alt: "featured3", name: "Library Stool chair", price: "$20", cart: "/featured/Cart.png", alt2: "cart",bg: "#fff"},
        {image: "/OurProduct/Image.png", alt: "featured4", name: "Library Stool chair", price: "$20", cart: "/featured/Cart.png", alt2: "cart",bg: "#fff"},
    ]
    let heading = "Our Products";
  return (
    <div className='mb-20'>
        <section className='flex justify-center'>
            <section className='w-[90vw]  gap-4 sm:w-[85vw] md:w-[80vw] lg:w-[75vw] '>
                <div className='text-center'>
                <SectionHeading head={heading}/>
                </div>
                <Featured head={""}/>
                <section className='grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-4  gap-x-4'>
                    {featuredBoxes.map((products) => {
                        return(
                            <FeaturedBoxes image={products.image} alt={products.alt} name={products.name} price={products.price} cart={products.cart} new={products.new} bg={products.bg}/>
                        )
                    })}
                </section>
            </section>
        </section>
    </div>
  )
}

export default OurProducts