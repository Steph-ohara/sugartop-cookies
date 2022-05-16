import React from "react";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

function Gallery() {
  return (
    <Container>
        <h1 className="text-center py-3" >Gallery</h1>

    <Row className='row-cols-1 row-cols-md-3 g-4'>
        
        <Col>
        <Card className='h-100'>
          <Card.Img
            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
            alt='...'
            position='top'
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        
        <Col>
        <Card className='h-100'>
          <Card.Img
            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
            alt='...'
            position='top'
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>This is a short card.</Card.Text>
          </Card.Body>
        </Card>
        </Col>
        
        <Col>
        <Card className='h-100'>
          <Card.Img
            src='https://mdbootstrap.com/img/new/standard/city/043.webp'
            alt='...'
            position='top'
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural lead-in to additional content.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        
        <Col>
        <Card className='h-100'>
          <Card.Img
            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
            alt='...'
            position='top'
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
    
    </Row>
</Container>
  );
}

export default Gallery;
