// [1차] 비밀지도
// https://school.programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
    const result = [];
    const len = n;

    for (let i=0;i<len;i++){
        let str = '';

        const barr1 = getBinaryCode(arr1[i], len);
        const barr2 = getBinaryCode(arr2[i], len);

        for (let i=0;i<len;i++){
            if(barr1[i] === 1 || barr2[i] === 1) str += '#';
            else if(barr1[i] === 0 && barr2[i] === 0) str += ' ';
        }
        result.push(str);
    }
    return result;
}

function getBinaryCode(num, len){
    const result = Array.from({length:len}).fill(0);
    const temp = [];

    while(num > 1){
        temp.push(num % 2);
        num = Math.floor(num/2);
    }
    temp.push(num);

    return temp.length < len ? new Array(len-temp.length).fill(0).concat(temp.reverse()) : temp.reverse();
}
