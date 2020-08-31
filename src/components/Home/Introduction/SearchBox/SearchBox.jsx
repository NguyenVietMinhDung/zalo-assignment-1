import React from 'react';
import './SearchBox.scss';

const SearchBox = () => (
  <div className="search-box">
    <div className="search-box__search-icon">
      <i className="lni lni-16 lni-search-alt" />
    </div>
    <input type="text" placeholder="Tìm kiếm tên sản phẩm" />
  </div>
);

export default SearchBox;
