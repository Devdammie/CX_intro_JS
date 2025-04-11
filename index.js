// 1. creating variables to store name, age and nationality
var devName ='Dammie'
var age = '20'
var nationality = 'Nigerian'

// combining them into sentence
let introduction = `my name is ${devName}, a ${age} year old ${nationality}. `
console.log(introduction);

//2. Favorite quote
let favQuote = 'A man who do the right regardless of how he feels will always beat the man who do the right thing based on how it feels'
console.log('Favorite Qoute:', favQuote);
// converting to upper case
const upperCase = favQuote.toUpperCase();
console.log('Upper Case:',upperCase);
// converting to lower case
const lowerCase = favQuote.toLowerCase();
console.log('lower Case:', lowerCase);

//3. Reversing a  word
let  word = 'Reverse'
// The split() method takes the word and split into substring and return an array {i.e word = ['R','e','v','e','r','s','e'] }
// The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first. 
// The join() method joins all element of the array into a  string
let reversedWord = word.split("").reverse().join("");
console.log('Reversed word:', reversedWord);

//4. Storing the price of 3 items and Calculating the total
let item1 = 50;
let item2 = 100;
let item3 = 150;

const totalPrice = item1 + item2 + item3;
console.log(`The total amount of the items is $${totalPrice}`);

// 5. Finding the average of 5 test scores
let score1 = 80;
let score2 = 90;
let score3 = 75;
let score4 = 85;
let score5 = 95;
let averageScore = (score1 + score2 + score3 + score4 + score5) / 5;
console.log("The average test score is " + averageScore);

// 6. Creating an array of 5 favorite foods and displaying the first and last
let favoriteFoods = ["Beans", "Jollof Rice", "Burgers", "Eba", "FriedRice"];
console.log("First food:", favoriteFoods[0]);
console.log("Last food:", favoriteFoods[favoriteFoods.length - 1]);

// 7. Adding two more food items (one at the beginning and one at the end)
favoriteFoods.unshift("Pounded Yam"); // add to beginning
favoriteFoods.push("Pasta"); // add to end
console.log("Updated food list:", favoriteFoods);

// 8. jssOne array of 10 student names
let jssOne = ["Amira", "Bola", "Charles", "Dayo", "Esther", "Fatima", "George", "Halima", "Ibrahim", "Janet"];
console.log(jssOne);

// 9. jssTwo array of 10 student names
let jssTwo = ["Kenny", "Lola", "Michael", "Nkechi", "Ola", "Paul", "Queen", "Rashid", "Samuel", "Tina"];
console.log(jssTwo);
// 10. jssThree array of 10 student names
let jssThree = ["Uche", "Victor", "Wale", "Xavier", "Yetunde", "Zainab", "Ahmed", "Biola", "Cynthia", "David"];
console.log(jssThree);


