import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponente from './CartWidgetComponent';
import { Link } from 'react-router-dom';

const NavbarComponent =(cart) =>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="white">
            <Container>
                <Navbar.Brand as={Link} to={'/'}>
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
                        <Nav.Link as={Link} to={'/Nosotros'}>Nosotros</Nav.Link>
                        <Nav.Link as={Link} to={'/Ofertas'}>Ofertas</Nav.Link>
                        <NavDropdown title="Categorias" className="navbar-nav mx-auto">
                            <NavDropdown.Item className="desplegable" as={Link} to ={'/categoria/001'}>Camisetas</NavDropdown.Item>
                            <NavDropdown.Item className="desplegable" as={Link} to ={'/categoria/002'}>Botines  </NavDropdown.Item>
                            <NavDropdown.Item className="desplegable" as={Link} to ={'/categoria/003'}>Shorts</NavDropdown.Item>
                            <NavDropdown.Item className="desplegable" as={Link} to ={'/categoria/004'}>Otros</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="navbar-nav mx-auto">
                        <Nav.Link as= {Link} to = {'/contacto'}>Contacto</Nav.Link>
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





