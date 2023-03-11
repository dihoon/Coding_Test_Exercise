// 모스부호 (1) 
// https://school.programmers.co.kr/learn/courses/30/lessons/120838

function solution(letter) {
  const morse = { 
  '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
  '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
  '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
  '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
  '-.--':'y','--..':'z'
}
  let result = "";
  for (let c of letter.split(" ")){
      result += morse[c];
  }
  return result;
}