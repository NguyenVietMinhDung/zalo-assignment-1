// @flow
/* eslint-disable import/no-dynamic-require,global-require */
import React from 'react';
import Truncate from 'react-truncate';
import { Row, Col } from 'react-grid-system';
import { Props } from './type';
import './Product.scss';
import Ellipsis from '../../../Ellipsis';
import formatPrice from '../../../../utils/formatPrice';

const Product = (props: Props) => {
  const {
    name, description, price, oldPrice, img, editable, quantity,
  } = props;
  const newFormattedPrice = formatPrice(price, 'de-DE', 'đ');
  const oldFormattedPrice = oldPrice ? formatPrice(oldPrice, 'de-DE', 'đ') : null;
  const imgSrc = img ? require(`../../../../assets/images/${img}`) : '';
  return (
    <Row className="product">
      <Col xs={3}>
        <img src={imgSrc} alt="" />
      </Col>
      <Col xs={6}>
        <div className="product__name">
          <Truncate lines={2} ellipsis={<Ellipsis />}>
            {name}
          </Truncate>
        </div>
        <div className="product__description">
          <Truncate lines={1} ellipsis={<Ellipsis />}>
            {description}
          </Truncate>
        </div>
      </Col>
      <Col className="product__price" xs={3}>
        <div className="product__price--new">
          {newFormattedPrice}
        </div>
        <div className="product__price--old">
          {oldFormattedPrice}
        </div>
      </Col>
      {editable && (
        <>
          <Col className="product__edit-btn" xs={6} offset={{ xs: 3, md: 3, lg: 3 }}>
            <span>Chỉnh sửa</span>
          </Col>
          <Col className="product__quantity" xs={3}>
            <span>{`x${quantity}`}</span>
          </Col>
        </>
      )}
    </Row>
  );
};

export default Product;
