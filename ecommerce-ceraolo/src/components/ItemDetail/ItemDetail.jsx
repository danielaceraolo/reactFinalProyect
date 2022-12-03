import { Link } from "react-router-dom";

import { useCartContext } from "../../context/CartContext";
import Counter from './../Counter/Counter';


const ItemDetail = ({ product }) => {
    const [isCounter, setIsCounter] = useState(true)
    const { cartList, agregarAlCarrito } = useCartContext()

    const onAdd = (cantidad) => {
        console.log(cantidad)
        agregarAlCarrito({ ...product, cantidad })
        setIsCounter(false)
    }
    console.log(cartList)

    return (
        <>
            <div className="row">
                <div className="col">
                    <img src={product.img} className="w-25" />
                    <p>Categoría: {product.category}</p>
                    <p>Precio: {product.price}</p>
                    <p>stock: {product.stock}</p>
                </div>
                <div className="col">
                    {isCounter ? (
                        <Counter stock={10} initial={1} onAdd={onAdd} />
                    ) : (
                        <div className="container mt-5">
                            <Link to="/cart" className="btn btn-success">
                                Ir al Carrito
                            </Link>
                            <Link to="/" className="btn btn-success">
                                Continuar comprando{" "}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ItemDetail;
