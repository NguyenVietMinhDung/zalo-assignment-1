import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './Introduction.scss';
import banner from '../../assets/images/BANNER.png';

const SearchBox = () => (
  <Container>
    <Row className="introduction">
      <Col className="introduction__banner" xs={12} style={{ padding: 0 }}>
        <img src={banner} alt="" />
      </Col>
    </Row>
  </Container>
);

export default SearchBox;
