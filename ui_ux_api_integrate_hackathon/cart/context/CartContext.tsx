// "use client"

// import { createContext, useState } from "react"

// interface CartItem{
//     itemId: string,
//     name: string,
//     price: number,
//     image: string,
//     quantity: number,
//     alt: string,
// }

// interface cartContextType {
//     cart: CartItem[],
//     addToCart: (item: CartItem) => void,
//     removeFromCart: (itemId: string) => void,
//     updateQuantity:(itemId: string, quantity: number) => void
// }

// const CartContext = createContext<cartContextType | undefined>(undefined)

// export const CartProvider = ({ children }: { children: React.ReactNode }) => {
//     const [cart, setCart] = useState<CartItem[]>([])
// }

// const addToCart = (item: CartItem) => {
//     // console.log(`Adding item:`, item);
//     setCart((prevCart) => {
//     // Check if item already exists in the cart
//     const existingItem = prevCart.find(
//     (cartitem:any) =>
//     cartitem.itemId === item.itemId
//     ) }
// }

// function setCart(arg0: (prevCart: any) => void) {
//     throw new Error("Function not implemented.")
// }
