
/* ================================================================================== */
// Activity 5

/*Part 4: Collaborative Technical Challenge 
Scenario: Build a "Movie Ticket Pricer" that asks for a person's age and whether it's a 
weekday or weekend, then decides the ticket price using conditional logic (e.g., 
discounts for children, seniors, or weekday showings). 
Step 1 — Understand the Problem: Explain the pricing rules your group wants to use, 
in plain English. 
Step 2 — Identify Inputs: What information does the program need? 
Step 3 — Identify Processing: What conditions determine the final price? 
Step 4 — Identify Outputs: What should the program display? 
Step 5 — Plan the Solution: Write out your decision logic as plain-English rules before 
coding. 
Step 6 — Write the Code: Implement your rules using if/else if/else. 
Step 7 — Test the Program: 
● Age: 8, Day: weekday 
● Age: 70, Day: weekend 
● Age: 30, Day: weekend 
● Age: 17, Day: weekday 
Step 8 — Improve the Solution: Are there overlapping conditions that could cause 
confusion? Discuss how to order your conditions to avoid mistakes. 
 */

// Movie ticket pricing Program
/* 
Input (prompt): 
name, 
age, 
day.

Processing: 
if weekday = 100
if weekend = 150
exclude senior seniors (over 95)
if senior (over 70) = -20
if child (under 12) = -30
babies not allowed

Output (alert): 
Hey (name), the cost of your ticket for a (day) movie after applying discounts and bonuses is ($price)
*/

const activity5 = document.querySelector("#activity5");

function getMovieTicket() {

    // Input
    const name = prompt('Hey movie lover! What is your name?').trim();
    let day = prompt('"Weekday" or "Weekend" ticket?').trim();
    // we could check and end the program here if day is not valid

    const age = parseInt(prompt('How old are you?'));
    // we could also check and end the program here if age is not a valid number


    // Processing
    let price = 0;
    let output = '';
    day = day.toLowerCase();

    if (day == 'weekday') {

        price = 100;

        if (age <= 1) {
            price = 'Sorry Baby, you are too young.';
        } else if (age >= 1 && age <= 12) {
            price = price - 30;
        } else if (age >= 70 && age <= 95) {
            price = price - 20;
        } else if (age >= 96) {
            price = 'Sorry you are obsolete!';
        } else {
            price = price;
        };

        message = `Hey ${name}, the cost of your ticket for a ${day} movie after applying discounts and bonuses is $${price}`;

        // price = age <= 1 ? 'Sorry Baby, you are too young.'
        //     : age >= 1 && age <= 12 ? (price - 30)
        //         : age >= 70 && age <= 95 ? (price - 20)
        //             : age > 96 ? 'Sorry you are obsolete!'
        //                 : price;

    } else if (day == 'weekend') {

        price = 150;

        if (age <= 1) {
            price = 'Sorry Baby, you are too young.';
        } else if (age >= 1 && age <= 12) {
            price = price - 30;
        } else if (age >= 70 && age <= 95) {
            price = price - 20;
        } else if (age >= 96) {
            price = 'Sorry you are obsolete!';
        } else {
            price = price;
        };

        message = `Hey ${name}, the cost of your ticket for a ${day} movie after applying discounts and bonuses is $${price}`;

        // price = age <= 1 ? 'Sorry Baby, you are too young.'
        //     : age >= 1 && age <= 12 ? (price - 30)
        //         : age >= 70 && age <= 95 ? (price - 20)
        //             : age > 96 ? 'Sorry you are obsolete!'
        //                 : price;

    } else {
        message = day.toUpperCase() + (' is not a valid input. Please respond with either "Weekday" or "Weekend" when choosing a day.');

    };


    // display the message on the page as html and as an alert also
    activity5.innerText = message;
    alert(message);
};
