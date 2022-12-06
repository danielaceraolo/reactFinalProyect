import { Alert } from "react-bootstrap";
import { useCartContext } from "../../../context/CartContext"


const Order = () => {
    const {orderId} = useCartContext();
    return (
        <Alert variant="success">
            N° de Orden {orderId}.
            <br />
            Gracias por tu compra!
        </Alert>
    );
};

export default Order;