// 완주하지 못한 선수
// https://school.programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
    participant.sort();
    completion.sort();
    return participant.filter((x,i)=>x!=completion[i])[0];
}