// OX퀴즈
// https://school.programmers.co.kr/learn/courses/30/lessons/120907

function solution(quiz) {
  const result = [];
  for (let i=0;i<quiz.length;i++){
      let [a, op, b, eq, re] = quiz[i].split(" ");
      a = parseInt(a);
      b = parseInt(b);
      re = parseInt(re);
      if (op === "+"){
          if (a + b === re) result.push("O");
          else result.push("X");
      } else {
          if (a - b === re) result.push("O");
          else result.push("X");
      }
  }
  return result;
}