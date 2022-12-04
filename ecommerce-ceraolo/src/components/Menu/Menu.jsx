import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import './Menu.css'
import CartWidget from './../CartWidget/CartWidget';

function Menu() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">SNEAKERS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/deportivas">Deportivas</Link>
                        <Link to="/moda">Moda</Link>
                        <Link to="/accesorios">Accesorios</Link>
                    </Nav>
                    <Nav>
                        <Link to={"/cart"}>
                            <CartWidget />
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;