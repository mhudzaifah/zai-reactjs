import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from "react-bootstrap";
import Styled from "../Styled/Tabel";



export default class Bootstrap extends React.Component {
    render() {
        return(
            <div>
                <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#home">Muhammad Hudzaifah</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Biografi</Nav.Link>
                        <Nav.Link href="#features">Content</Nav.Link>
                    </Nav>
                </Container>
                </Navbar>
                <Styled />
            </div>  
        )
    }
}