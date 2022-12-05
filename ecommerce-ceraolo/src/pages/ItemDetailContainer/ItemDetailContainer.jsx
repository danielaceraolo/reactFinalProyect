import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from 'firebase/firestore'

import ItemDetail from './../../components/ItemDetail/ItemDetail';
import Spinner from 'react-bootstrap/Spinner';


const ItemDetailContainer = () => {
    const { productId } = useParams();
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProduct = async () => {
            const dbFirestore = getFirestore();
            const queryRef = doc(dbFirestore, "items", productId);
            const response = await getDoc(queryRef);

            const newItem = {
                id: response.id,
                ...response.data(),
            };
            setTimeout(() => {
                setItem(newItem);
                setLoading(false);
            }, 2000);
        };

        getProduct();
    }, [productId]);


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
