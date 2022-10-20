// 예산
// https://school.programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
    return d.sort((a, b)=>a-b).reduce((r,v)=>{
        if (r[0] >= v) {
            r[0]-=v;
            r[1]++;
        }
        return r;
    }, [budget, 0])[1];
}