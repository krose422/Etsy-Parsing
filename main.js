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

// Declare array for answer
var itemCurrency = [];

// Find item with GBP
items.filter( function(item) {
  if (item.currency_code === "GBP") {
    itemCurrency.push(item.title);
    itemCurrency.push("\u00A3" + item.price);
  }
});

// Drop answer to DOM Node
var answer3 = document.querySelector('#answer3');
answer3.innerText = "";
itemCurrency.forEach(function(itemCurrency) {
  answer3.appendChild(document.createTextNode(itemCurrency + '\n'));
});


// Question 4

// Declare array for answer
var itemWood = [];

// Find items made of wood
items.filter( function(item) {
  item.materials.forEach (function(item2) {
    if (item2 === "wood") {
    itemWood.push(item.title)
    }
  });
});

// Drop answer to DOM Node
var answer4 = document.querySelector('#answer4');
answer4.innerText = "";
itemWood.forEach(function(itemWood) {
  answer4.appendChild(document.createTextNode(itemWood + '\n' + '\n'));
});


// Question 5

// empty current HTML text and declare DOM Node
var answer5 = document.querySelector('#answer5');
answer5.innerText = "";

// Create array for items with 8+ materials
var filteredItems = items.filter(function(item) {
  return item.materials.length >= 8;
});

// For each item in array, print out title and then their materials into DOM Node
filteredItems.forEach (function(item) {
  var title = item.title;
  var materials = item.materials;
  var length = materials.length;
  answer5.appendChild(document.createTextNode(item.title + " has " + length + " materials\n\n"));

  materials.forEach( function (material) {
    answer5.appendChild(document.createTextNode(material + '\n'));
  })
  answer5.appendChild(document.createTextNode('\n'));
});


// Question 6

var itemsMadeBySeller = [];

// Find items with "i_did" in who_made category
items.forEach( function(item) {
  if (item.who_made === "i_did") {
    itemsMadeBySeller.push(item.title);
  }
});

// Drop answer to DOM Node
var answer6 = document.querySelector('#answer6');
answer6.innerText = itemsMadeBySeller.length + " were made by their sellers";









