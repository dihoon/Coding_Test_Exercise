// 가운데 글자 가져오기
// https://school.programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
    const len = s.length;
    if (len % 2 === 1) return s[(len-len%2)/2];
    return s.slice(len/2-1,len/2+1);
}

function solution2(s) {
    return s.length % 2 === 1 ? s[Math.floor(s.length/2)] : s.slice(s.length/2-1, s.length/2+1);
}