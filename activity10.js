
/* ================================================================================== */
// Activity 10

/*
Part 4: Collaborative Technical Challenge 
Scenario: Build a complete "Order Checkout Program" that combines everything 
from this course: 
● Collects an item name, price, and quantity using prompt() 
● Converts inputs to the correct data types 
● Uses a function to calculate the subtotal 
● Uses a conditional (or ternary) to apply free shipping if the total is above a 
certain amount 
● Displays a final formatted receipt using a template literal 

Step 1 — Understand the Problem: As a group, describe the entire program from start to finish in your own words. 
Step 2 — Identify Inputs: List every piece of information the program needs from the user. 
Step 3 — Identify Processing: List every calculation, conversion, and decision the program must make, in order. 
Step 4 — Identify Outputs: Describe exactly what the final receipt should look like. 
Step 5 — Plan the Solution: Write the full plain-English algorithm before writing any code. Assign no fixed roles — just talk through the logic together until everyone agrees on the plan. 
Step 6 — Write the Code: Build the program using functions, conditionals/ternaries, and template literals together. 
Step 7 — Test the Program: 
● Item: "Backpack", Price: 30, Quantity: 2 
● Item: "Pen", Price: 1.5, Quantity: 20 
Step 8 — Improve the Solution: As a group, review your finished program together. Is 
there any repeated logic that could be turned into its own function? Are your variable 
and function names clear to someone reading it for the first time?

 */

// Order checkout Program
/* 
Input (prompt): item name, price, and quantity
Processing: convert firstname case, trim whitespace, generate userName
Output (alert): Hello --, your username is -- 
*/


const activity10 = document.querySelector("#activity10");
// let message = '';

function placeOrder() {

    let shippingFee = 0;

    // Input
    const itemName = prompt('Enter Product Name').trim().toUpperCase();
    const itemPrice = parseFloat(prompt('What is the price of each?'));
    const quantity = parseInt(prompt('Quantity?'));

    // Processing
    const subtotal = (itemPrice, quantity) => itemPrice * quantity;
    subtotal(itemPrice, quantity) >= 100 ? shippingFee = 0 : shippingFee = 75;
    let totalBill = subtotal(itemPrice, quantity) + shippingFee;

    // Build display message
    message = `Hey happy shopper!\n
    You bought ${quantity} no. of ${itemName} at $${itemPrice} each.\n
    A shipping fee of $${shippingFee} applies, hence your total bill is: $${totalBill}.\n
    Thank you for shopping with us!.`;

    // Output
    activity10.innerText = message;
    alert(message);
};
