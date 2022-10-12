// 약수의 개수와 덧셈
// https://school.programmers.co.kr/learn/courses/30/lessons/77884

const f = function (num){
    let cnt = 0;
    for(let i=1;i<num**(1/2);i++){
        if(num % i === 0) cnt+=2;
    }
    if (Number.isInteger(num**(1/2))) cnt++; // 제곱근이 정수면 약수 홀수개
    return cnt;
}

function solution(left, right) {
    let result = 0;

    for(let i=left;i<=right;i++){
        if(f(i)%2===0) result += i;
        else result -= i;
    }
    return result;
}

function solution2(left, right){
    return Array.from({length:right-left+1},(v, i)=> left + i).reduce((r,v)=>{
        if (Number.isInteger(v**(1/2))) r-=v;
        else r+=v;
        return r;
    },0);
}