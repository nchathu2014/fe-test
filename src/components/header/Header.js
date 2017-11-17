import React,{Component} from 'react';
import {__showSearchBox,__hideSearchBox} from './../../component-manager/HeaderManager';
import logo from './../../img/common/logo.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this._initHeader();
    this.state = {
      searchBoxVisible: false
    };
  }

  /**
   * Binding functions
   * @private
   */
  _initHeader() {
    this.showSearchBox = __showSearchBox.bind(this);
    this.hideSearchBox = __hideSearchBox.bind(this);
    this.renderFullSearchBox = this.renderFullSearchBox.bind(this);
    this.renderSearchBox = this.renderSearchBox.bind(this);
    this.renderSearch = this.renderSearch.bind(this);
  }

  /**
   * Render full search box
   * @returns {XML}
   */
  renderFullSearchBox() {
    return (
      <div className="input-group">
        <input type="text" className="form-control search-box" placeholder="Search"/>
        <span className="input-group-addon" style={{backgroundColor:'#f0f7fe',border:'none'}}
              onBlur={this.hideSearchBox}>
          <i className="glyphicon glyphicon-search"></i>
        </span>
      </div>
    )
  }

  /**
   * Render search icon
   * @returns {XML}
   */
  renderSearchBox() {
    return (
      <button type="button" className="btn btn-default pull-right"
              style={{padding:10,backgroundColor:'#f0f7fe',border:'none'}} onClick={this.showSearchBox}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    )
  }

  /**
   * search box triggering function
   * @returns {XML}
   */
  renderSearch() {
    if (this.state.searchBoxVisible) {
      return this.renderFullSearchBox()
    } else {
      return this.renderSearchBox()
    }
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className="row">
          <div className="col-lg-6">
            <img src={logo} alt="Company Logo"/>
          </div>
          <div className={this.state.searchBoxVisible?'col-lg-6':''} style={{marginTop:30}}>
            {this.renderSearch()}
          </div>
        </div>
      </div>
    );
  }
}

/**
 * propTypes
 * @type {{}}
 */
Header.propTypes = {};

/**
 * defaultProps
 * @type {{}}
 */
Header.defaultProps = {};

export default Header;


