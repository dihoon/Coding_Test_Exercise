// 시저 암호
// https://school.programmers.co.kr/learn/courses/30/lessons/12926

// 대문자 : 65 ~ 90,  소문자 : 97 ~ 122

function solution(s, n) {
    return [...s].map(x => {
        if (x === ' ') return x;
        if (x.toUpperCase() === x){
            if (x.charCodeAt()+n > 90){
                return String.fromCharCode(65 + x.charCodeAt() + n - 91);
            }
            return String.fromCharCode(x.charCodeAt() + n);
        }else if (x.toLowerCase() === x){
            if (x.charCodeAt() + n > 122){
                return String.fromCharCode(97 + x.charCodeAt() + n - 123);
            }
            return String.fromCharCode(x.charCodeAt() + n);
        }
    }).join("");
}