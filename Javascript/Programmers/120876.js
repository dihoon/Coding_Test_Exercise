// 겹치는 선분의 길이
// https://school.programmers.co.kr/learn/courses/30/lessons/120876

function solution(lines) {
  const arr = Array.from({length:201}).fill(0);
  for (let i=0;i<lines.length;i++){
      for (let j=lines[i][0];j<lines[i][1];j++){
          arr[j+100] += 1;
      }
  }
  return arr.filter(x=>x>1).length;
}