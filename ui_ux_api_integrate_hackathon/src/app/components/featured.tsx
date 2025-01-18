import React from 'react'
import SectionHeading from './sectionHeading'
import FeaturedBoxes from './featuredBoxes'
import New from './new'

const Featured = (props:any) => {
    let heading;
    if(props.head == null){
        heading = "Featured Products"
    } else {
        heading = props.head
    }
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
        {image: "/featured/Image.png", alt: "featured1", name: "Library Stool chair", price: "$20", cart: "/featured/Cart1.png", new: <New text={"New"} bg={"#00FF66"}/>, alt2: "cart1", bg: "#029FAE"},
        {image: "/featured/Image1.png", alt: "featured2", name: "Library Stool chair", price: "$20", cart: "/featured/Cart.png", new: <New text={"Sales"} bg={"#F5813F"}/>, alt2: "cart",bg: "#fff"},
        {image: "/featured/Image2.png", alt: "featured3", name: "Library Stool chair", price: "$20", cart: "/featured/Cart.png", alt2: "cart",bg: "#fff"},
        {image: "/featured/Image3.png", alt: "featured4", name: "Library Stool chair", price: "$20", cart: "/featured/Cart.png", alt2: "cart",bg: "#fff"},
    ]
  return (
    <div className='mb-20'>
        <section className='flex justify-center'>
            <section className='w-[90vw] grid gap-8 sm:w-[85vw] md:w-[80vw] lg:w-[75vw] '>
                <div className='text-center sm:text-left'>
                <SectionHeading head={heading}/>
                </div>
                <section className='grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-4  gap-10'>
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

export default Featured