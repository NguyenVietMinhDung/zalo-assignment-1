import React from 'react';
import { Row, Col } from 'react-grid-system';
import './Note.scss';

const Note = () => (
  <Row>
    <Col className="note" xs={12}>
      <div className="note__icon">
        <i className="lni lni-16 lni-notepad" />
      </div>
      <div className="note__input">
        <input type="text" placeholder="Nhập ghi chú" />
      </div>
    </Col>
  </Row>
);

export default Note;
