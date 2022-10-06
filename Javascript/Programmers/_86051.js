// 없는 숫자 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers){
    return Array(10).fill(0,0,10).map((x, i)=> x=i).filter(x=>!numbers.includes(x)).reduce((r,e)=>r+e);
}