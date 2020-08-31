import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './PaymentMethod.scss';
import zalopay from '../../../assets/images/ZALOPAY.png';

const PaymentMethod = () => (
  <Container>
    <Row className="payment-method">
      <Col xs={12}>
        <div className="payment-method__title">
          <span>Chỉ thanh toán bằng</span>&nbsp;
          <img src={zalopay} alt="" />
        </div>
      </Col>
      <Col xs={12}>
        <div className="payment-method__btn-container">
          <div className="payment-method__btn">
            Thanh toán 107.000đ
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default PaymentMethod;
