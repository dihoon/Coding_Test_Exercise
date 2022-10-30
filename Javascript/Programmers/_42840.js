// 모의고사
// https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
    const scores = [0,0,0];
    const s1 = [1,2,3,4,5]; // 5
    const s2 = [2,1,2,3,2,4,2,5]; // 8
    const s3 = [3,3,1,1,2,2,4,4,5,5]; // 10
    let max;

    for (let i=0;i<answers.length;i++){
        if (s1[i%5] === answers[i]) scores[0]+=1;
        if (s2[i%8] === answers[i]) scores[1]+=1;
        if (s3[i%10] === answers[i]) scores[2]+=1;
    }
    max = Math.max(...scores);
    console.log(scores);
    return scores.reduce((r,x,i)=>{
        if (x === max){r.push(i+1);} 
        return r;
    }, []);
}