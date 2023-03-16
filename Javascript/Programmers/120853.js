// 컨트롤 제트
// https://school.programmers.co.kr/learn/courses/30/lessons/120853

function solution(s) {
  let sum = 0;
  const arr = s.split(" ");
  for (let i=0;i<arr.length;i++){
      if (arr[i+1]==="Z" || arr[i]==="Z"){
          continue;
      }
      sum+=parseInt(arr[i]);
  }
  return sum;
}