import React from 'react'
import logo from '../img/logo.png';
import avatar from '../img/avatar.png';
import { Navbar, Nav, Dropdown, Button, Row, Col, Form, DropdownButton } from "react-bootstrap";
import { MDBIcon } from 'mdb-react-ui-kit';

export default function NavbarComponent() {
  return (
    <header className="App-header">
        <Navbar expand="lg" className="bg-dark px-3" data-bs-theme="dark">
            <Navbar.Brand href="#home"><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="d-flex align-items-center justify-content-between">
                    <div className='d-flex align-items-center justify-content-start'>
                        <Nav.Link className='fs-5 pe-4' href="#home">Home</Nav.Link>
                        <Nav.Link className='fs-5 pe-4' href="#1">TV Shows</Nav.Link>
                        <Nav.Link className='fs-5 pe-4' href="#2">Movies</Nav.Link>
                        <Nav.Link className='fs-5 pe-4' href="#3">Recently Added</Nav.Link>
                        <Nav.Link className='fs-5 pe-4' href="#4">My List</Nav.Link>
                    </div>
                    <div className='d-flex align-items-center justify-content-end pe-5'>
                        <Form inline>
                            <Row>
                                <Col xs="auto">
                                    <Form.Control type="text" placeholder="Search" className=" mr-sm-2" />
                                </Col>
                                <Col xs="auto">
                                    <Button type="button"><MDBIcon fas icon="search" /></Button>
                                </Col>
                            </Row>
                        </Form> 

                        <DropdownButton align="end" id="dropdown-item-button" variant="btn btn-outline-none text-none" title= {<img src={avatar} className="Avatar-logo img-fluid " width='30em' alt='Avatar'></img>}>
                                <Dropdown.Item as="button">Action</Dropdown.Item>
                                <Dropdown.Item as="button">Another action</Dropdown.Item>
                                <Dropdown.Item as="button">Something else</Dropdown.Item>
                                <Dropdown.Item as="button">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item as="button">Edit Profile</Dropdown.Item>
                        </DropdownButton>
                    </div>
            </Navbar.Collapse>
        </Navbar>
    </header>
  )
}
