import { Button } from "react-bootstrap";
import { useCartContext } from "../../../context/CartContext";
import CartItem from './../CartItem/CartItem';


const CartList = () => {
    const { cartList, deleteCart } = useCartContext();

    return (
        <div>
            <ul className="d-flex flex-column justify-content-center align-items-center p-2 m-2">
                {cartList.map((product) => (
                    <CartItem product={product} key={product.id} />
                ))}
            </ul>
            <Button
                className="btn btn-dark btn-outline-light border-dark"
                onClick={deleteCart}>
                Vaciar carrito
            </Button>
        </div>
    );

};

export default CartList