// 문자열 내 p와 y의 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s){
    return [...s.toLowerCase()].reduce((x,e,)=>{
        if(e === 'p'){
          x[0]++;  
        }else if(e === 'y'){
            x[1]++;
        }return x;
    },[0,0]).reduce((x,e)=>{
        if (x === e){
            return true;
        }
        return false;
    });
}