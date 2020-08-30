import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './Introduction.scss';
import banner from '../../assets/images/BANNER.png';

const Introduction = () => (
  <Container>
    <Row className="introduction">
      <Col className="introduction__banner" xs={12} style={{ padding: 0 }}>
        <img src={banner} alt="" />
      </Col>

      <Col className="introduction__metadata" xs={12}>
        <div className="introduction__metadata__title" style={{ color: 'black' }}>
          <i className="lni lni-16 lni-checkmark-circle" />
          <h3>Highlands Coffee - 123 Nguyễn Đình Chiểu</h3>
        </div>
        <div className="introduction__metadata__address">
          <i className="lni lni-16 lni-map-marker" />
          <p>Lô G15 Tầng trêt, Trung tâm thương mại Aeon Tân Phú, 30 Bờ Bao Tân Thắng, Phường Sơn Kỳ, Quận Tân Phú, Tp.Hồ Chí Minh</p>
        </div>
        <div className="introduction__metadata__time">
          <i className="lni lni-16 lni-timer" />
          <p>08:00 - 22:00</p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Introduction;
