
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



// Tip calculator function
/* 
Input (parameters): amount($), tip(%)
Processing: total = %increase(amount*(tip/100))
Output (return): totalTip($) 
*/
const output = document.querySelector("#output");
let message = ''
let amount = 0;
let tip = 0;
let shareNum = 0;
let totalTip = 0;
let totalBill = 0;


function tipCalculator() {

    // Input
    amount = parseFloat(prompt('What is the total spend in $$ (e.g. 150)?'));
    tip = parseFloat(prompt('What is the acceptable tip in percent (e.g. 15)?'));

    // Processing
    const totalTip = amount * (tip / 100);

    // Output
    console.log(totalTip);

    return totalTip;
};




// Tip display function
/* 

Input (prompt): 
amount($), tip(%)
get the shared bill from the splitBill function

Processing: 
totalBill = amount + totalTip
use if-else block to check which of the tip types the user wants to display


Output (): build a formatted messages depending on which of the options (split bill or not) 

*/

function tipDisplay(split) {

    // check which button the user clicked
    // if user clicked the button to "split the bill":
    if (split) {

        // get  the shared bill from the splitBill function
        let sharedBill = splitBill()

        // build message for split bill function
        message = `The total bill of $${totalBill} has been successfully divided equally between ${shareNum} people and each person will pay $${sharedBill}`;

    } else {
        // if user clicked the "calculate tip" button:
        // get the total tip from the tip calculator function
        totalTip = tipCalculator();
        totalBill = amount + totalTip;

        // build message for 
        message = `For a total spend of $${amount} and a ${tip}% tip, you should leave $${totalTip}. Your Total bill is $${totalBill}`;

    }


    output.innerText = message;
    alert(message)

};


/* 
Split the bill extension

Part 5: Extension Challenge 
Add a third function that calculates the total bill split evenly between a given number 
of people  


Input (prompt): number of heads, 
Input (from tipDisplay function): amount($), tip(%)

Processing: 
totalBill = amount + totalTip
sharedBill = totalBill/number of heads

Output (alert): return sharedBill

*/

function splitBill() {

    // Input
    let totalTip = tipCalculator();
    shareNum = parseInt(prompt('How many will share the bill (e.g. 3)?'));

    // Processing
    let totalBill = amount + totalTip;
    let sharedBill = 0;

    // equal share (no rounding)
    sharedBill = totalBill / shareNum;

    return sharedBill;

}