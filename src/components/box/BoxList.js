import React, { Component,PropTypes } from 'react';
import Box from './../box/Box';

class BoxList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const productList = this.props.productList;
    return (
      <div className='container-fluid'>
        <div className="row">
          {productList && productList.map((product, index)=> {
            return (
              <Box product={product} key={index}/>
            )
          })}
        </div>
      </div>
    )
  }
}

/**
 *
 * @type {{}}
 */
BoxList.propTypes = {
  product: PropTypes.object
};

/**
 *
 * @type {{}}
 */
BoxList.defaultProps = {};


export default BoxList;
