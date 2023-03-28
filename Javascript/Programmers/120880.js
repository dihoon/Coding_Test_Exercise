// 특이한 정렬
// https://school.programmers.co.kr/learn/courses/30/lessons/120880

function solution(numlist, n) {
  return numlist.map(x=>[n-x,x]).sort((a,b)=> Math.abs(a[0])-Math.abs(b[0]) || b[1]-a[1]).map(x=>x[1]);
}