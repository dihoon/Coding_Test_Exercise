// 2016년
// https://school.programmers.co.kr/learn/courses/30/lessons/12901

// 1월 1일 : 금요일 FRI
function solution(a, b) {
    const DAY_OF_THE_WEEK = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const lastOfMonth = [31,29,31,30,31,30,31,31,30,31,30,31];
    const temp = lastOfMonth.slice(0,a-1);
    let dates = 0;
    if (temp.length !==0) dates = 4 + temp.reduce((r,x)=>r+=x) + b;
    else dates = 4 + b;
    return DAY_OF_THE_WEEK[dates % 7];
}