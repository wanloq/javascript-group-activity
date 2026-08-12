
// Activity 4

/*
Scenario: Build a "Grade Rounder and Reporter" that asks for a student's exact 
numeric score, rounds it, and builds a message reporting the rounded score along 
with the student's name in all uppercase. 
Step 1 — Understand the Problem: Explain the goal in your own words. 
Step 2 — Identify Inputs: What does the program need from the user? 
Step 3 — Identify Processing: What Math and string methods will you need? 
Step 4 — Identify Outputs: What should the final message look like? 
Step 5 — Plan the Solution: Write your plan in plain English first. 
Step 6 — Write the Code: Combine Math methods, string methods, and template 
literals. 
Step 7 — Test the Program: 
● Name: "grace", Score: 89.5 
● Name: "Chuka", Score: 100 
● Name: " Bisi " (extra spaces), Score 59.3 
Step 8 — Improve the Solution: Discuss whether trimming the name before 
uppercasing it would make the program more reliable.

 */

// Report generation Program
/* 
Input (prompt): name, score
Processing: roundedScore = Math.Round(score)
Output (alert): Hello User, you bought -- number of -- for 
*/
function generateReport() {

    // Input
    const name = prompt('Hello! What is your name?').trim().toLocaleUpperCase();
    const score = Number(prompt('What was your score?'));

    // Processing
    const roundedScore = Math.round(score);

    // Output
    let result = alert(`Hello ${name}, your score is ${roundedScore}.`)
    console.log(result);

    return result;
};

/*
Part 5: Extension Challenge 
Add Math.random() to simulate a "bonus point" between 0 and 5 that gets added to 
the score before rounding. Discuss how you'd make sure the random bonus is always 
a whole number. 

 */

// Report generation Program
/* 
Input (prompt): name, score
Processing: roundedScore = Math.Round(score)
Output (alert): Hello User, you bought -- number of -- for 
*/
function generateReportExtended() {

    // Input
    const name = prompt('Hello! What is your name?').trim().toLocaleUpperCase();
    const score = Number(prompt('What was your score?'));

    // Processing
    // generate random number between 0 and 5
    const bonus = Math.floor(Math.random() * 6)
    const roundedScore = Math.round(score);

    // Output
    let result = alert(`Hello ${name}, your score  with added ${bonus} bonus points is ${roundedScore + bonus}.`)
    console.log(result);

    return result;
};
