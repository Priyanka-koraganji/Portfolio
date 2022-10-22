import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";



export const Navigation = () => {
    return (
        <div>
            <Navbar className='navbar'>
                <Container className='nav-container'>
                    <Navbar.Brand href="#home" className='nav-brand'>
                        <Nav.Link href="#home" color="#25edf0" className="nav-link">Priyanka Koraganji</Nav.Link>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home" color="#25edf0" className="nav-link">Home</Nav.Link>
                        <Nav.Link href="#about" color="#25edf0" className="nav-link">About</Nav.Link>
                        <Nav.Link href="#projects" color="#25edf0" className="nav-link">Projects</Nav.Link>
                        <Nav.Link href="#contact" color="#25edf0" className="nav-link">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}