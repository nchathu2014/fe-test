import React, {PropTypes,Component} from 'react';
//import Worker from 'worker-loader!./../api/background/myworker';
import {CONSTANTS} from './../constant/constant';
import {
  __userValidation,
  __userNameOnChange,
  __passwordOnChange,
  __createUserCredentialObject,
  __errorControl
} from './../component-manager/FeAssignmentManager';

import Header from './header/Header';
import BoxList from './box/BoxList';
import InlineError from './error/InlineError';
import './../styles/main.scss';

let MyWorker = require("worker!./../api/background/myworker.js");
//https://medium.com/@schreiaj/using-web-workers-react-and-webpack-d2773e3f362d
class FeAssignment extends Component {

  /**
   * RootComponent constructor
   * @param props
   */
  constructor(props) {
    super(props);
    this._initFeAssignment();
    this.state = {
      txtUsername: '',
      txtPwd: '',
      data:6,
      isDirtyUsername: false,
      isDirtyPassword: false,
      products: [
        {logo: 'product.png', product: 'Phone 6 Black', price: 'AED 1000'},
        {logo: 'product.png', product: 'iPhone 7 Black', price: 'AED 2000'},
        {logo: 'product.png', product: 'iPhone 8 Black', price: 'AED 3000'}
      ]
    };
  }

  /**
   * Custom Function - Method binding to 'this'
   * @private
   */
  _initFeAssignment() {
    this.userValidation = __userValidation.bind(this);
    this.userNameOnChange = __userNameOnChange.bind(this);
    this.passwordOnChange = __passwordOnChange.bind(this);
    this.createUserCredntialObject = __createUserCredentialObject.bind(this);
    this.errorControl = __errorControl.bind(this);
    this.incrementData = this.incrementData.bind(this);
    this.stop = this.stop.bind(this);
  }

  stop(){
    this.worker.terminate();
    this.worker = undefined;
    this.setState({
      dataMsg:"Increment Stopped"
    })
  }

  incrementData(){

    if(typeof(this.worker) == "undefined"){
      this.worker = new MyWorker();
    }
    let message=this.state.data;
    this.worker.postMessage(message);
    let _this = this;
    this.worker.onmessage=(event)=>{
      console.info(event.data)
      _this.setState({
        data:event.data,
        dataMsg:"Incrementing..."
      });
    }
  }


  componentWillMount(){

    if(typeof(Worker) !== 'undefined'){
      this.worker = new MyWorker();
      console.info("***",this.worker);
    }else{
      console.info("Worker Not Support");
    }
  }

  /**
   * Life Cycle function - render
   * @returns {XML}
   */
  render() {

    return (

      <div className='container-fluid'>
        <div className="row">
          <div className="col-lg-12">

            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="70"
                   aria-valuemin="0" aria-valuemax="100" style={{width:this.state.data+'%'}}>
                <span className="sr-only">70% Complete</span>
              </div>
            </div>

            <br />
            {this.state.data}<br/>
            {this.state.dataMsg}<br/>
            <button onClick={this.incrementData}> Start Increment </button>
            <button onClick={this.stop}> Stop </button>
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-lg-offset-4">
            <div className="panel panel-default">
              <div className="panel-body">

                <div className="text-center margin-style">
                  <h3>Sign In Now</h3>
                  <span>Unlock awesome features</span>
                </div>

                <form role="form">
                  <div className={this.state.isDirtyUsername?'form-group has-error':'form-group'}>
                    {this.state.txtUsername && <label htmlFor="txtUsername">
                      {CONSTANTS.COMPONENT.FEASSIGNMENT.LABEL.USERNAME}
                    </label>}
                    {this.state.isDirtyUsername && <InlineError errorMsg="Required field"/>}
                    <input
                      type="text"
                      className="form-control text-box-padding"
                      id="txtUsername"
                      placeholder="Username"
                      onChange={this.userNameOnChange}
                    />
                  </div>
                  <div className={this.state.isDirtyPassword?'form-group has-error':'form-group'}>
                    {this.state.txtPwd && <label htmlFor="txtUsername">
                      {CONSTANTS.COMPONENT.FEASSIGNMENT.LABEL.PASSWORD}
                    </label>}
                    {this.state.isDirtyPassword && <InlineError errorMsg="Required field"/>}
                    <input
                      type="password"
                      className="form-control text-box-padding"
                      id="txtPwd"
                      placeholder="Password"
                      onChange={this.passwordOnChange}
                    />
                  </div>

                  <div className="clearfix">
                    <div className="pull-right" style={{textAlign:'right'}}>
                      <button type="button" className="btn btn-link color-blue">Forgot password?</button>
                    </div>
                    <div className="pull-left">

                      <div className="checkbox">
                        <label style={{marginLeft:0}}>
                          <input type="checkbox" value="" checked/>
                          <span className="cr"><i className="cr-icon glyphicon glyphicon-ok"></i></span>
                          Keep me logged in
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={this.userValidation.bind(null,this.createUserCredntialObject(this.state.txtUsername,this.state.txtPwd))}
                    className="btn btn-lg btn-primary btn-block"
                    disabled={!this.state.txtUsername || !this.state.txtPwd}>SIGN IN
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="space-div clearfix">&nbsp;</div>
            <BoxList productList={this.state.products}/>
          </div>
        </div>
      </div>

    );
  }
}

/**
 *
 * @type {{}}
 */
FeAssignment.propTypes = {
  productList: PropTypes.array,
  errorMsg: PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired
};

/**
 *
 * @type {{}}
 */
FeAssignment.defaultProps = {};

export default FeAssignment;
