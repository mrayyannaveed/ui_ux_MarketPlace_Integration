import { defineQuery } from "next-sanity";

export const allproducts = defineQuery(`
    *[_type == "products"]{
    title,
    price,
    priceWithoutDiscount,
    badge,
    category,
    description,
    inventory,
    tags,
    "imageUrl": image.asset->url
    }
    `)

export const fourProducts = defineQuery(`
    *[_type == "products"][0..3]{
    title,
    price,
    priceWithoutDiscount,
    badge,
    category,
    description,
    inventory,
    tags,
    "imageUrl": image.asset->url
    }
    `)



    