import React from 'react';
import logo from './../../img/product/product.png';

export default ({product}) => (
  <div className="col-lg-4">
    <div className="text-center">
      <img src={logo} alt={product.product} className="full-border"/>
    </div>
    <div style={{paddingLeft:105}}>
      <div>{product.product}</div>
      <div className="font-medium"><b>{product.price}</b></div>
    </div>
  </div>
);
