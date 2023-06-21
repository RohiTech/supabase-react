//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';

// Create the user interface (Navbar,  Form to create products, product card)
// Setup supabase, create a table for our products
// Implement the CRUD logic for the products

function App() {
  const [ name, setName ] = useState("");
  const [ description, setDescription ] = useState();

  console.log(name);
  console.log(description);

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>Store Products</Navbar.Brand>
          <Nav>
            <Nav.Item>Created by Cooper Codes</Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <h3>Create Product For Superbase Database</h3>
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              type="text"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <br></br>
            <Button>Create Product in Superbase DB</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;