import React from 'react';
import './Menubar.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <>
            <Navbar bg="" variant="light" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className="title fw-bolder"> Iftekhar Hasan </Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse className=" justify-content-end">
                        <Nav className="me-auto fw-bold heading">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menubar;