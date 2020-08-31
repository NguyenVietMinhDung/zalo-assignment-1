import React from 'react';
import ReactTooltip from 'react-tooltip';
import './ShopSelector.scss';

const ShopSelector = () => (
  <div className="shop-selector">
    <div data-tip="Bấm vào đây để đổi sang cửa hàng khác" data-place="right">
      Đổi cửa hàng khác &nbsp;
      <i className="lni lni-chevron-down" />
    </div>
    <ReactTooltip />
  </div>
);

export default ShopSelector;
