import React from 'react';
import { Row, Col } from 'react-grid-system';
import './Address.scss';
import pickupOrder from '../../../../assets/images/PICKUP_ORDER.png';

const Address = () => (
  <Row className="address">
    <Col xs={3}>
      <img src={pickupOrder} alt="" />
    </Col>
    <Col xs={9}>
      <div className="address__name">
        <div>Highlands Coffee - VNG campus</div>
        <div>Thay đổi</div>
      </div>
      <div className="address__description">
        Z06 Đường số 13, KCX Tân Thuận, P.Tân Thuận Đông, Quận 7
      </div>
    </Col>
  </Row>
);

export default Address;
