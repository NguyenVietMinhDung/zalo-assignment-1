import React from 'react';
import './Confirm.scss';
import Pickup from './Pickup';
import OrderInfo from './OrderInfo';
import Coupon from './Coupon';
import PaymentMethod from './PaymentMethod';

const Confirm = () => (
  <div className="confirm">
    <Pickup />
    <OrderInfo />
    <Coupon />
    <PaymentMethod />
  </div>
);

export default Confirm;
