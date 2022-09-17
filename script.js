'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starerIndex, mainIndex) {
    return [this.starterMenu[starerIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze,Italy');
console.log(rest.set(2, 'Lisbon,Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
// rest.set([1, 2], 'Test');
console.log(rest);
console.log(rest.size);

// Does not work
// console.log(rest.get([1, 2]));

console.log(rest.get(arr));

//Sets
// const orderSet = new Set(['pizza', 'pasta', 'pizza']);
// console.log(orderSet.size);
// console.log(orderSet.has('pizza'));
// console.log(orderSet.has('bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// orderSet.delete('pasta');
// console.log(orderSet);

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// Split and Join
// console.log('a+very+nice+string'.split('+'));
// console.log('Isaac Rendon'.split(' '));

// const [firstName, lastName] = 'Isaac Rendon'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('isaac rendon');

// // Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, 'hi');
// };

// console.log(maskCreditCard(4433232442423));

// //Repeat
// const message2 = 'Bad weather... All Departures Delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'>'.repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

// const airline = 'TAP Air Portugal';
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger = 'jOnAS'; //Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Compare email
// const email = 'hello@jonas.io';
// const loginEmail = ' Hello@Jonas.Io \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email == normalizedEmail);

// // replacing
// const priceGB = '288,97E';
// const priceUS = priceGB.replace('E', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23, Boarding door 23!';

// // console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family');
// }

// // Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed on board');
//   } else {
//     console.log('Welcome aboard');
//   }
// };

// checkBaggage('I have a laptop, some food, and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protections');

// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s == 'B' || s == 'E') console.log('You got the middle seat');
//   else console.log('You got lucky');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');
// Spread on RIGHT side of assignment operator
// const arr = [1, 2, ...[3, 4]];

// // Rest on LEFT side of assignment operator
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(b);
// console.log(others);

// // Rest element must be the last element
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // Join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// Iterables are arrays, strings, maps and sets but NOT Objects
// const str = 'Isaac';
// const letters = [...str, ' ', 's.'];
// console.log(letters);
// console.log(...str);

// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1?"),
//   // prompt('Ingredient 2?'),
//   // prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaruant = { foudnedIn: 1999, ...restaurant, founder: 'Guiseppe' };

// console.log(newRestaruant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'via del sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const arr = [2, 3, 4, 5];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [first, , second] = restaurant.categories;
// console.log(first, second);

// Switching variables
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// [first, second] = [second, first];
// console.log(first, second);

// // Receive 2 return values from function
// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// // Nested Destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// // default values
// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);

// console.log(a, b);

// // nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
