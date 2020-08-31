import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './Coupon.scss';

const Coupon = () => (
  <Container>
    <Row className="coupon">
      <Col className="coupon__title" xs={12}>
        <p>Thêm mã giảm giá</p>
      </Col>
      <Col className="coupon__content" xs={12} md={6} lg={4}>
        <div className="coupon__content__container">
          <div className="coupon__content__code">
            <i className="lni lni-16 lni-gift" />
            <span>VNGTHANG7</span>
            <i className="lni lni-16 lni-checkmark-circle" />
          </div>
          <div className="coupon__content__btn">
            ÁP DỤNG
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Coupon;
