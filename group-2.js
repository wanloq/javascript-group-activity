// if (score > 0) {
//     let grade = score >= 90 ? "A"
//         : score >= 80 ? "B"
//             : score >= 70 ? "C"
//                 : score >= 60 ? "D"
//                     : "F";
//     // console.log(`Grade: ${grade}`); // Output: Grade: B
// }

// let weekday = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
// let weekend = ['saturday', 'sunday'];

let price = 0;
let age = 10;
let day = 'weekend'


if (day.toLowerCase() == 'weekday') {
    price = 1000;
    price = age <= 1 ? 'Babies are not allowed'
        : age >= 1 && age <= 12 ? (price - 300)
            : age >= 70 && age <= 95 ? (price - 200)
                : 'You are obsolete!';
    console.log(price)
    return price
} else if (day.toLowerCase() == 'weekend') {
    price = 1500;
    price = age <= 1 ? 'Babies are not allowed'
        : age >= 1 && age <= 12 ? (price - 300)
            : age >= 70 && age <= 95 ? (price - 200)
                : 'You are obsolete!';
    console.log(price)
    return price
    console.log(day.toLowerCase(), 'is Invalid')
} else {
    price = day.toUpperCase() + (' is not a valid. Only respond with either "Weekday" or "Weekend" when choosing a day.')
    console.log(price)
};


// console.log(`print: $${a*b}`)