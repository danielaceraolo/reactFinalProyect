import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const [order, setOrder] = useState(false);
    const [orderId, setOrderId] = useState({});
    const isInCart = (id) => cartList.findIndex((producto) => producto.id === id);

    const addToCart = (newProductCart) => {
        setOrder(false);
        let index = isInCart(newProductCart.id);
        if (index === -1) {
            setCartList([...cartList, newProductCart]);
        } else {
            cartList[index].quantity += newProductCart.quantity;
            setCartList([...cartList]);
        }
    };

    const removeFromCart = (id) => {
        setCartList(cartList.filter((elem) => elem.id !== id));
    };

    const calcTotal = () => {
        return cartList.reduce(
            (addPrice, product) => (addPrice += product.quantity * product.price),
            0
        );
    };

    const itemQuantity = () => {
        return cartList.reduce((count, product) => (count += product.quantity), 0);
    };
    
    const showOrder = (id) => {
        setOrder(true);
        setOrderId(id);
    };

    const deleteCart = () => {
        setCartList([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartList,
                order,
                orderId,
                isInCart,
                calcTotal,
                itemQuantity,
                addToCart,
                removeFromCart,
                deleteCart,
                showOrder,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;