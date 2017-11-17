import React from 'react';
import logo from './../img/common/logo.png';

export default () => (
  <div className='container-fluid'>
    <div className="row">
      <div className="col-lg-6">
        <img src={logo} alt="Company Logo"/>
      </div>

      <div className="col-lg-6" style={{marginTop:30}}>
        <div className="input-group changethisone">
          <input type="text"  className="form-control" placeholder="This is styled with the .changethisone css class"/>
    <span className="input-group-addon">
        <i className="glyphicon glyphicon-search"></i>
    </span>
        </div>
      </div>


    </div>
  </div>
);
