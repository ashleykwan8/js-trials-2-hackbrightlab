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
//   items.sort();
//   console.log(items);
// }

// smallestNItems([1, 30, 4, 21, 10000],5)

// const sortedItems = items.sort((a, b) => a - b).slice(0, n);
//   sortedItems.reverse();
//   console.log(sortedItems)
