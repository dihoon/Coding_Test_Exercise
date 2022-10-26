// 두 개 뽑아서 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {;
    const result = [];
    for (let i=0;i<numbers.length-1;i++){
        for (let j=i+1;j<numbers.length;j++){
            result.push(numbers[i]+numbers[j]);
        }
    }
    return [...new Set(result)].sort((a, b)=>a-b);
}