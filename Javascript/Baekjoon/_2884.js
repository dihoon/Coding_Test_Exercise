// 알람 시계
// https://www.acmicpc.net/problem/2884

const fs = require("fs");
const input = fs.readFileSync(process.platform === "linux" ? 0 : "input.txt").toString().trim().split(" ");

let H = parseInt(input[0]);
let M = parseInt(input[1]);

if (M < 45){

    if (H >= 1){
        H -= 1;
    }else{
        H = 23;
    }
    M +=15;
}else{
    M -= 45;
}

console.log([H, M].join(" "));