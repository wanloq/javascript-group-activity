
/* ================================================================================== */
// Activity 3

/*
Part 4: Collaborative Technical Challenge 
Scenario: Build a "Username Generator" that asks for a person's first name and 
favorite number, converts the number properly, and creates a username by 
combining the lowercase first name with the number. 
Step 1 — Understand the Problem: Explain what the finished program should do. 
Step 2 — Identify Inputs: What does the program need from the user? 
Step 3 — Identify Processing: What conversions and string methods are needed? 
Step 4 — Identify Outputs: What should the final username look like? 
Step 5 — Plan the Solution: Write your plan in plain English first. 
Step 6 — Write the Code: Use .toLowerCase(), type conversion, and template literals 
or concatenation. 
Step 7 — Test the Program: 
● Name: "SARAH", Number: 7 
● Name: "kunle", Number: "12" (typed as text) 
● Name: " Ada " (with extra spaces), Number: 0 
● Name: "Femi", Number: 3.5 
Step 8 — Improve the Solution: Should you .trim() the name in case someone types 
extra spaces? Discuss why or why not. 

 */

// Username generation Program
/* 
Input (prompt): firstName, favNum
Processing: convert firstname case, trim whitespace, generate userName
Output (alert): Hello --, your username is -- 
*/
function generateUsername() {

    // Input
    const firstName = prompt('Enter your First Name').trim().toUpperCase();
    const favNum = prompt('What is your Favorite Number?');

    // Processing
    const userName = firstName.toLowerCase() + parseInt(favNum);

    // Output
    let result = alert(`Welcome! ${firstName}, your Username is: ${userName}`)
    console.log(result);

    return result;
};



/*
Part 5: Extension Challenge 
Add a check using .length — if the name is longer than 8 characters, only use the first 
8 characters in the username.  

 */

// Username generation Program
/* 
Input (prompt): firstName, favNum
Processing: convert firstname case, trim whitespace, is char len of firstName over 8char?, generate userName
Output (alert): Hello --, your username is -- 
*/
function generateUsernameExtended() {

    // Input
    const firstName = prompt('Enter your First Name').trim().toUpperCase();
    const favNum = prompt('What is your Favorite Number?');

    // Processing
    let shortFirstName = firstName
    if (firstName.length >= 8) {
        shortFirstName = firstName.slice(0, 7)
    }
    const userName = shortFirstName.toLowerCase() + parseInt(favNum);

    // Output
    let result = alert(`Welcome! ${firstName}, your Username is: ${userName}`)
    console.log(result);

    return result;
};
