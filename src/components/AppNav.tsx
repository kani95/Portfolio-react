 import React from 'react'
 import { Navbar, Nav, Offcanvas } from 'react-bootstrap'
 import Container from 'react-bootstrap/Container'
 
 export default class AppNav extends React.Component {
   render() {
     return (
      <div>
        {['md'].map((expand) => (
          <Navbar bg="dark" variant='dark' expand={expand} className="mb-3">
            <Container fluid>
              <Navbar.Brand href="#">My Portfolio</Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    My portfolio
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Projects</Nav.Link>
                    <Nav.Link href="#action3">Technologies</Nav.Link>
                    <Nav.Link href="#action3">Academics</Nav.Link>
                    <Nav.Link href="#action3">Profile</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
        </Navbar>
      ))}
       </div>
     )
   }
 }
 