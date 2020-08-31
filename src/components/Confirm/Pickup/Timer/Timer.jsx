import React from 'react';
import { Row, Col } from 'react-grid-system';
import './Timer.scss';

const Timer = () => (
  <Row>
    <Col className="time" xs={12}>
      <div className="time__icon">
        <i className="lni lni-16 lni-timer" />
      </div>
      <div className="time__value">
        ASAP - 15:30, Hôm nay 30/06
      </div>
      <div className="time__modify-btn">
        <i className="lni lni-sm lni-chevron-right" />
      </div>
    </Col>
  </Row>
);

export default Timer;
