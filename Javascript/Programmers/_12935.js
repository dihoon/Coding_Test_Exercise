// 제일 작은 수 제거하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
    return arr.length === 1 ? [-1] : arr.filter((x,i)=> i !== arr.reduce((r,x,i)=>{
        if (!i) {r.i = i;}
        if (arr[r.i] > x){r.i = i;}
        return r;
    }, {}).i);
}

function solution2(arr){
    if(arr.length === 1) return [-1];
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    return arr;
}