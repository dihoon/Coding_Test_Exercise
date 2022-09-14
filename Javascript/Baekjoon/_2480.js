// 주사위 세개
// https://www.acmicpc.net/problem/2480

const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? 0 : "input.txt").toString().trim().split(" ");

var lst = input.map(x => parseInt(x));
var set = new Set(lst);

let result = 0;

for (let data of set){
    if (lst.filter(x => x === data).length === 2){
        result = 1000 + data*100;
        break;
    }else if(lst.filter(x => x === data).length === 3){
        result = 10000 + data*1000;
        break;
    }else{
        result = 100*(Math.max.apply(null, lst));
    }
}

console.log(result);