// 핸드폰 번호 가리기
// https://school.programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
    const length = phone_number.length;
    return '*'.repeat(length-4)+phone_number.slice(length-4);
}