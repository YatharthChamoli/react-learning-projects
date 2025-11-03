// COMMON PATTERNS FOR UPDATING ARRAYS IN STATE MANAGEMENT
const shoppingCart = [
  { id: 1, product: 'Apple', price: 2 },
  { id: 2, product: 'Banana', price: 3 },
  { id: 3, product: 'Orange', price: 1 },
];

//  Adding to an array
[...shoppingCart, { id: 4, product: 'Grapes', price: 4 }];  