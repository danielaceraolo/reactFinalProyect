import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, doc } from "firebase/firestore";
import Spinner from "react-bootstrap/Spinner";

import "./ItemListContainer.css";

const ItemListContainer = (obj) => {
    const { catId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const dbFirestore = getFirestore()
        const getData = async () => {

            const queryRef = !catId
                ? collection(dbFirestore, "items")
                : query(
                    collection(dbFirestore, "items"),
                    where("category", "==", catId)
                );
            const response = await getDocs(queryRef);
            const prod = response.docs.map((doc) => {
                const newProduct = {
                    ...doc.data(),
                    id: doc.id,
                };

                return newProduct;
            });
            setTimeout(() => {

                setProducts(prod);
                setLoading(false)
            }, 2000)
        };

        getData();

    }, [catId])

    return loading ? (
        <h3 className="loading text-center mt-5 p-5">
            <Spinner animation="border" />
        </h3>
    ) : (
        <div className="container text-center">
            <h1 className="subtitle col m-5">Nuestros Productos</h1>
            <div className="products row row-cols-1 row-cols-md-3">
                {products.map((obj) => (
                    <section key={obj.id}>
                        <Link to={`/detail/${obj.id}`}>
                            <div className="card justify-content-center text-center text-dark">
                                <img
                                    className="card-img-top justify-content-center"
                                    src={obj.img}
                                    alt="foto-product"
                                />

                                <div className="card-body justify-content-center">
                                    {" "}
                                    <h5 className="card-title text-center">{obj.name}</h5>
                                    <p>$ {obj.price}</p>
                                    <button className="btn btn-danger">Ver Detalle</button>
                                </div>
                            </div>
                        </Link>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;
