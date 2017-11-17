import React,{Component} from 'react';

export default ({errorMsg})=>(
  <label htmlFor="txtUsername" style={{backgroundColor:'red',padding:3,width:'auto'}}>{errorMsg}</label>
);
