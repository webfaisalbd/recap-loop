var bottleColor = "yellow";
var waterQuantity = 1;
var isFull = false;

// array 
var items = ['bottle', 'mug', 'paper', 'pen'];
console.log(items.indexOf('logens'));
var addProduct = items.indexOf('logens');
console.log(addProduct);
items.push('ear phone');
items.push('watch');
items.pop();


// conditionals
if (items.length >= 4) {
    console.log('lots of this on your desk');
}
else if (items.length == 4) {
    console.log("little products");
}
else {
    console.log("wow! you have a clean this desk");
}