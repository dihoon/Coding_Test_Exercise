// 정수 제곱근 판별
// https://school.programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
    const num = n**(1/2);

    if (Number.isInteger(num)){
        return (num+1)**2;
    }
    return -1;
}