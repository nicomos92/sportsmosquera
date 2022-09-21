import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from './CartWitget';

const NavbarComponent =() =>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
            <Container>
                <Navbar.Brand href="/">
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
                        <Nav.Link href="/types">Tipos</Nav.Link>
                        <Nav.Link href="#novedades">Novedades</Nav.Link>
                        <NavDropdown title="Regiones" className="navbar-nav mx-auto">
                            <NavDropdown.Item href="/regions/Johto">Johto</NavDropdown.Item>
                            <NavDropdown.Item href="/regions/Alola">Alola  </NavDropdown.Item>
                            <NavDropdown.Item href="/regions/Galar">Galar</NavDropdown.Item>
                            <NavDropdown.Item href="/regions/Kanto">Kanto</NavDropdown.Item>
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





