//  Ques- You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

function likes(names) {
   let peopleWhoLiked = '';

   if (names.length == 1) {
      peopleWhoLiked = names + ' likes this';
   } else if (names.length === 2) {
      peopleWhoLiked = `${names[0]} and ${names[1]} likes this`;
   } else if (names.length === 3) {
      peopleWhoLiked = `${names[0]}, ${names[1]} and ${names[2]} like this`;
   } else if (names.length >= 4) {
      peopleWhoLiked = `${names[0]}, ${names[1]} and ${
         names.length - 2
      } others likes this`;
   } else {
      peopleWhoLiked = 'no one likes this';
   }

   return peopleWhoLiked;
}

console.log(likes([])); // "no one likes this"
console.log(likes(['Peter'])); //  "Peter likes this"
console.log(likes(['Jacob', 'Alex'])); //  "Jacob and Alex like this"
console.log(likes(['Max', 'John', 'Mark'])); //  "Max, John and Mark like this"
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); //  "Alex, Jacob and 2 others like this"
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max', 'Cortney', 'Benjamin'])); //  "Alex, Jacob and 4 others like this"
