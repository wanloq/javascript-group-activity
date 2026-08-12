
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
Part 5: Extension Challenge 
Add Math.random() to simulate a "bonus point" between 0 and 5 that gets added to 
the score before rounding. Discuss how you'd make sure the random bonus is always 
a whole number. 

 */

// Receipt generation Program
/* 
Input (prompt): userName, itemName, itemPrice, quantity
Processing: total = itemPrice * quantity
Output (alert): Hello User, you bought -- number of -- for 
*/
function generateReceipt() {

    // Input
    const userName = prompt('Hello! What is your name?');
    const itemName = prompt('What did you buy?');
    const itemPrice = prompt('What is the price of each?');
    const quantity = prompt('How many did you take?');

    // Processing
    const total = itemPrice * quantity;

    // Output
    let result = alert(`Hello ${userName}, you bought: ${quantity} ${itemName} for $${itemPrice} each. Your total bill is: $${total}`)
    console.log(result);

    return result;
};

/*
Part 5: Extension Challenge 
Add a "discount code" variable to your program. If a discount amount (as a number) 
is applied, subtract it from the total before displaying the final receipt line. 
 */

// Receipt generation Program
/* 
Input (prompt): userName, itemName, itemPrice, quantity
Processing: total = itemPrice * quantity
Output (alert): Hello User, you bought -- number of -- for 
*/
function generateExtendedReceipt() {

    let discount = 0;
    // Input
    const userName = prompt('Hello! What is your name?');
    const itemName = prompt('What did you buy?');
    const itemPrice = prompt('What is the price of each?');
    const quantity = prompt('How many did you take?');
    discount = prompt('Enter Discount Amount (number only)');

    // Processing
    const total = itemPrice * quantity;

    // Output
    let result = alert(`Hello ${userName}, you bought: ${quantity} ${itemName} for $${itemPrice} each. The total cost is: $${total} and your total bill after a $${discount} discount is: $${total - discount}`)
    console.log(result);

    return result;
};
