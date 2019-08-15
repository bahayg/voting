$(document).ready(function(event) {
  var age = parseInt(prompt("Enter your age:"));

  if (age >= 18) {
    $("#above18").show();
  } else {
    $("#under18").show();
  }
  event.preventDefault();
});
