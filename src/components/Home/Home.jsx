import React from 'react';
import Introduction from './Introduction';
import Categories from '../Categories';
import './Home.scss';
import categories from '../../constants/categories';

const Home = () => (
  <div className="home">
    <Introduction />
    <Categories categories={categories} />
  </div>
);

export default Home;
