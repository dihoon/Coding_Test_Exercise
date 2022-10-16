// 최대공약수와 최소공배수
// https://school.programmers.co.kr/learn/courses/30/lessons/12940

// 유클리드 호제법을 활용한다.

function solution(n, m) {

    const GCD = (function getGCD(a, b){
        while(a % b !==0){
            [a, b] = [b, a % b];
        }
        return b;
    }(n, m));
    const LCM = n*m/GCD;

    return [GCD, LCM];
}