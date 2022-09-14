// 오븐 시계
// https://www.acmicpc.net/problem/2525

const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : "input.txt").toString().trim().split(/ |\n|\r/).filter(x=>x!=='');

var h = parseInt(input[0]);
var m = parseInt(input[1]);
var delta = parseInt(input[2]);

var d_h = Math.trunc(delta/60);
var d_m = delta%60;

if ((m +d_m)>59){
    h += 1;
    m += d_m - 60;
}else{
    m += d_m;
}

if ((h + d_h)>23){
    h += d_h - 24;
}else{
    h += d_h;
}

console.log(h + ' ' + m);