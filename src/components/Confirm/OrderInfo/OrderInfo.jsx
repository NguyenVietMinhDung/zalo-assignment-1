import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './OrderInfo.scss';
import Product from '../../Categories/Category/Product';

const products = [
  {
    id: 0,
    name: 'Latte - This is a long text - Please use truncate the text if it is longer than 2 lines',
    description: 'Note - This text is not longer than 1 line',
    price: 99000,
    img: '270_crop_LATTE.png',
    quantity: 2,
    editable: true,
  },
  {
    id: 1,
    name: 'Cappuccino',
    description: 'Cappuccino',
    price: 39000,
    img: '270_crop_CAPPUCINO.png',
    quantity: 1,
    editable: true,
  },
];

const OrderInfo = () => (
  <div className="order-info">
    <Container className="order-info__container">
      <Row>
        <Col xs={12}>
          <h3>Thông tin đơn hàng</h3>
        </Col>
      </Row>

      {products.map(product => <Product key={product.id} {...product} />)}

      <Row className="order-info__cost">
        <Col xs={6}>
          Tạm tính
        </Col>
        <Col xs={6}>
          117.000đ
        </Col>
      </Row>

      <Row className="order-info__cost">
        <Col xs={6}>
          Mã giảm giá
        </Col>
        <Col className="order-info__cost__discount-value" xs={6}>
          -10.000đ
        </Col>
      </Row>

      <Row className="order-info__cost">
        <Col xs={6}>
          Tổng tiền
        </Col>
        <Col className="order-info__cost__total-value" xs={6}>
          107.000đ
        </Col>
      </Row>
    </Container>
  </div>
);

export default OrderInfo;
