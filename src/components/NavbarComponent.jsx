import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from './CartWitget';

const NavbarComponent =() =>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="2158416.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    
                </Navbar.Brand>
             
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav mx-auto">
                        <Nav.Link href="#ofertas">Ofertas</Nav.Link>
                        <NavDropdown title="Marcas" className="navbar-nav mx-auto">
                            <NavDropdown.Item href="#action/3.1">Adidas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Nike </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Topper</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Umbro</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#novedades">Novedades</Nav.Link>
                        <NavDropdown title="Deportes" className="navbar-nav mx-auto">
                            <NavDropdown.Item href="#action/3.1">Futbol</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Basquet </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Hockey</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Otros</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="navbar-nav mx-auto">
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                        <Nav.Link href="#login">Login</Nav.Link>
                    </Nav>
                    <Nav >
                        <CartWidgetComponent/>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;





