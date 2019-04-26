var readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function (line) {
    console.log(reverseShuffleMerge(line));
});

function reverseShuffleMerge(s) {
    var obj = {};
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            obj[s[i]]++;
        }
        else {
            obj[s[i]] = 1;
        }
    }
    for (let item in obj) {
        obj[item] = {required: obj[item]/2, left: obj[item], current: 0}
    }
    var solution = [];
    for (var i = s.length - 1; i >= 0; i--){
        if (obj[s[i]].current < obj[s[i]].required) {
            while (solution.length) {
                if (s[i] < solution[solution.length - 1]){
                    if (obj[solution[solution.length - 1]].current - 1 + obj[solution[solution.length - 1]].left >= obj[solution[solution.length - 1]].required) {
                        obj[solution[solution.length - 1]].current--;
                        solution.pop();
                    }
                    else{
                        break;
                    }
                }
                else{
                    break;
                }
            }
            solution.push([s[i]]);
            obj[s[i]].current++;
        }
        obj[s[i]].left --;
    }
    return solution.join("");
}