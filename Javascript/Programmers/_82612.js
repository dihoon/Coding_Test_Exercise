// 부족한 금액 계산하기
// https://school.programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
    const result = count*(count+1)/2*price - money;
    return result < 0 ? 0 : result;
}