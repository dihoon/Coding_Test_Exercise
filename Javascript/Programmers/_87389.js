// 나머지가 1이 되는 수 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/87389

function solution(n, x=1) {
    while(x++){
        if(n%x === 1){
            return x;
        }
    }
}