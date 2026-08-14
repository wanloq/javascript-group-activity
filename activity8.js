
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

// Tip calculator Program
/* 
Input (parameters): amount($), tip(%)
Processing: total = %increase(amount*(tip/100))
Output (return): totalTip($) 
*/

function tipCalculator(amount, tip) {

    // Processing
    const totalTip = amount * (tip / 100);

    // Output
    console.log(totalTip);

    return totalTip;
};


// Tip display Program
/* 
Input (prompt): amount($), tip(%)
Processing: totalBill = amount + totalTip
Output (alert): a formatted message: "For a bill of $(amount) with a (tip)% tip, you should leave $(totalTip). Your total is $115."
*/

function tipDisplay() {

    // Input
    const amount = Number(prompt('What is the total spend in $$ (e.g. 150)?'));
    const tip = prompt('What is the acceptable tip in percent (e.g. 15)?');

    // Processing
    let totalTip = tipCalculator(amount, tip);
    let totalBill = amount + totalTip;

    // Output
    let message = `For a total spend of $${amount} and a ${tip}% tip, you should leave $${totalTip}. Your Total bill is $${totalBill}`;

    console.log(message);
    alert(message);
};