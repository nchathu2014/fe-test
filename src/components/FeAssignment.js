import React, {PropTypes,Component} from 'react';
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
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-lg-offset-4">
            <div className="panel panel-default">
              <div className="panel-body">

                <div className="text-center margin-style">
                  <h3>Sign In Now</h3>
                  Unlock awesome features
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

                  <div className="clearfix" style={{paddingBottom:30}}>
                    <div className="pull-right">
                      <button type="button" className="btn btn-link color-blue">Forgot password?</button>
                    </div>
                    <div className="pull-left">
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          id="chkLoggedID"
                          value="loggedInValue"
                        /> <span className="font-small">Keep me logged in</span>

                        <div className="checkbox">
                          <label>
                            <input type="checkbox" value="" checked/>
                            <span className="cr"><i className="cr-icon glyphicon glyphicon-ok"></i></span>
                            Keep me logged in
                          </label>
                        </div>

                      </label>
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
  errorMsg: PropTypes.string.isRequired
};

/**
 *
 * @type {{}}
 */
FeAssignment.defaultProps = {};

export default FeAssignment;
