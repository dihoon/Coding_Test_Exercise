// 이진수 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120885

function solution(bin1, bin2) {
  const result = [];
  const arr1 = [...bin1].map(x=>parseInt(x));
  const arr2 = [...bin2].map(x=>parseInt(x));
  
  const len = Math.max(arr1.length, arr2.length);
  
  let flag = 0;
  for (let i=-1;i>=-len;i--){
      const num1 = !arr1.at(i) ? 0 : arr1.at(i);
      const num2 = !arr2.at(i) ? 0 : arr2.at(i);
      
      let sum = flag + num1 + num2;
      if (sum >= 2){
          flag = 1;
          sum = sum > 2 ? 1 : 0;
      }else {
          flag = 0;
      }
      result.unshift(sum);
  }
  if (flag === 1) result.unshift(1);
  return result.join("");
}