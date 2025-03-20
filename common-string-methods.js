/*

Practice Problem #1

/* Activity 1: Searching Strings
Write a program to:
Check if the text "JavaScript" is in the string "Learning JavaScript is fun!" using includes.
Find the position of the word "fun" in the string. */
let text = "Learning JavaScript is fun!";
console.log(text.includes("JavaScript"));
console.log(text.includes("fun"));

/* Activity 2: Transforming Strings
Convert the string " CODE BOOTCAMP " to lowercase and remove all extra whitespace.
Replace "BOOTCAMP" with "JavaScript" in the transformed string. */
let BOOTCAMP = " CODE BOOTCAMP " 
let transformedstring = BOOTCAMP.toLowerCase;
console.log(transformedstring);

/* Activity 3: Breaking Apart a Sentence
Split the sentence "Coding is fun and educational" into an array of words. */
let sentence = "Coding is fun and educational";
let wordsArray1 = sentence.split(" ");
console.log(wordsArray1);

/* Activity 4: Retrieving Substrings
Retrieve the first character of "Bootcamp" using charAt.
Extract the word "camp" from "Bootcamp" using slice. */
let word = "Bootcamp";
let firstChar = word.charAt(0);
console.log(firstChar);
let extracted = word.slice(word.indexOf("camp"));
console.log(extracted);

/* Advanced Challenge
Write a program to process the following string:
Customer: John Doe
Order: Apple, Banana, Grape
Total: $20.50
Extract the customer name.
Split the order into an array of items.
Convert the total price to uppercase (e.g., "TOTAL: $20.50"). */
let data = `Customer: John Doe
Order: Apple, Banana, Grape
Total: $20.50`;
let customerName = data.split("\n")[0].split(": ")[1];  
let orderItems = data.split("\n")[1].split(": ")[1].split(", ");  
let totalPrice = "TOTAL: " + data.split("\n")[2].split(": ")[1].toUpperCase();  
console.log("Customer Name:", customerName);  
console.log("Order Items:", orderItems);  
console.log("Total Price:", totalPrice);


/* Practice Problem #2

Objective
Practice using common string methods to manipulate and extract information from strings.

Instructions:
You are tasked with processing a single string and
performing a series of operations using the string methods covered in the lesson.
Each task corresponds to one or more methods and can be completed independently.

String to Use:
  let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

Tasks:
Complete the following tasks and assign the results to the specified variables. Log each result to the console.

/* 1. Searching
  - Check if the word "JavaScript" is in the string using includes and assign the result to a variable named hasJavaScript.
  - Find the position of the word "Coding" in the string using indexOf and assign the result to a variable named codingPosition.
  - Check if the string starts with "Welcome" using startsWith and assign the result to a variable named startsWithWelcome.
  - Check if the string ends with "today." using endsWith and assign the result to a variable named endsWithToday. */
let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";
let hasJavaScript = text.includes("JavaScript");
let codingPosition = text.indexOf("Coding");
let startsWithWelcome = text.startsWith("Welcome");
let endsWithToday = text.endsWith("today.");
console.log("Has JavaScript:", hasJavaScript); 
console.log("Position of 'Coding':", codingPosition); 
console.log("Starts with 'Welcome':", startsWithWelcome); 
console.log("Ends with 'today.':", endsWithToday); 

/* 2. Transforming
  - Convert the string to all lowercase letters using toLowerCase and assign the result to a variable named lowercaseString.
  - Convert the string to all uppercase letters using toUpperCase and assign the result to a variable named uppercaseString.
  - Remove the extra spaces from the beginning and end of the string using trim and assign the result to a variable named trimmedString.
  - Replace the word "JavaScript" with "coding" using replace and assign the result to a variable named replacedString. */
  let inputString1 = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";
  let lowercaseString = inputString.toLowerCase();
  let uppercaseString = inputString.toUpperCase();
  let trimmedString = inputString.trim();
  let replacedString = trimmedString.replace("JavaScript", "coding");
  console.log("Lowercase String:", lowercaseString);
  console.log("Uppercase String:", uppercaseString);
  console.log("Trimmed String:", trimmedString);
  console.log("Replaced String:", replacedString);
/* 3. Breaking Apart
  - Split the string into an array of words using split with a space (" ") as the delimiter and assign the result to a variable named wordsArray. */
  let inputString2 = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";
  let trimmedString1= inputString.trim();
  let wordsArray = trimmedString.split(" ");
  console.log("Words Array:", wordsArray);
/* 4. Retrieving
  - Retrieve the first character of the trimmed string using charAt and assign the result to a variable named firstCharacter.
  - Extract the word "Bootcamp" from the string using slice and assign the result to a variable named extractedBootcamp. */
  let inputString3 = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";
  let trimmedString2 = inputString.trim();
  let firstCharacter = trimmedString.charAt(0);
  let bootcampStart = trimmedString.indexOf("Bootcamp");
  let extractedBootcamp = trimmedString.slice(bootcampStart, bootcampStart + 8);
  console.log("First Character:", firstCharacter);
  console.log("Extracted Bootcamp:", extractedBootcamp);
 
console.log({
  hasJavaScript,
  codingPosition,
  startsWithWelcome,
  endsWithToday,
  lowercaseString,
  uppercaseString,
  trimmedString,
  replacedString,
  wordsArray,
  firstCharacter,
  extractedBootcamp,
});

/*
//Starter Code
//let inputString1 = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

// 1. Searching
let hasJavaScript; // Your code here
let codingPosition; // Your code here
let startsWithWelcome; // Your code here
let endsWithToday; // Your code here

// 2. Transforming
let lowercaseString; // Your code here
let uppercaseString; // Your code here
let trimmedString; // Your code here
let replacedString; // Your code here

// 3. Breaking Apart
let wordsArray; // Your code here

// 4. Retrieving
let firstCharacter; // Your code here
let extractedBootcamp; // Your code here

// Log all results
console.log({
  hasJavaScript,
  codingPosition,
  startsWithWelcome,
  endsWithToday,
  lowercaseString,
  uppercaseString,
  trimmedString,
  replacedString,
  wordsArray,
  firstCharacter,
  extractedBootcamp,
});
*/