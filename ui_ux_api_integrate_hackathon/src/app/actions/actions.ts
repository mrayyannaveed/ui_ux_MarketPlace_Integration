import { productsType } from "@/sanity/schemaTypes/types";

export const addToCart = (product: productsType) => {
    const cart: productsType[] = JSON.parse(localStorage.getItem('cart') || '[]')
    
    const existingProductIndex = cart.findIndex(item => item._id === product._id)


    if(existingProductIndex > -1){
        cart[existingProductIndex].inventory += 1
    } else {
        cart.push({...product, inventory: 1})
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeFromCart = (productId: string) => {
    let cart: productsType[] = JSON.parse(localStorage.getItem('cart') || '[]')
    cart = cart.filter(item => item._id !== productId)
    localStorage.setItem('cart', JSON.stringify(cart))
}


export const updateCartQuantity = (productId: string, quantity: number) => {
    const cart: productsType[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const productIndex = cart.findIndex(item => item._id === productId)

    if(productIndex > -1){
        cart[productIndex].inventory = quantity
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}


export const getCartItems = () : productsType[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
}