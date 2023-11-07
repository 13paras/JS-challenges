function disemvowel(str) {
   let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
   let result = '';

   for (let i = 0; i < str.length; i++) {
      if (vowels.indexOf(str[i]) === -1) {
         result += str[i];
      }
   }

   console.log(result);
}

disemvowel('This website is for losers LOL!'); // "Ths wbst s fr lsrs LL!"
disemvowel("No offense but,\nYour writing is among the worst I've ever read"); //"N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
disemvowel('What are you, a communist?'); // "Wht r y,  cmmnst?")
