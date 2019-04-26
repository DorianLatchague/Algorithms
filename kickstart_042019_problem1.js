// Problem
// Anna has a row of N blocks, each with exactly one letter from A to Z written on it. The blocks are numbered 1, 2, ..., N from left to right.

// Today, she is learning about palindromes. A palindrome is a string that is the same written forwards and backwards. For example, ANNA, RACECAR, AAA and X are all palindromes, while AB, FROG and YOYO are not.

// Bob wants to test how well Anna understands palindromes, and will ask her Q questions. The i-th question is: can Anna use all of the blocks numbered from Li to Ri, inclusive, rearranging them if necessary, to form a palindrome? After each question, Anna puts the blocks back in their original positions.

// Please help Anna by finding out how many of Bob's questions she can answer "yes" to.

// Input
// The first line of the input gives the number of test cases, T. T test cases follow. Each test case starts with a line containing the two integers N and Q, the number of blocks and the number of questions, respectively. Then, another line follows, containing a string of N uppercase characters (A to Z). Then, Q lines follow. The i-th line contains the two integers Li to Ri, describing the i-th question.

// Output
// For each test case, output one line containing Case #x: y, where x is the test case number (starting from 1) and y is the number of questions Anna can answer "yes" to.

// Limits
// Time limit: 30 seconds per test set.
// Memory limit: 1GB.
// 1 ≤ T ≤ 100. 1 ≤ Li ≤ Ri ≤ N.

// Test set 1 (Visible)
// 1 ≤ N ≤ 20.
// 1 ≤ Q ≤ 20.

// Test set 2 (Hidden)
// 1 ≤ N ≤ 105.
// 1 ≤ Q ≤ 105.

// Sample

// Input 
 	
// Output 
 
// 2
// 7 5
// ABAACCA
// 3 6
// 4 4
// 2 5
// 6 7
// 3 7
// 3 5
// XYZ
// 1 3
// 1 3
// 1 3
// 1 3
// 1 3

  
// Case #1: 3
// Case #2: 0


  
// In Sample Case #1, N = 7 and Q = 5.
// For the first question, Anna must use the blocks AACC. She can rearrange these blocks into the palindrome ACCA (or CAAC).
// For the second question, Anna must use the blocks A. This is already a palindrome, so she does not need to rearrange them.
// For the third question, Anna must use the blocks BAAC. These blocks cannot be rearranged into a palindrome.
// For the fourth question, Anna must use the blocks CA. These blocks cannot be rearranged into a palindrome.
// For the fifth question, Anna must use the blocks AACCA. She can rearrange these blocks to form the palindrome ACACA (or CAAAC).
// In total, she is able to answer "yes" to 3 of Bob's questions, so the answer is 3.

// In Sample Case #2, N = 3 and Q = 5. For the first question, Anna must use the blocks XYZ to create a palindrome. This is impossible, and since the rest of Bob's questions are the same as the first one, the answer is 0.

var readline = require('readline');

var readLines = 0;
var second = 0;
var testCase = 1;
var questions = [];
var third = false;
var blocks;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function (line) {
    if( readLines === 0 ) {
    } else {
        if (second === 0){
            questions = []
            var secondLine = line.split(' ');
            second = parseInt(secondLine[1]) + 1;
            third = true;
        }
        else{
            if(third){
                blocks = line;
                third = false;
            }
            else{
                var question = line.split(' ');
                question[0] = parseInt(question[0]);
                question[1] = parseInt(question[1]);
                questions.push(question)
            }
            if (second === 1){
                solve(blocks, questions);
                testCase ++;
            }
            second --;
        }
    }
    readLines++;
});

function solve(blocks, questions){
    var answer_count = 0;
    for(let i = 0; i < questions.length; i++){
        let obj = {};
        let odd_number = 0;
        for(let j = questions[i][0]-1; j < questions[i][1]; j++){
            if (!obj[blocks[j]]){
                obj[blocks[j]] = 1;
            }
            else{
                obj[blocks[j]] ++;
            }
        }
        for (let item in obj){
            if (obj[item] % 2 === 1){
                odd_number ++;
            }
        }
        if ((questions[i][1]-questions[i][0]) % 2 === 0 && odd_number === 1){
            answer_count ++;
        }
        else if ((questions[i][1]-questions[i][0]) % 2 === 1 && odd_number === 0){
            answer_count ++;
        }
    }
    console.log(`case #${testCase}: ${answer_count}`);
}