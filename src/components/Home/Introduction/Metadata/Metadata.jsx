import React from 'react';
import './Metadata.scss';

const Metadata = () => (
  <div className="metadata">
    <div className="metadata__title" style={{ color: 'black' }}>
      <i className="lni lni-16 lni-checkmark-circle" />
      <h3>Highlands Coffee - 123 Nguyễn Đình Chiểu</h3>
    </div>
    <div className="metadata__address">
      <i className="lni lni-16 lni-map-marker" />
      <p>
        Lô G15 Tầng trêt, Trung tâm thương mại Aeon Tân Phú, 30 Bờ Bao Tân Thắng,
        Phường Sơn Kỳ, Quận Tân Phú, Tp.Hồ Chí Minh
      </p>
    </div>
    <div className="metadata__time">
      <i className="lni lni-16 lni-timer" />
      <p>08:00 - 22:00</p>
    </div>
  </div>
);

export default Metadata;
