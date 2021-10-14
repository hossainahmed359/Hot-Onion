import React from 'react';
import "./NavigationBar.css"
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

//images
import logo from '../../images/logo2.png'

const NavigationBar = () => {
    const cartIcon = <FontAwesomeIcon icon={faCartPlus} />
    return (

        <div>
            <Navbar bg="light" expand="lg" className="shadow">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img className="logo" src={logo} alt="" srcset="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">{cartIcon}</Nav.Link>
                            <Nav.Link href="#action2">Login</Nav.Link>
                            <button className="btn btn-danger rounded-pill">Sign Up</button>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;