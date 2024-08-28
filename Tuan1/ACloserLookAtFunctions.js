// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?
// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]
// Hints: Use many of the tools you learned about in this and the last section

console.log("-----Coding Challenge #1");
// Step 1: Define the poll object with the required methods
const poll = {
question: 'What is your favourite programming language?',
options: ['JavaScript', 'Python', 'Rust', 'C++'],
answers: [0, 0, 0, 0], // This keeps track of the votes for each option

// Method to register a new answer
registerNewAnswer: function() {
    // Display the prompt with the poll question and options
    const input = prompt(`${this.question}\n${this.options.map((opt, i) => `${i}: ${opt}`).join('\n')}\n(Write option number)`);
    
    // Validate and process the input
    const answer = Number(input);
    if (Number.isNaN(answer) || answer < 0 || answer >= this.options.length) {
    alert('Invalid input. Please enter a number corresponding to the options.');
    return;
    }

    // Update the answers array
    this.answers[answer]++;

    // Display the results
    this.displayResults();
},

// Method to display the results
displayResults: function(type = 'array') {
    if (type === 'array') {
    console.log(this.answers);
    } else if (type === 'string') {
    console.log(`Poll results are ${this.answers.join(', ')}`);
    }
}
};

// Step 2: Add an event listener to the "Answer poll" button
document.getElementById('answerPollButton').addEventListener('click', () => {
poll.registerNewAnswer();
});

// Bonus: Test the displayResults method with external arrays
const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];

const displayResults = function(results, type = 'array') {
if (type === 'array') {
    console.log(results);
} else if (type === 'string') {
    console.log(`Poll results are ${results.join(', ')}`);
}
};

// Testing the bonus part
console.log('Test Data 1:');
displayResults(data1);
console.log('Test Data 2:');
displayResults(data2, 'string');
