//Calvin Min
//File: popup.js

//Test the listener!
//Not sure why it's not running displayDate()
document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('button1');
    button.addEventListener('click', function() {
        displayDate();
    });
});

displayDate() {
  document.getElementByID('date').innerHTML = "New Text!";
}