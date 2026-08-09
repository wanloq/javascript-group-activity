// Part 4
/* 
Scenario: Your group needs to build a simple "Welcome Program" that greets a new 
user by name and tells them what year they were born, based on their age. 
Step 1 — Understand the Problem: In your own words, explain what this program 
needs to do. 
Step 2 — Identify Inputs: What information does the program need from the user? 
Step 3 — Identify Processing: What will the program need to calculate or figure out? 
Step 4 — Identify Outputs: What should the program display to the user? 
Step 5 — Plan the Solution: Before writing any code, write out the steps in plain 
English. 
Step 6 — Write the Code: Use prompt() to collect the user's name and age, store 
them in variables, and use console.log() or alert() to greet them. 
Step 7 — Test the Program: Try these test cases: 
● Name: "Sam", Age: 20 
● Name: "Bola", Age: 45 
Step 8 — Improve the Solution: As a group, discuss: is your variable naming clear? 
Could someone else read your code and immediately understand what it does? 
 */


// welcome program 
/* 
Input (prompt): name, age.
Calculation: dob = currentYear - age
Output: Hello user, you were born in the year ----
*/
function greet() {
    const name = prompt('What is your name?')
    const age = prompt('How old are you?')
    const currentYear = 2026
    const yearOfBirth = currentYear - age
    let greeting = alert(`Hello ${name}, you were born in the year ${yearOfBirth}`)
    console.log(greeting)
    return greeting;
}

/* Part 5: Extension Challenge 
Modify your program so that it also stores the user's favorite hobby in a variable and 
includes it in the final greeting message. Discuss what data type the hobby should 
be stored as, and why. 
 */

// welcome program Extension
/* 
Input (prompt): name, age, hobby
Calculation: dob = currentYear - age
Output: Hello user, you were born in the year ----
*/
function greetMore() {
    const name = prompt('What is your name?');
    const age = prompt('How old are you?');
    const currentYear = 2026;
    const yearOfBirth = currentYear - age;
    let greeting = alert(`Hello ${name}, you were born in the year ${yearOfBirth}`)
    console.log(greeting);
    return greeting;
};

let a = 5
let b = 10
console.log(`print: $${a*b}`)
console.log("print: " + a+b)
console.log("print: " + (a+b))