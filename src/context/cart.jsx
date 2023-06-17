import { createContext, useState } from "react"


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const addToCart = product => {
        const productInCartIndex = cart.findIndex(item => item.id == product.id)
        if(productInCartIndex >= 0){
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity+=1
            newCart[productInCartIndex].price+=newCart[productInCartIndex].price
            return setCart(newCart)
        }

        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity:1
            }
        ]))
    }
    const clearCart = () => {
        setCart([])
    }

    const deleteItemInCart = (product) => {
        console.log('Producto elimnado: ', product)
        const productInCartIndex = cart.findIndex(item => item.id == product.id)
        if (productInCartIndex !== -1) {
            // Crear una copia del array cart
            const updatedCart = [...cart];
            // Eliminar el elemento utilizando splice()
            updatedCart.splice(productInCartIndex, 1);
            // Actualizar el estado del cart con el nuevo array sin el elemento eliminado
            setCart(updatedCart);
          }
    }
  return (
    <CartContext.Provider value={{cart, addToCart, clearCart, deleteItemInCart}}>
        {children}
    </CartContext.Provider>
  )
}
