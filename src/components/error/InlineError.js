import React from 'react';

export default ({errorMsg})=>(
  <label htmlFor="txtUsername"
         className="error-msg">{errorMsg}</label>
);
