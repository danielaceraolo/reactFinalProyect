import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { useState } from "react"
import Counter from "../Counter/Counter"



const ItemDetail = ({ item }) => {
    const [isCounter, setIsCounter] = useState(true)
    const { addToCart } = useCartContext()

    const onAdd = (quantity) => {

        addToCart({ ...item, quantity })
        setIsCounter(false)
    }


    return (
        <>
            <div className="row">
                <div className="col">

                    <img src={item.foto} className="w-25" />
                    <p>Categoría: {item.categoria}</p>
                    <p>Precio: {item.price}</p>
                    <p>stock: {item.stock}</p>
                </div>
                <div className="col">
                    {isCounter ?
                        <Counter stock={10} initial={1} onAdd={onAdd} />
                        :
                        <div className="container mt-5">
                            <Link to='/cart' className="btn btn-success">Finalizar compra</Link>
                            <Link to='/' className="btn btn-success">Continuar compra</Link>
                        </div>
                    }

                </div>

            </div>

        </>
    )
}

export default ItemDetail