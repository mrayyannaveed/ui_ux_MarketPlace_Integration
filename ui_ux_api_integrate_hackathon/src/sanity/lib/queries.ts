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

export const fiveProducts = defineQuery(`
    *[_type == "products"][0..4]{
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

export const tweProducts = defineQuery(`
    *[_type == "products"][0..11]{
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

    export default function getProducts(id?: string){ 
            const proIdSlug = defineQuery(`*[_type == "products" && title == "${id}"]{
        _id,
        title,
        price,
        badge,
        category,
        description,
        inventory,
        tags,
        "imageUrl": image.asset->url
        }`
    )   
    return proIdSlug  
    }

export const getProductss = (id: string) => `
  *[_type == "product" && _id == "${id}"]{
    _id,
    title,
    description,
    price,
    imageUrl,
    category,
  }
`;
