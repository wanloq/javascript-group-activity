
/* ================================================================================== */
// Activity 9

/*

Part 4: Collaborative Technical Challenge 
Scenario: Build a small "Math Helper Toolkit" using arrow functions for common 
calculations a student might need: converting a percentage to a decimal, 
calculating a rectangle's area, and converting Celsius to Fahrenheit. 
Step 1 — Understand the Problem: Explain what each small helper function needs to 
do. 
Step 2 — Identify Inputs: What parameters does each arrow function need? 
Step 3 — Identify Processing: What's the formula or calculation inside each one? 
Step 4 — Identify Outputs: What should each function return, and how will you 
display the results? 
Step 5 — Plan the Solution: Decide together how many arrow functions you need and 
what each is responsible for. 
Step 6 — Write the Code: Write each helper as an arrow function, then call each one 
with test values and log the results. 
Step 7 — Test the Program: 
● Percentage to decimal: 25 
● Rectangle area: length 4, width 9 
● Celsius to Fahrenheit: 35 
● Celsius to Fahrenheit: 100 
● Rectangle area: length 10, width 5 
Step 8 — Improve the Solution: Discuss whether writing these as arrow functions felt 
more natural than regular function declarations, and why. 
Part 5: Extension Challenge 
Add an arrow function that takes a Fahrenheit temperature and converts it back to 
Celsius, then use it to check that your two conversion functions "undo" each other 
correctly.

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