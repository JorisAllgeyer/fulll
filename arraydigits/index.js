const input = [ 1, 2, 3, 9, 9 ];

// Solution 1:
// Reverse loop on array and store a carry for the next loop
// Returns new array, do not mutate the input array
const increment = (input) => {
    // set empty array
    const output = [];
    // init carry (retenue)
    let carry = 1;

    // Loop on this input reverse
    for (let i = input.length -1; i >= 0; i--) {
        const digit = input[i];

        if (digit === 9 && carry) {
            // if current digit is lastest 9, push 0 at the begining of output array
            output.unshift(0);
            // then set carry to 1
            carry = 1;
        } else {
            // if current digit is not 9, push digit + carry at the begining of output array
            output.unshift(digit + carry);
            // then set carry to 0
            carry = 0;
        }
    }

    // finally check if last (means first) digit of array was 9
    // so we push a new element at the begining of output array, always 1.
    if (carry === 1) output.unshift(1);

    // return final result
    return output;
}

const incremented = increment(input);
console.log('[RESULT][REVESRE + CARRY VERSION]: ', incremented);

// Solution 2:
// Using recursivity
// Modifies the input array
const incrementRecurs = (input, level) => {
    // first, if level is -1, we break and put 1 at the begining of the array
    if (level < 0) return input.unshift(1);

    // then we increment current digit
    input[level]++;

    // if new digit is 10, set it to 0, then call function decrementing the level
    if (input[level] === 10) {
        input[level] = 0;
        incrementRecurs(input, level -1);
    }
}

const incrementedRecurs = incrementRecurs(input, input.length - 1);
console.log('[RESULT][RECURS VERSION]: ', input);
