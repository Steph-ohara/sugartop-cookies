import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { BsFacebook, BsInstagram } from 'react-icons/bs'

function Footer() {
  return (
    <Container
      className="text-center text-black"
    >
      <Container className='pt-2'>
        <section className='mb-2'>
        <a tag='a' color='none' className='m-2 ' style={{ color: '#ac2bac' }}
          >
            <BsInstagram size='30px'/>
          </a>

        <a color='none' className='m-2' style={{ color: '#3b5998' }}>
        <BsFacebook size='30px'/>
        </a>

        </section>
      </Container>

      <div
        className="text-center text-dark"
        style={{ backgroundColor: "white" }}
      >
        © 2020 Copyright:
        <a className="text-dark" href="https://sugartopcookies.com/">
          SugartopCookies.com
        </a>
      </div>
    </Container>
  );
}

export default Footer;
