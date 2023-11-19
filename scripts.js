
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("ages:", ages);
let minusAge= ages[ages.length -1] - ages[0];
console.log("minusAge", minusAge);


ages.push(100)
console.log("Ages aftter pushing a new value", ages);
let minusAgePush= ages[ages.length -1] - ages[0];
console.log("minusAge", minusAgePush);

let sumOfAges = 0;

for(let i = 0; i < ages.lenghth; i++){
    console.log(i, "Test");
sumOfAges += ages[i]
console.log("index:",i,"sumOfAges:", sumOfAges);
}
console.log("Total Sum", sumOfAges);
let average = sumOfAges / ages.lenghth 
console.log("Average", average);

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let totalChars = 0;

for (let i=0; i < names.length; i++) {
    console.log(i, "Test");
totalChars += names[i].length
console.log("index:",i,"name:",names[i], "troubleChars:", 
totalChars);
}
let averageName = totalChars / names.length;
console.log("Average of Names:", averageName);


let concatNames= "";
for (let i = 0; i < names.lenght; i++) {
concatNames = concatnames.concat(names[i] + " ");
console.log( i, "Names concatenated", concatNames);
}


console.log("First element of ages array:", ages[ages.lenght - 1]);

console.log("First element of ages:", ages[0]);


let nameLengths = [];
for (let i = 0; i < names.length; i++) {
nameLengths.push(names[i].length);
console.log("Name lengths array:", nameLengths);   
}

let charsTotal = 0;
for(let i = 0; i < nameLengths.length; i++) {
    //console.log(i, "test")
    charsTotal += nameLengths[i];
    console.log("charsTotal:", charsTotal);
}


function concatWords(word, n){
   console.log("Word Par:", word, "n Par:", n);
   let concat = word.repeat(n);
   console.log(concat);
}
concatWords("Hello", 3);


function fullName(firstName,lastName) {
    let fullName = firstName + ' ' + lastName
    console.log(fullName);
}
fullName("Daniela", "Dominguez");



let numbers1 = [10, 20, 30, 40]
let numbers2 = [1, 2, 3, 4]

function sumNumbersArray(array){
    let total = 0;

    for (let i = 0; i< array/length; i++){
       
        total += array[i]
        console.log("Total:", total);
    }
    if (total > 100) {
        return true
    } else {
        console.log(total,false);
        return false;
    }
}
sumNumbersArray(numbers2);


function calculateNumbersAverage(array){
    let total = 0;
    for(let i = 0; i < array.length; i ++) {
        total += array[i]
        console.log("calculate Function, total;", total);

    }

    let average = total / array.length
    console.log("Average of numbers:", average);
    return average;
}
calculateNumbersAverage(numbers1);


let numbers3 = [6, 6, 6];
let numbers4 = [10, 10, 9];

function twoAverages(array1,array2){
    let total1 =0;
    let total2 =0;
for (const number of array1) {
    total1 += number
    console.log("Current number:", number, "Total1:", total1);
}

for (const number of array2) {
    total2 += number;
    console.log("Current number loop2:", number, "Total2:",
    total2);
}
let average1 = total1 / array1.length;
let average2 = total2 / array2.length;

console.log("Average", average1, average2);

if (average1 > average2) {
    console.log(true);
    return true
} else if (average1 < average2) {
    console.log(false);
    return false;
} else {
    console.log("Numbers are equal");
  }
}
twoAverages(numbers3, numbers4);

function willBuyDrink(isHotOutside, moneyInPocket){
console.log("Parameters", isHotOutside, moneyInPocket);
let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
console.log("Buy a drink?", buyDrink);
return buyDrink;
}
willBuyDrink(true, 5)