// 합성수 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/120846

function solution(n) {
  const arr = Array(n).fill(1);
  for (let i=1;i<n;i++){
      if (arr[i] !== 0){
          for (let j=2*i+1;j<n;j+=(i+1)){
              if (arr[j] !== 0) arr[j] = 0;
          }   
      }
  }
  return n-arr.filter(x=>x===1).length;
}