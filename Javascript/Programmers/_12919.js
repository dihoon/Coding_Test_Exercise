// 서울에서 김서방 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/12919

const seoul = ["Jane", "Kim"];

function solution(seoul) {
    return `김서방은 ${seoul.indexOf("Kim")}에 있다`; 
}

console.log(solution(seoul));