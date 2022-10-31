// 실패율
// https://school.programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
    const difficulty = Array(N).fill(0).map((x,i)=>{
        let cnt = 0;
        let pass = 0;
        stages.forEach(x=>{
            if (x === i+1) cnt++;
            if (x > i+1) pass++;
        })
        return x = [cnt/pass, i+1];
    });
    return difficulty.sort((a,b)=>b[0]-a[0]).map(x=>x[1]);
}