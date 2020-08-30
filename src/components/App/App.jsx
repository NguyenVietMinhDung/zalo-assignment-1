import React from 'react';
import Introduction from '../Introduction';
import Categories from '../Categories';
import './App.scss';
import categories from '../../constants/categories'

const App = () => {
  return (
    <div className="app">
      <Introduction />
      <Categories categories={categories} />
    </div>
  );
};

export default App;
