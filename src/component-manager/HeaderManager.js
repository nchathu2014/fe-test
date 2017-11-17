/**
 *
 */
function  showSearchBox(){
  this.setState({
    searchBoxVisible:true
  });
}

/**
 *
 */
function hideSearchBox(){
  this.setState({
    searchBoxVisible:false
  });
}


module.exports = {
__showSearchBox:showSearchBox,
  __hideSearchBox:hideSearchBox
};
