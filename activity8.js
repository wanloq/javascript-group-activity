
// Activity 8

/*
 
Scenario: Build a "Tip Calculator Toolkit" made of two functions: one that calculates a 
tip based on a bill amount and tip percentage, and another that displays a 
formatted final message. 
Step 1 — Understand the Problem: Explain what each function should do, separately. 
Step 2 — Identify Inputs: What parameters does each function need? 
Step 3 — Identify Processing: What calculation happens inside the tip function? 
Step 4 — Identify Outputs: What should each function produce or display? 
Step 5 — Plan the Solution: Decide as a group how many functions you'll use and 
what each one is responsible for, before writing code. 
Step 6 — Write the Code: Declare your functions with parameters, then call them with 
test values. 
Step 7 — Test the Program 
Part 5: Extension Challenge 
Add a third function that calculates the total bill split evenly between a given number 
of people  

 */

// Trip calculator Program
/* 
Input (prompt): userName, itemName, itemPrice, quantity
Processing: total = itemPrice * quantity
Output (alert): Hello User, you bought -- number of -- for 
*/
function tripCalculator() {

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
