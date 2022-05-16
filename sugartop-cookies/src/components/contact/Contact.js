import React from "react";
import { 
  Container,
  Form
 } from 'react-bootstrap'

function Contact() {
  return (
  <Container>
    <h1 className="text-center py-3" >Contact Us!</h1>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>E-mail</Form.Label>
        <Form.Control placeholder="E-mail" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control placeholder="(123) 123-4567" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Details</Form.Label>
        <Form.Control placeholder="Details" as="textarea" className="w-20" style={{ height: '100px' }} />
      </Form.Group>

      </Container> 
  );
}

export default Contact;