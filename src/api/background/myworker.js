let count = 6;
onmessage = function(e){
  postMessage(++count);
};

setInterval(onmessage,1000);
