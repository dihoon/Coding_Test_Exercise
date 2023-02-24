// 옷가게 할인 받기
// https://school.programmers.co.kr/learn/courses/30/lessons/120818

function solution(price) {
  let p = price
  if (price >= 500000){
      p = price*(0.8);
  }else if (price >= 300000){
      p = price*(0.9);
  }else if (price >= 100000){
      p = price*(0.95);
  }else{
      p = price;
  }
  return Math.trunc(p);
}