//  Filter an array of objects using a given condition

let items = [
   { name: 'Apple', price: 1 },
   { name: 'Banana', price: 2 },
   { name: 'Cherry', price: 3 },
   { name: 'Date', price: 4 },
   { name: 'Elderberry', price: 5 },
];

function filteredItems(items, maxPrice) {
   return items.filter((item) => item.price <= maxPrice);
}

console.log(filteredItems(items, 3));
