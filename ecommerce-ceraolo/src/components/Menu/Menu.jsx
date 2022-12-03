import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './Menu.css'

function Menu() {
    return (
        <Navbar className='Navbar p-5' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className="link">
                <Link to={"/"}>
                    <Navbar.Brand className="p">SNEAKERS</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to="/category/deportivas">Deportivas</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/category/moda">Moda</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/category/accesorios">Accesorios</Link>
                        </Nav.Link>
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