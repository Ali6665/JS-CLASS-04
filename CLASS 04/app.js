//  Home chatper 14-16


// Q 01

var emptyArray = [];

// Q 02

var myArray = ["Hello, world!"];
console.log(myArray);

// Q 03

var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]);


// Q 04

var small_alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
console.log("Total length of array:", small_alphabet);


// Q 05

var myArray = ["firstElement"];
myArray[1] = "secondElement"; 
alert("New element is: " + myArray[1]);

// Q 06

// Chapter 16 (Array II)


// Q 01

var arr = ["firstElement"];

arr.push("secondElement");
alert(arr[arr.length - 1]);

// Q 02

var Alphabet = ["h", "i", "j", "k"];

Alphabet.pop();

console.log(Alphabet);


// Q 03

var Alphabet = ["h", "i", "j", "k"];

Alphabet.push(42);

document.write(Alphabet)




// Chapter 16 (Array III)


// Q 01

var Big_Alphabet = ["A", "B", "C", "D", "E"];

Big_Alphabet.shift(); 

console.log(Big_Alphabet);

// Q 02

var sizes = ["S", "M", "XL", "XXL", ];
sizes.unshift(1, 2, "XXXL"); 

console.log(sizes);

// Q 03

var arr_2 = ["element1"];
arr_2.unshift("element2");
alert(arr_2[0]);  


// Q 04


var fruits = ["Apple", "Mango", "Orange", ];
fruits.splice(2, 0, "Banana"); 
console.log(fruits) 

// Q 05

var name = ["Ali", "Ajmal", "Ayan", "Aliya", "Ahmed"];
name.slice(0, 3); 

console.log(name);


// Q 06

var pets = ["dog", "cat", "fox", "duck", "frog"];
pets.splice(1, 3, "parrot");  
console.log(pets);


// Q 07

var food = ["Barbbq","kabad","Malai Bolti"];
pets.splice(1, 2); 
console.log(food);

// Q 08


var _pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var reducedPets = _pets.slice(3, 5); 
console.log(reducedPets);
