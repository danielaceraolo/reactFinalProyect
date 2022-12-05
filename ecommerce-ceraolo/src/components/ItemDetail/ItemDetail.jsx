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
        <div className="row">
            <div className="col">
                <img src={product.img} className='w-50' />
                <p>Categoria: {product.category}</p>
                <p>Precio: {product.price}</p>
                <p>Stock: {product.stock}</p>
            </div>
            <div className="col">
                <Counter stock={10} initial={1} onAdd={onAdd} />
            </div>
            <InterChange />
        </div>
    )
}

export default ItemDetail
