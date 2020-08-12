const rl = require('readline-sync');
const fastcsv = require('fast-csv');
const fs = require('fs');
const ws = fs.createWriteStream("output.csv");

// taking user input to be processed later on
function userInput (){for(let i=0;i<10;i++) {
     let answer = rl.question('Please enter your input: ');
    console.log(`\nYour input: ${answer} \n- - - - - - - - - - - - `);
    return answer;
}}

let text = userInput()

// converting the string to uppercase
let upperCase = text.toUpperCase()
console.log('\nTask #1(Uppercase):', upperCase)

// converting the string to alternate lower and upper case
export function lowerUpperCase(s:string) {
    return s.split('').map((c,i) => 
        i % 2 == 0 ? c.toLowerCase() : c.toUpperCase()
    ).join('');   
}
console.log('\nTask #2.1 (alternate lower and upper case):', lowerUpperCase(text))

// converting the string to alternate upper and lower case
export function upperLowerCase (s:string) {
    let chars = s.toLowerCase().split("");
    for (let i = 0; i < chars.length; i += 2) {
      chars[i] = chars[i].toUpperCase();
    }
    return chars.join("");
  };
console.log('\nTask #2.2 (alternate upper and lower case):', upperLowerCase(text));

// splitting the string into an array of substrings
let splitText = text.split('');
console.log('\nTask #3 (splitting the string to be saved on a CSV file):\n', splitText)

// writing the array of substrings to a CSV file
fastcsv
    .write(splitText)
    .pipe(ws, console.log('\nCSV created!'));