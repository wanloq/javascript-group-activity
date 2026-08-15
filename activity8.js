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

 */



/* 
Input (parameters): amount($), tip(%)
Processing: total = %increase(amount*(tip/100))
Output (return): totalTip($) 
*/

// Tip calculator function: Returns total tip in dollars
function tipCalculator(amount, tip) {

    // Processing
    const totalTip = amount * (tip / 100);

    // Output
    console.log(totalTip);

    return totalTip;
};




/* 
Input (prompt): amount($), tip(%), number of heads
Input (parameters): take (split) a boolean as parameter 
Input (function call): get the shared bill and computed totalTip from the splitBill and tipCalculator functions

Processing: 
use if-else block to check which of the tip types the user wants to display


Output (): build a formatted messages depending on which of the options (split bill or not) 
*/

// Tip display function: Displays the formatted text summary both as alert and in html.
function tipDisplay(split) {
    const output = document.querySelector("#output");

    let message = ''

    // Input
    const amount = parseFloat(prompt('What is the total spend in $$ (e.g. 150)?'));
    const tip = parseFloat(prompt('What is the acceptable tip in percent (e.g. 15)?'));
    const shareNum = parseInt(prompt('How many will share the bill (e.g. 3)?'));

    // check which button the user clicked
    if (split) {

        // if user clicked the button to "split the bill":
        // get  the shared bill from the splitBill function
        let sharedBill = splitBill(amount, tip, shareNum)

        // build message for a split bill
        message = `The total bill of $${totalBill} has been successfully divided equally between ${shareNum} people and each person will pay $${sharedBill}`;

    } else {
        // if user clicked the "calculate tip" button:
        // get the total tip from the tip calculator function
        const totalTip = tipCalculator(amount, tip);

        // get the total bill from the splitBill function
        totalBill = splitBill(amount, totalTip, 1);

        // build message for non-split bills
        message = `For a total spend of $${amount} and a ${tip}% tip, you should leave $${totalTip}. Your Total bill is $${totalBill}`;

    }

    // display the message on the page as html and as an alert also
    output.innerText = message;
    alert(message)

};


/* 
Part 5: Extension Challenge 
Add a third function that calculates the total bill split evenly between a given number 
of people  


Input (parameters): amount($), tip(%) number of heads, 

Processing: 
totalBill = amount + totalTip
sharedBill = totalBill/number of heads

Output (alert): return sharedBill
*/

// Split the bill function: Returns a divided bill between the number of heads indicated
function splitBill(amount, totalTip, shareNum) {

    // Processing
    let totalBill = amount + totalTip;

    // equal share (no rounding)
    let sharedBill = totalBill / shareNum;

    return sharedBill;

}