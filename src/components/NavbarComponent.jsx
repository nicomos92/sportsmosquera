import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponente from './CartWidgetComponent';

const NavbarComponent =(cart) =>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="white">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="../2158416.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    
                </Navbar.Brand>
             
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav mx-auto">
                        <Nav.Link href="/types">Nosotros</Nav.Link>
                        <Nav.Link href="/ofertas">Ofertas</Nav.Link>
                        <NavDropdown title="Categorias" className="navbar-nav mx-auto">
                            <NavDropdown.Item className="desplegable" href="/categorias/Camisetas" >Camisetas</NavDropdown.Item>
                            <NavDropdown.Item className="desplegable" href="/categorias/Botines">Botines  </NavDropdown.Item>
                            <NavDropdown.Item className="desplegable" href="/categorias/Shorts">Shorts</NavDropdown.Item>
                            <NavDropdown.Item className="desplegable" href="/categorias/Otros">Otros</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="navbar-nav mx-auto">
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                        <Nav.Link href="#login">Login</Nav.Link>
                    </Nav>
                    <Nav >
                        <CartWidgetComponente cart={cart}/>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;





