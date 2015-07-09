
var name = prompt("What is your name?");
var message = "Hello "+name+"!"

alert(message);


$(document).ready( function (){
  $(document).find('h2').append(message);

});
