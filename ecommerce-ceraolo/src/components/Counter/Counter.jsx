import { useState } from 'react'

import './Counter.css'

const Counter = ({ initial = 1, stock = 100, onAdd }) => {
    const [Quantity, setQuantity] = useState(initial)

    const add = () => {
        if (Quantity < stock) {
            setQuantity(Quantity + 1)
        }
    }

    const subtract = () => {
        if (Quantity > 1) {
            setQuantity(Quantity - 1)
        }
    }

    const addQuantity = () => {
        onAdd(Quantity)
    }
    return (
        <div className='border border-2 border-primary container w-50'>
            <button className='btn btn-outline-primary' onClick={add}>-</button>
            <label>{Quantity}</label>
            <button className="btn btn-outline-primary" onClick={subtract}>+</button><br />
            <button className='btn btn-outline-primary' onClick={addQuantity}>Agregar al carrito</button>

        </div>
    )
}

export default Counter