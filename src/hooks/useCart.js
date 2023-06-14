import { useContext } from "react"
import { CartContext } from "../context/cart"



export const useCart = () => {
    const cart = useContext(CartContext)
    if(cart === undefined){
        throw new Error('Estas usando el hook useCart en una parte donde no puedes')
    }
  return (
    cart
  )
}
