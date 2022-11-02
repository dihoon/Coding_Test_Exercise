// 체육복
// https://school.programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {

    const temp = [...lost];
    lost = temp.filter(x=>!reserve.includes(x));
    reserve = reserve.filter(x=>!temp.includes(x));

    let cnt = 0;
    s : for (let i=0;i<reserve.length;i++){
        for (let j=0;j<lost.length;j++){
            if (cnt === lost.length) break s;
            if (Math.abs(reserve[i]-lost[j])<=1){
                cnt++;
                break;
            }
        }
    }
    return n - lost.length + cnt;
}