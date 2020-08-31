import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './Pickup.scss';
import Address from './Address';
import Note from './Note';
import Timer from './Timer';

const Pickup = () => (
  <Container>
    <Row className="pickup">
      <Col xs={12}>
        <h3>Tự đến lấy</h3>
      </Col>
      <Col xs={12}>
        <Address />
      </Col>
      <Col xs={12}>
        <Timer />
      </Col>
      <Col xs={12}>
        <Note />
      </Col>
    </Row>
  </Container>
);

export default Pickup;
