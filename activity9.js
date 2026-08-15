
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

const activity9 = document.querySelector("#activity9");
let message = '';

function mathToolkit(id) {

    // Processing
    if (id == 'percent') {

        // Input: percentage number
        // Processing: num / 100
        // Output: Decimal number
        const num = parseFloat(prompt('Enter Percentage Number.'))
        const convPercentToDec = (num) => num / 100;
        message = `${num}% is equal to ${convPercentToDec(num)}.`;

    } else if (id == 'celsius') {

        // Input: Celsius temp as number
        // Processing: (1.8*celTemp) + 32
        // Output: Fahrenheit temp as number
        const celTemp = parseFloat(prompt('Enter Celsius Temperature'))
        const convCelsiusToFahrenheit = (celTemp) => (1.8 * celTemp) + 32;
        message = `${celTemp}°C is equivalent to ${Math.round(convCelsiusToFahrenheit(celTemp))}°F.`;

    } else if (id == 'fahrenheit') {

        // Input: Fahrenheit temp as number
        // Processing: (fahTemp - 32) * 0.556
        // Output: Celsius temp as number
        const fahTemp = parseFloat(prompt('Enter Fahrenheit Temperature'))
        const convFahrenheitToCelsius = (fahTemp) => (fahTemp - 32) * 0.556;
        message = `${fahTemp}°F is equivalent to ${Math.round(convFahrenheitToCelsius(fahTemp))}°C.`;

    } else if (id = 'area') {

        // Input: Length and Breadth as numbers
        // Processing: l * b
        // Output: Area as number
        const length = parseFloat(prompt('Enter Length in meters'))
        const breadth = parseFloat(prompt('Enter Breadth in meters'))
        const calcAreaRect = (length, breadth) => length * breadth;
        message = `The Area of the ${length} x ${breadth} rectangle is ${calcAreaRect(length, breadth)}sqm.`;

    }

    // Output
    activity9.innerText = message
    alert(message)
};