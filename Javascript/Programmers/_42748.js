// K번째수
// https://school.programmers.co.kr/learn/courses/30/lessons/42748


function solution(array, commands) {
    return commands.reduce((r,v)=>{
        r.push(array.slice(v[0]-1, v[1]).sort((a, b)=> a-b)[v[2]-1]);
        return r;
    },[]);
}