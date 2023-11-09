function callDateTime(){
    var currentData=(new Date()).toDateString();
    var currentTempo=(new Date()).toLocaleTimeString(); 
    document.getElementById('watch').innerHTML=`${currentData}-${currentTempo}`;
  }
  
 
setInterval(function(){  callDateTime() }, 1000);