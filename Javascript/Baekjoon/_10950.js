// A+B - 3
// https://www.acmicpc.net/problem/10950

// const fs = require('fs');
// const input = fs.readFileSync(process.platform === "linux" ? 0 : "input.txt").toString().trim().split(/ |\n|\r/).filter(x=>x!=="").map(x=>parseInt(x));

// for (let i=0;i<input[0];i++){
//     console.log(input[2*i+1]+input[2*i+2]);
// }

// parseInt 메서드는 숫자가 아닌 문자를 만나면 그 이전 문자까지만 사용하여 숫자로 변환하는 특성을 이용할 수 있다.

const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : "input.txt").toString().trim().split('\n');

let num = parseInt(input[0]);

for (let i=0;i<num;i++){
    let pair = input[i+1].split(' ');
    console.log(parseInt(pair[0])+parseInt(pair[1]));
}