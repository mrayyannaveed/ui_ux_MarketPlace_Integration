import React from 'react'
import Featured from '../components/featured'
import FeaturedBoxes from '../components/featuredBoxes'
import New from '../components/new'
import ProductPage from '../components/productPage'
import { twoType } from '@/sanity/schemaTypes/types'
import { sanityFetch } from '@/sanity/lib/fetch'
import { tweProducts } from '@/sanity/lib/queries'

type pro = {
    image: string,
    alt: string,
    alt2: string,
    name: string,
    price: number,
    cart: string,
    new?: {}
    bg?: {}
}

let featuredBoxes: pro[] = [
    {image: "/OurProduct/Image1.png", alt: "featured1", name: "Library Stool Chair", price: 20, cart: "/featured/Cart1.png", new: <New text={"New"} bg={"#00FF66"}/>, alt2: "cart1", bg: "#029FAE"},
    {image: "/OurProduct/Image5.png", alt: "featured2", name: "Library Stool Chair", price: 20, cart: "/featured/Cart.png", new: <New text={"Sales"} bg={"#F5813F"}/>, alt2: "cart",bg: "#fff"},
    {image: "/OurProduct/Image2.png", alt: "featured3", name: "Library Stool Chair", price: 20, cart: "/featured/Cart.png", alt2: "cart",bg: "#fff"},
    {image: "/OurProduct/Image.png", alt: "featured4", name: "Library Stool Chair", price: 20, cart: "/featured/Cart.png", alt2: "cart",bg: "#fff"},
]

type pd = {
    image: string,
    alt: string,
    alt2?: string,
    name: string,
    price: number,
    cart?: string,
    new?: {}
    bg?: {}
}

let featuredBox: pd[] = [
    {image: "/categories/Image1.png", alt: "featured1", name: "Library Stool Chair", price: 20, cart: "/featured/Cart1.png", new: <New text={"New"} bg={"#00FF66"}/>, alt2: "cart1", bg: "#029FAE"},
    {image: "/featured/Image1.png", alt: "featured2", name: "Library Stool Chair", price: 20, cart: "/featured/Cart.png", new: <New text={"Sales"} bg={"#F5813F"}/>, alt2: "cart",bg: "#fff"},
    {image: "/featured/Image2.png", alt: "featured3", name: "Library Stool Chair", price: 20, cart: "/featured/Cart.png", alt2: "cart",bg: "#fff"},
    {image: "/categories/Image3.png", alt: "featured4", name: "Library Stool Chair", price: 20, cart: "/featured/Cart.png", alt2: "cart",bg: "#fff"},
]

const Product = async () => {
    let heading = "All Products"
    const products : twoType[] = await sanityFetch({query: tweProducts})
    console.log(products)
  return (
    <div className='mt-10'>
        <section className='flex justify-center'>
            <section className='w-[90vw] grid sm:w-[85vw] md:w-[80vw] lg:w-[75vw] '>            
                <Featured head={heading}/>
                <section className='grid grid-cols-1 gap-10  sm:grid-cols-2 xl:grid-cols-4  gap-x-4'>
                    {featuredBoxes.map((products) => {
                        return(
                            <FeaturedBoxes image={products.image} alt={products.alt} name={products.name} price={products.price} />
                        )
                    })}
                </section>
                <section className='grid grid-cols-1 gap-10 mt-10  sm:grid-cols-2 xl:grid-cols-4  gap-x-4'>
                    {featuredBox.map((product) => {
                        return(
                            <FeaturedBoxes image={product.image} alt={product.alt} name={product.name} price={product.price} />
                        )
                    })}
                </section>
                <section className='bg-[#1E28320D] mt-20'>

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
                                <ProductPage image={product.imageUrl} alt={product.title}/>
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