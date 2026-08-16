
/* ================================================================================== */
// Activity 2

/*Part 4: Collaborative Technical Challenge 
Scenario: Build a "Receipt Generator" that asks the user for an item name, its price, 
and how many they're buying, then displays a formatted receipt line. 
Step 1 — Understand the Problem: Explain the goal in your own words. 
Step 2 — Identify Inputs: What three pieces of information do you need? 
Step 3 — Identify Processing: What calculation turns those inputs into a total? 
Step 4 — Identify Outputs: What should the final receipt look like? 
Step 5 — Plan the Solution: Write the steps in plain English first. 
Step 6 — Write the Code: Use variables, a calculation, and a template literal to build 
the final message. 
Step 7 — Test the Program: 
● Item: "Notebook", Price: 2.50, Quantity: 4 
● Item: "Pen", Price: 0.75, Quantity: 10 
● Quantity entered as 0 
● Price entered as "free" (non-numeric) 
● Quantity entered as 1 
Step 8 — Improve the Solution: Could you make the output easier to read by 
rounding the total or adding a currency symbol? Discuss as a group. 

 */

// Receipt generation Program
/* 
Input (prompt): userName, itemName, itemPrice, quantity
Processing: total = itemPrice * quantity
Output (alert): Hello User, you bought -- number of -- for 
*/
const activity2 = document.querySelector("#activity2");

function generateReceipt() {

    // Input
    const userName = prompt('Hello! What is your name?').trim();
    const itemName = prompt('What did you buy?').trim();
    const itemPrice = Number(prompt('What is the price of each?'));
    const quantity = parseInt(prompt('How many did you take?'));

    // Processing
    const total = itemPrice * quantity;

    // Output
    message = `Hello ${userName}, you bought: ${quantity} ${itemName} for $${itemPrice} each. Your total bill is: $${total}`;

    // display the message on the page as html and as an alert also
    activity2.innerText = message;
    alert(message);
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
    const userName = prompt('Hello! What is your name?').trim();
    const itemName = prompt('What did you buy?').trim();
    const itemPrice = Number(prompt('What is the price of each?'));
    const quantity = parseInt(prompt('How many did you take?'));
    discount = Number(prompt('Enter Discount Amount (number only)'));

    // Processing
    const total = itemPrice * quantity;

    // Output
    message = `Hello ${userName}, you bought: ${quantity} ${itemName} for $${itemPrice} each. The total cost is: $${total} and your total bill after a $${discount} discount is: $${total - discount}`;

    // display the message on the page as html and as an alert also
    activity2.innerText = message;
    alert(message);
};
