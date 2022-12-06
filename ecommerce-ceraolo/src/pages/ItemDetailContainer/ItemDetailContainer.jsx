import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from 'firebase/firestore'

import ItemDetail from './../../components/ItemDetail/ItemDetail';
import Spinner from 'react-bootstrap/Spinner';


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {

        const db = getFirestore()
        const queryCollection = doc(db, "items", productId)
        getDoc(queryCollection)
            .then((doc) => setProduct({ id: doc.id, ...doc.data() }))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [productId])


    return loading ? (
        <div className="d-flex justify-content-center">
            <Spinner />
        </div>
    ) : (
        <div className="m-5">
            <ItemDetail product={product} />
        </div>
    );
}

export default ItemDetailContainer
