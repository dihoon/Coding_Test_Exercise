// 최소직사각형
// https://school.programmers.co.kr/learn/courses/30/lessons/86491

const sizes = [[60, 50], [30, 70], [60, 30], [80, 40]];

function solution(sizes) {
    return sizes.map(x=>x.sort((a,b)=>a-b)).reduce((r,v)=>{
        if(r[0]<v[0]) r[0] = v[0];
        if(r[1]<v[1]) r[1] = v[1];
        return r; 
    }).reduce((r,x)=>r*=x);
}