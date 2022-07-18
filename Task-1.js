let str = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";

let results = str.match(/[a-zA-Z0-9]+/gi);

let longestWordLength = 0;
let longestWordVowelLength = 0;
let longestWord = [];
let longestWordVowels = [];


const vowelCount = str => {
  let vowels = /[aeiou]/gi;
  let result = str.match(vowels);
  return result.length;
};

for(i in results) {

   if (results[i].length >= longestWordLength) {
      
      if (results[i].length > longestWordLength) {
        longestWord = [];
        longestWordLength = results[i].length;
      }
      
      longestWord.push(results[i]);
      
      let currentVowelLength = vowelCount(results[i]);
      
      if(currentVowelLength >= longestWordVowelLength) {
        
        if(currentVowelLength > longestWordVowelLength) {
          longestWordVowels = [];
          longestWordVowelLength = currentVowelLength;
        }
        
        longestWordVowels.push(results[i]);
      }
   }
}
console.log(longestWordVowels);
