import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

//Import Component
import {Row, Col, Container, Button, Alert, Breadcrumb, Card, Form} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Container fluid>
        <Alert variant='primary'>This is a Button</Alert>
        <Button>Test Button</Button>
        <Breadcrumb>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item>Test 2</Breadcrumb.Item>
          <Breadcrumb.Item>Test 3</Breadcrumb.Item>
        </Breadcrumb>
        <Card className='mt-5'>
          <Card.Img/>
          <Card.Body>
            <Card.Title>
               Card Example
            </Card.Title>
            <Card.Text>
              This is an example of react bootstrap cards
            </Card.Text>
            <Button>Read More</Button>
          </Card.Body>
        </Card>
        <Form>
          <Row>
            <Col>
          <Form.Group controlId='formEmail'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type='email' placeholder='Example@email.com'></Form.Control>
            <Form.Text style={{color: "#fff" }}>We'll never share you email address, trust us!</Form.Text>
          </Form.Group>
            </Col>
            <Col>
          <Form.Group controlId='formPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password'></Form.Control>
          </Form.Group>
          <Button className='mt-3' variant='secondary' type='submit'>Login</Button>
           </Col>
          </Row>
        </Form>
        </Container>
      </header>
    </div>
  );
}

export default App;
