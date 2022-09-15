import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from "react-router-dom"
import {Badge , Form,DropdownButton, Dropdown ,Button, InputGroup} from "react-bootstrap"
const HeaderComponent = () => {
  return (
    <div>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">

        <Navbar.Brand href="/">SHOPPY</Navbar.Brand>
        
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav> 
            <InputGroup>
          <DropdownButton id="dropdown-basic-button" title="all">
            <Dropdown.Item>Electronics</Dropdown.Item>
            <Dropdown.Item>Books</Dropdown.Item>
            <Dropdown.Item>Art</Dropdown.Item>
            
          </DropdownButton>
            <Form.Control type="text" placeholder="search in shop" />

            <Button variant="warning">
            <i className="bi bi-search"></i>
            </Button>
            </InputGroup>
            </Nav>
            <LinkContainer to="/admin/orders">
            <Nav.Link href="#features">admin
            {/* <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span> */}
            </Nav.Link>

            </LinkContainer>

            <LinkContainer to="/login">
            <Nav.Link href="#features">Login
            
            </Nav.Link>

            </LinkContainer>

            

          <LinkContainer to="/register">
          <Nav.Link href="#features">Register

          </Nav.Link>

          </LinkContainer>

            
              
          <LinkContainer to="/cart">
          
            <Nav.Link href="#pricing">
            <i className="bi bi-cart"></i>
            <span className="ms-1"></span>
              Cart
              <span className="ms-1">
              <Badge pill bg="danger">
              2
            </Badge>
              </span>
            
            
            </Nav.Link>
          </LinkContainer>
            <NavDropdown title="John Doe" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} eventKey="/user/my-orders" to="/user/my-orders">My Orders</NavDropdown.Item>

              <NavDropdown.Item as={Link} eventKey="/user" to="/user">My Profile</NavDropdown.Item>

              <NavDropdown.Item as={Link} eventKey="/logout" to="/logouty">Logout</NavDropdown.Item>
             
            </NavDropdown>
         
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default HeaderComponent