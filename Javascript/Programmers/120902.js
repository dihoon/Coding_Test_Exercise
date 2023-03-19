// 문자열 계산하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120902

function solution(my_string) {
  const arr = my_string.split(" ");
  let result = 0;
  let op = 1;
  for (let i=0;i<arr.length;i++){
      if (i % 2 === 1){
          arr[i] === "+" ? op = 1 : op = -1;
      } else {
          result += op*parseInt(arr[i]);   
      }
  }
  return result;
}