
import $ from 'jquery';
import url from './url';

 function callUserAuthenticationAPI(){
   let result={};
   $.ajax({
     url: 'https://reqres.in/api/users/2',
     type: 'GET',
     dataType:'json',
     success: function(result) {

        console.info(result)
         result = result.data



     },
     error:function(err){
       result = err
     }
   });
   return result;
}




module.exports = {
  callUserAuthenticationAPI:callUserAuthenticationAPI

};


