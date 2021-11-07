// By doing this exercise I wanted to get the right balance bewteen simplicity, 
// scalability and human understanding

// Let's pretend we have the following rule:

// We want a program that takes an object of rules: For each key (number) we get a message.
// The program loops between 1 and N.

// Each time the current index is divisible by a number present in the rules we display the
// associated message (the program concatenates messages if several indexes are divisible)

// We also want a default rule: if none of the numbers presents in rules are divisible by 
// index we display the index number itself

const rules = { 3: 'Fizz', 5: 'Buzz', 10: 'Lizz' }

// This "utils" function returns boolean when a is divisible by b
const divisibleBy = (a, b) => a % b === 0;

// This function handles business rules
const messageHandler = (number, rules) => {

    // We want to loop on each rules to check if current number is divisible by the rule
    const message = Object.keys(rules).reduce((output, rule) => {

        if (divisibleBy(number, rule)) {
            // We give a little check: if output is a number we reset it (erase default rule)
            isNaN(output) ? output += rules[rule] : output = rules[rule];
        }

        return output;

        // ↓ output is initialized by default with the current number (default rule)
    }, number);

    console.log(message);
}

// This function has only the loop role
const fizzBuzz = ({ start = 1, stop = 100, rules }) => {

    for (let i = start; i <= stop; i++) {
        messageHandler(i, rules);
    }
}

fizzBuzz({ rules });