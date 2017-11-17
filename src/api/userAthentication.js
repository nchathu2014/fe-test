
import $ from 'jquery';
import {__url} from './url';

 function callUserAuthenticationAPI(successCallback,errorCallback){
   let result ={};

   $.when(
     $.ajax(__url.USER_AUTHENTICATION)).then(
     function( data, textStatus, jqXHR ) {
       if(jqXHR.status === 200){
         const {first_name,last_name} = data.data;
         successCallback({
           username:first_name,
           password:last_name
         });
       }else{
         errorCallback(data);
       }
   });
   return result;
}

module.exports = {
  __callUserAuthenticationAPI:callUserAuthenticationAPI
};


