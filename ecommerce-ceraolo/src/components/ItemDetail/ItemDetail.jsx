import { useCartContext } from './../../context/CartContext';
import Counter from './../Counter/Counter';
import InterChange from './../InterChange/InterChange';



const ItemDetail = ({ product }) => {

    const { cartList, addOnCart } = useCartContext()

    const onAdd = (quantity) => {
        console.log(quantity);
        addOnCart({ ...product, quantity })
    }

    console.log(cartList);

    return (
        <div className="container">
            <div className="row">
                <div className="col justify-content-center align-items-center text-center p-1 m-1">
                    <img src={product.img} className='w-50' />
                    <p>Categoria: {product.category}</p>
                    <p>Precio: {product.price}</p>
                    <p>Stock: {product.stock}</p>
                </div>
                <div className="col text-center p-1 m-1">
                    <Counter stock={5} initial={1} onAdd={onAdd} />
                </div>
                <InterChange />
            </div>
        </div>
    )
}

export default ItemDetail
