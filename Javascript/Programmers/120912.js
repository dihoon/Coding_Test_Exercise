// 7의 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/120912

function solution(array) {
  return array.reduce((r,x)=>{
      const arr = x.toString().match(/7/g);
      if (arr!==null) r+=arr.length;
      return r;
  },0);
}