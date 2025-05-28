import Banner from '@/component/common/Home/Banner';
import React from 'react';
import About from './about/page';
import Product from './products/page';


const HomePage = () => {
  return (
    <div>
    
      <Banner></Banner>
      <About></About>
      <Product></Product>
   
    </div>
  );
};

export default HomePage;