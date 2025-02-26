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

console.log(Alphabet)




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



// End Home pdf





//  chapteer 14-16 (ARRAYS)

// Q 01. 
var studentNames = [];


// Q 02. 
var studentNamesObject = new Array();


// Q 03. 
var stringsArray = ["karachi", "lahore", "islamabad"];


// Q 04. 
var numbersArray = [10, 20, 30, 40];


// Q 05. 
var booleanArray = [true, false,];


// Q 06. 
var mixedArray = ["Ali", 25, true];


// Q 07


var classes = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// Display the qualifications in the browser
document.write("<h2> Qualifications:</h2>");
document.write("<ol>");
for (var i = 0; i < classes.length; i++) {
  document.write("<li>" + classes[i] + "</li>");
}
document.write("</ol>");



// Q 08


var studentNames = ["Ali", "Faraz", "Daniyal"];

var scores = [450, 380, 420];
var totalMarks = 500;

// Loop through the arrays to calculate and display the results
for (var i = 0; i < studentNames.length; i++) {
  var percentage = (scores[i] / totalMarks) * 100;
  console.log("Student Name: " + studentNames[i]);
  console.log("Score: " + scores[i] + " out of " + totalMarks);
  console.log("Percentage: " + percentage.toFixed(2) + "%");
  console.log("-----------------------------");
}




//  Q 10

var studentScores = [85, 72, 90, 68, 95];
studentScores.sort((a, b) => a - b);
console.log("Sorted student scores:", studentScores);

//  Q 11


var country = ["Pakistan ", "India", "Japan", "England", "Zimbawe"];
var selectedcountry = country.slice(1, 4); 
console.log("Selected Country:", selectedcountry);

//  Q 12

var arr = ["This ", " is ", " my ", " cat"];
var sentence = arr.join; 

console.log("Sentence:", sentence);


// Q 13

var rank = [];


rank.push('first');
rank.push('second');
rank.push('third');

console.log(rank.shift()); 
console.log(rank.shift());
console.log(rank.shift()); 

// Q 14


var rank1 = [];

rank1.push("first");
rank1.push("second");
rank1.push("third");

console.log(" after pushes:", rank1);

console.log(rank1.pop()); 
console.log(rank1.pop()); 
console.log(rank1.pop()); 



// Q 15


let stack = [];
stack.push("Value 1");
stack.push("Value 2");
stack.push("Value 3");


console.log("Last In-First Out order:");
 if(stack.length > 0) {
  console.log(stack.pop());
}
