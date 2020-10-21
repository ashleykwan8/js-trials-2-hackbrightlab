"use strict";


// 1. printIndices
function printIndices(items) {
  for (const i in items) {
 console.log(`${items[i]} ${i}`)}
}

printIndices(['apple', 'berry', 'cherry']);

// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];
 for (const i in items){ 
  if (i % 2 === 0)
  result.push(items[i]); }
  console.log(result);
}
everyOtherItem(['apple', 'berry', 'cherry'])

// 3. smallestNItems
function smallestNItems(items, n) {
  items.sort();
  items.slice(-1)
  console.log(items);
}

smallestNItems([1, 30, 4, 21, 10000])
