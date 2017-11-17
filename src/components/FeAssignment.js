import React, {PropTypes,Component} from 'react';
import logo from './../img/welcome.png';
import './../styles/main.scss';
import {userValidation} from './../component-manager/FeAssignmentManager';
import Header from './Header';
import BoxList from './box/BoxList';
import InlineError from './error/InlineError';

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
      isDirtyUsername:false,
      isDirtyPassword:false,
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
    this.userValidation = userValidation.bind(this);
    this.emailOnChange = this.emailOnChange.bind(this);
    this.passwordOnChange = this.passwordOnChange.bind(this);
    this.createUserCredntialObject = this.createUserCredntialObject.bind(this);
    this.errorControl = this.errorControl.bind(this);
  }

  /**
   * Life Cycle function - componentWillMount
   */
  componentWillMount() {
  }

  /**
   * Life Cycle function - componentDidMount
   */
  componentDidMount() {
  }

  /**
   * Life Cycle function - componentWillReceiveProps
   * @param newProps
   */
  componentWillReceiveProps(newProps) {
  }

  /**
   * Life Cycle function - shouldComponentUpdate
   * @param newProps
   * @param newState
   * @returns {boolean}
   */
  shouldComponentUpdate(newProps, newState) {
    return true;
  }

  /**
   * Life Cycle function - componentWillUpdate
   * @param nextProps
   * @param nextState
   */
  componentWillUpdate(nextProps, nextState) {
  }

  /**
   * Life Cycle function - componentDidUpdate
   * @param prevProps
   * @param prevState
   */
  componentDidUpdate(prevProps, prevState) {
  }

  /**
   * Life Cycle function - componentWillUnmount
   */
  componentWillUnmount() {
  }


  /**
   *
   * @param event
   */
  emailOnChange(event) {



    console.info(event.target.value)
    this.setState({
      txtUsername: event.target.value,
      isDirtyUsername:!this.errorControl(event.target.value)
    });
  }

  /**
   *
   * @param event
   */
  passwordOnChange(event) {
    this.setState({
      txtPwd: event.target.value,
      isDirtyPassword:!this.errorControl(event.target.value)
    });
  }


  createUserCredntialObject(username, pwd) {
    return {
      username: username,
      password: pwd
    }
  }

  errorControl(formValue){
    let valueStatus=null;
    if(formValue){
      valueStatus=true;
    }else{
      valueStatus=false;
    }
    return valueStatus;
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

                <div className="text-center">
                  <h3>Sign In Now</h3>
                  Unlock awesome features
                </div>

                <form role="form">
                  <div className={this.state.isDirtyUsername?'form-group has-error':'form-group'}>
                    {this.state.isDirtyUsername &&
                    <InlineError errorMsg="Required"/>
                    }
                    <input
                      type="email"
                      className="form-control"
                      id="txtUsername"
                      placeholder="Username"
                      onChange={this.emailOnChange}
                    />
                  </div>
                  <div className={this.state.isDirtyPassword?'form-group has-error':'form-group'}>
                    {this.state.isDirtyPassword &&
                    <InlineError errorMsg="Required"/>
                    }
                    <input
                      type="password"
                      className="form-control"
                      id="txtPwd"
                      placeholder="Password"
                      onChange={this.passwordOnChange}
                    />
                  </div>

                  <div className="clearfix" style={{paddingBottom:30}}>
                    <div className="pull-right">Forgot password?</div>
                    <div className="pull-left">
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          id="chkLoggedID"
                          value="loggedInValue"
                        /> Keep me logged in
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
FeAssignment.propTypes = {};

/**
 *
 * @type {{}}
 */
FeAssignment.defaultProps = {};

export default FeAssignment;
