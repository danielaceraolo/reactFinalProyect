import { useCartContext } from "../../context/CartContext";

const Cart = () => {
    const { cartList, emptyCart } = useCartContext();

    return (
        <div>
            <h1>Carrito</h1>
            <ul>
                {cartList.map((product) => (
                    <li key={product.id}>
                        <img src={product.img} className="w-25" />
                        Nombre: {product.name} - Precio {product.price} - Cantidad:{" "}
                        {product.quantity}
                    </li>
                ))}
            </ul>
            <button onClick={emptyCart}>Vaciar carrito</button>
        </div>
    );
};

export default Cart;