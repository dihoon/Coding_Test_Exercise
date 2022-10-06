// 이상한 문자 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
    return [...s].reduce((r, e)=>{
        e = (e !==' ' && r.flag) ? e.toUpperCase() : e.toLowerCase();
        if(e !==' ' && r.flag) r.flag = false;
        else if(e !==' ' && !r.flag) r.flag = true;  
        else r.flag = true;
        r.result+=e;
        return r;
    }, {result:"", flag: true}).result;
}