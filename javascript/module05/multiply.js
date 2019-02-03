var table = prompt("What number would you like to multiply with?");
var msg = '<h2>Multiplication Table</h2>'; // Message
 
for(var i = 1; i < 11; i++){
  msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;