//ctrl j => terminal 단축키 , node 설치 후 vscode한번 껐다가 켜야 실행됨!

const calc = require("./calc"); // node.js의 내장함수임!

//모듈 내의 함수를 사용하기!
console.log(calc.add(1,2))
console.log(calc.add(4,5))
console.log(calc.sub(10,2))

// 중요한건 node에서 모듈단위로 기능을 내보내고, 사용가능 하다는것!