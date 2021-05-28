console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem (item) {
  basket.push(item);
  return true;
  }
addItem('Apples');
addItem('Oranges');
addItem('Cherries');
addItem('bananas');
console.log(basket);

function listItems (inBasket){
  for (let i = 0; i < inBasket.length; i++) {
    console.log('List items', inBasket [ i ]);
    }
  }
  listItems(basket);

// attempt 2
// function listItems (){
//   for (let i = 0; i < basket.length; i++) {
//     return basket[i]
//   }
//     return false
// }
// console.log(basket[i]);
// attempt 1
// function listItem (basket){
//   for (let i = 0; i < basket.length; i++) {
//     console.log(basket);
//   }
// }


function emptyBasket () {
  basket = [];
}
emptyBasket()
console.log('Basket total' , basket);

// Worked with Duy and Gerett on Part 3
// function emptyBasket () {
//  while (basket.length > 0) {
//    basket.pop();
//  }
// }
