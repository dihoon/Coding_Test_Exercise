// 각도기
// https://school.programmers.co.kr/learn/courses/30/lessons/120829

function solution(angle) {
  switch (true) {
    case (angle < 90) : {
      return 1;
    }
    case (angle === 90) : {
      return 2;
    }
    case (angle < 180) : {
      return 3;
    }
    case (angle === 180) : {
      return 4;
    }
  }
}