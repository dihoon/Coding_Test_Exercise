// [1차] 다트 게임
// https://school.programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
    let result = 0;
    const arr = [];
    const scores = [];
    for(let i=0;i<dartResult.length;i++){
        if (dartResult[i]==1 && dartResult[i+1]==0) {
            continue;
        }
        else if(dartResult[i] == 0 && dartResult[i-1] == 1) arr.push(10);
        else if (['S','D','T','*','#'].includes(dartResult[i])) arr.push(dartResult[i]);
        else if (Number.isInteger(+dartResult[i])) arr.push(+dartResult[i]);
    }
    
    for (let i=0;i<arr.length;i++){
        switch (arr[i]){
            case 'S':
                scores.push(arr[i-1]);
                break;
            case 'D':
                scores.push(arr[i-1]**2);
                break;
            case 'T':
                scores.push(arr[i-1]**3);
                break;
            case '*':
                scores[scores.length-1] = scores[scores.length-1]*2;
                scores[scores.length-2] = scores[scores.length-2]*2;
                break;
            case '#':
                scores[scores.length-1] = -scores[scores.length-1];
        }
    }
    return scores.reduce((r,x)=>r+x);
}

console.log(solution('1T2D3D#'));