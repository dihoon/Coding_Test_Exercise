// 행렬의 덧셈
// https://school.programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
    let result = Array.from({length:arr1.length}, (v)=>v = Array(arr1[0].length).fill(0));

    for (let i=0;i<arr1.length;i++){
        for (let j=0;j<arr1[0].length;j++){
            result[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return result;
}