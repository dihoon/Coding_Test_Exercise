// 로그인 성공?
// https://school.programmers.co.kr/learn/courses/30/lessons/120883

function solution(id_pw, db) {
  const info = db.find(x => x[0] === id_pw[0]);
  
  if (!info){
      return "fail";
  }else if (id_pw[1] === info[1]){
      return "login";
  }else {
      return "wrong pw";
  }
}