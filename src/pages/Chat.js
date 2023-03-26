import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Sidbar from '../components/Sidbar';
import MessageForm from '../components/MessageForm';
function Chat() {
    return (
      <Container>
      <Row>
          <Col md={4} >
          <Sidbar/>
          </Col>
          <Col md={8} >
           <MessageForm/>
          </Col>
      </Row>
  </Container>
    )
  }
  export default Chat;
