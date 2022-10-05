// 최댓값과 최솟값
// https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
    return s.split(" ").reduce((r, e)=>{
        if (r.length === 0) r = [e, e];
        r[0] < e ? (r[1] < e) ? r[1] = e : null : r[0] = e;
        return r;
    }, []).join(" ");
}

function solution(s) {
    const arr = s.split(" ");
    return Math.min(...arr) + ' ' + Math.max(...arr);
}