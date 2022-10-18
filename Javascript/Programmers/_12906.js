// 같은 숫자는 싫어
// https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr)
{
    return arr.reduce((r,v,i)=>{
        if (r.length === 0) r.push(v);
        else if(r[r.length-1] !== v) r.push(v);
        return r;
    },[]);
}