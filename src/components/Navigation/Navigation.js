import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuthContext';
const Navigation = () => {
    const { user, logOut } = useAuth()

    console.log(user.email)
    const cartIcon = <FontAwesomeIcon icon={faCartPlus} />
    return (
        <div>
            <Navbar bg="light" expand="lg" className="border-bottom">
                <Container fluid className="mx-3">
                    <Navbar.Brand href="#home">Hot Onion</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={Link} to="/home">{cartIcon}</Nav.Link>
                            {!user.email && <Nav.Link as={Link} to="/signup">Login</Nav.Link>}
                            {!user.email ?
                                <Nav.Link as={Link} to="/signup"><Button variant="danger" className="rounded-pill">Sign Up</Button></Nav.Link>
                                :
                                <Button onClick={logOut} variant="danger" className="rounded-pill">Log Out</Button>}


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;