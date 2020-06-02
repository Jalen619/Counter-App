// Plus and Minus buttons
var plusButton = document.getElementById("increase-count");
var minusButton = document.getElementById("decrease-count");

// Counter 
var counter = document.getElementById("count");

// Increasing count by one
plusButton.addEventListener("mouseover", function() {
    var counterInteger = parseInt(counter.innerHTML)
    var increasedValue = counterInteger + 1;
    counter.innerHTML = increasedValue;
});
 
// Reducing count by one
minusButton.addEventListener("mouseover", function() {
    var counterInteger = parseInt(counter.innerHTML)
    var decreasedValue = counterInteger - 1;
    counter.innerHTML = decreasedValue;
});
