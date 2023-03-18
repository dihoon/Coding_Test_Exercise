// 옹알이 (1)
// https://school.programmers.co.kr/learn/courses/30/lessons/120956

function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];
  let cnt = 0;
  for (c of babbling) {
      let str = c;
      for (let i=0;i<4;i++){
          str = str.replace(`${words[i]}`, " ");
      }
      if (str.replace(/\s/g, "")==="") cnt++;
  }
  return cnt;
}