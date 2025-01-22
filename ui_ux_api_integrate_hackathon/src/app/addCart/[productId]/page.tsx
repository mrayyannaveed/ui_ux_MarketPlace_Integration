"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Heart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sanityFetch } from "@/sanity/lib/fetch";
import getProductss from "@/sanity/lib/queries";

const AddCart = ({ params }: { params: { productId: string } }) => {
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const query = getProductss(params.productId); // Create a query using productId
      const data = await sanityFetch({ query });
      setProduct(data[0]); // Assuming the query returns an array
    };

    fetchProduct();
  }, [params.productId]);

  const inCount = () => setCount(count + 1);
  const deCount = () => count > 1 && setCount(count - 1);

  if (!product) {
    return <p className="text-center font-bold">Loading...</p>;
  }

  return (
    <div className="mt-10 mb-20">
      <section className="flex justify-center">
        <section className="w-[90vw] grid gap-20 sm:w-[85vw] md:w-[80vw] lg:w-[75vw] ">
          <section className="grid lg:grid-cols-5 grid-cols-2 gap-8">
            <section className="lg:col-span-3 col-span-2 grid gap-3">
              <h2 className="font-medium text-[22px]">{product.title}</h2>
              <div className="flex flex-col lg:flex-row gap-2 py-2">
                <div className="flex justify-center lg:justify-start pb-4">
                  <Image
                    className="w-[150px] h-[150px]"
                    src={product.imageUrl}
                    alt={product.title}
                    width={400}
                    height={400}
                  />
                </div>
                <div className="flex justify-between w-full lg:w-3/4 lg:pr-5">
                  <div className="grid gap-6 lg:gap-1">
                    <p>{product.description}</p>
                    <p className="text-[#757575] text-[15px]">Category: {product.category}</p>
                    <div className="flex flex-col gap-1">
                      {/* <span className="text-[#757575] flex gap-2 text-[15px]">
                        <span>Size</span>
                        <span>{product.size || "N/A"}</span>
                      </span> */}
                      <div className="flex items-center gap-1">
                        <Button onClick={deCount}>-</Button>
                        <input
                          type="number"
                          value={count}
                          className="w-12 text-center"
                          readOnly
                        />
                        <Button onClick={inCount}>+</Button>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <span>
                        <Heart />
                      </span>
                      <span>
                        <Trash2 />
                      </span>
                    </div>
                  </div>
                  <div>
                    <p>MRP: ${product.price * count}</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="col-span-2 text-[15px] grid gap-6 mt-10 lg:mt-0 lg:gap-0">
              <h1 className="text-[21px] font-medium">Summary</h1>
              <div className="text-[#111111] flex justify-between">
                <span>Subtotal</span>
                <span>${product.price * count}</span>
              </div>
              <div className="flex justify-between text-[#111111] text-[15px]">
                <span>Estimated Delivery & Handling</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-[#111111] text-[15px]">
                <span>Total</span>
                <span>${product.price * count}</span>
              </div>
              <Button className="text-[#FFFFFF] bg-[#029FAE] h-[60px] rounded-full">
                Member Checkout
              </Button>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};

export default AddCart;
