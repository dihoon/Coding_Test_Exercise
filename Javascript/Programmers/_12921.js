// 소수 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/12921

function solution(n) {
    const arr = Array(n-1).fill(1);
    arr.unshift(0,0);
    for (let i=2;i<=n;i++){
        if (arr[i]=== 1){
            for (let j=2*i;j<=n;j+=i){
                arr[j] = 0;
            }
        }
    }
    return arr.reduce((r,x)=>r+x);
}