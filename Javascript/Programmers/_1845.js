// 폰켓몬
// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
    const max = nums.filter((x, i)=>nums.indexOf(x) === i).length;
    return nums.length/2 > max ? max : nums.length/2; 
}