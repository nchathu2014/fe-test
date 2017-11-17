import React from 'react';
import logo from './../../img/product/product.png';


export default ({product}) => (
    <div className="col-lg-4">
      <div className="text-center">
        <img src={logo}  alt={product.product} style={{border:'1px solid black'}}/>
      </div>
     <div style={{paddingLeft:100}}>
       <div>{product.product}</div>
       <div>{product.price}</div>
     </div>
    </div>
);
