import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import SearchBox from './SearchBox';
import Metadata from './Metadata';
import ShopSelector from './ShopSelector';
import './Introduction.scss';
import banner from '../../../assets/images/BANNER.png';

const Introduction = () => (
  <Container>
    <Row className="introduction">
      <Col className="introduction__banner" xs={12} style={{ padding: 0 }}>
        <img src={banner} alt="" />
      </Col>

      <Col className="introduction__search-box" xs={12} md={4} lg={3} offset={{ md: 8, lg: 9 }}>
        <SearchBox />
      </Col>

      <Col className="introduction__metadata" xs={12}>
        <Metadata />
      </Col>

      <Col xs={12}>
        <ShopSelector />
      </Col>
    </Row>
  </Container>
);

export default Introduction;
