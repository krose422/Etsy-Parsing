console.log(items);

// Question 1

// Get all prices
var allPrices = items.map(function(item) {
  return item.price;
});


// Get the sum of all prices
var sum = allPrices.reduce(function(previous, current) {
  return previous + current;
});


// Get the average of the sum
var avg = sum / allPrices.length;

// Round two decimal places
var answer = avg.toFixed(2);

// Drop answer in DOM Node
document.querySelector('#answer1').textContent = "The average price is $" + answer;


// Question 2

// Declare array for answer
var itemTitles = [];

// Find items between $14 and $18 and list titles in array
items.filter( function(item) {
  if (item.price > 14.00 && item.price < 18.00) {
    itemTitles.push(item.title);
  };
});

// Drop answer to DOM Node
var answer2 = document.querySelector('#answer2');
answer2.innerText = "";
itemTitles.forEach(function(itemTitles) {
  answer2.appendChild(document.createTextNode(itemTitles + '\n'));
});


// Question 3
var itemCurrency = [];

items.filter( function(item) {
  if (item.currency_code === "GBP") {
    itemCurrency.push(item.title);
    itemCurrency.push("\u00A3" + item.price);
  }
});

var answer3 = document.querySelector('#answer3');
answer3.innerText = "";
itemCurrency.forEach(function(itemCurrency) {
  answer3.appendChild(document.createTextNode(itemCurrency + '\n'));
});




