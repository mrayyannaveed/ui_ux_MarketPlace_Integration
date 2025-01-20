// import React from 'react'
// import SectionHeading from './sectionHeading'
// import FeaturedBoxes from './featuredBoxes'
// import New from './new'
// import { sanityFetch } from '@/sanity/lib/fetch'
// import { allproducts } from '@/sanity/lib/queries'
// import { headType, productsType } from '@/sanity/schemaTypes/types'


// const Featured = async (props:headType) => {
//     let heading;
//     if(props.head == null){
//         heading = "Featured Products"
//     } else {
//         heading = props.head
//     }

//     const products : productsType[] = await sanityFetch({query: allproducts})
//     console.log(products)

//   return (
//     <div className='mb-20'>
//         <section className='flex justify-center'>
//             <section className='w-[90vw] grid gap-8 sm:w-[85vw] md:w-[80vw] lg:w-[75vw] '>
//                 <div className='text-center sm:text-left'>
//                 <SectionHeading head={heading}/>
//                 </div>
//                 <section className='grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-4  gap-10'>
//                     {products.map((product: productsType) => {
//                         return(
//                             <FeaturedBoxes image={product.imageUrl} alt={product.title} desc={product.description} name={product.title} price={product.price} id={product.title}/>
//                         )
//                     })}
//                 </section>
//             </section>
            
//         </section>
//     </div>
//   )
// }

// export default Featured


"use client"

import React, { useState, useEffect } from 'react';
import SectionHeading from './sectionHeading';
import FeaturedBoxes from './featuredBoxes';
import { sanityFetch } from '@/sanity/lib/fetch';
import { allproducts } from '@/sanity/lib/queries';
import { headType, productsType } from '@/sanity/schemaTypes/types';
import { useRouter } from 'next/navigation';

const Featured = ({ head }: headType) => {
  const [products, setProducts] = useState<productsType[] | null>(null);
  const heading = head || "Featured Products";

  const router = useRouter()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await sanityFetch({ query: allproducts });
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
    router.refresh()
  }, []);


  if (!products) {
    // Render a loading state while products are being fetched
    return <div>Loading...</div>;
  }

  return (
    <div className="mb-20">
      <section className="flex justify-center">
        <section className="w-[90vw] grid gap-8 sm:w-[85vw] md:w-[80vw] lg:w-[75vw]">
          <div className="text-center sm:text-left">
            <SectionHeading head={heading} />
          </div>
          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
            {products.map((product: productsType) => (
              <FeaturedBoxes
                key={product._id}
                image={product.imageUrl}
                alt={product.title}
                desc={product.description}
                name={product.title}
                price={product.price}
                id={product.title}
              />
            ))}
          </section>
        </section>
      </section>
    </div>
  );
};

export default Featured;
