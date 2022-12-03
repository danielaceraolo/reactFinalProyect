import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const InterChange = () => {

    return (
        <>
            <Link to="/cart">
                <Button className="btn btn-light btn-outline-dark m-2">
                    Ir al carrito
                </Button>
            </Link>
            <Link to="/">
                <Button className="btn btn-light btn-outline-dark m-2">
                    Continuar comprando
                </Button>
            </Link>
        </>
    );
};

export default InterChange;