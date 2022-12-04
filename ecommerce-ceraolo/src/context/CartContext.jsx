import { createContext, useState, useContext } from "react";
const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])
    const isInCart = (id) => cartList.findIndex(product => product.id === id)
    const addOnCart = (newProductCart) => {

        let index = isInCart(newProductCart.id)
        if (index === -1) {
            setCartList([...cartList, newProductCart])
        } else {
            cartList[index].quantity += newProductCart.quantity
            setCartList([...cartList])
        }
    }

    const deleteCart = () => {
        setCartList([])
    }

    const totalQuantity = () => {
        return cartList.reduce((count, product) => count += product.quantity, 0)
    }

    const totalPrice = () => {
        return cartList.reduce((sumPrecio, product)=> sumPrecio += product.quantity * product.price, 0)
    }


    const deleteByItem = (id) => {
        setCartList(cartList.filter(product => product.id !== id))
    }


    return (
        <CartContext.Provider value={{
            
            cartList,
            addOnCart,
            deleteCart,
            totalPrice,
            totalQuantity,
            deleteByItem,


        }}>

            {children}

        </CartContext.Provider>
    )
}

export default CartContextProvider