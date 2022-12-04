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
        const dbFirestore = getFirestore()
        const queryCollection = doc(dbFirestore, 'Items', productId)
        getDoc(queryCollection)
            .then((doc) => setProduct({ id: doc.id, ...doc.data() }))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [productId])


    return loading ? (
        <div className="d-flex justify-content-center ">
            <Spinner />
        </div>
    ) : (
        <div className="m-5">
            <ItemDetail product={product}/>
        </div>
    );
}

export default ItemDetailContainer
