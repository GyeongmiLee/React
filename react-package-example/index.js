// const randomColor = require("randomcolor"); //외부패키지안에서는 경로 명시할 필요없음!, require가 알아서 node module에서 가져옴

// 제일먼저 install에있는거 다운로드 한 뒤, 사용법대로 쓰면 된다.

// 어떻게 사용하는지는 https://www.npmjs.com/package/randomcolor 에 명시되어있음!
// console.log(randomColor());

//세가지 변수를 만들어서 randomColor 담아보기
// let color1 = randomColor();
// let color2= randomColor();
// let color3= randomColor();

// console.log(color1, color2, color3);

//혼자 다시 해본 실습 
const randomColor2 = require("randomcolor"); // 변수 만들어서 require메소드 사용해 모듈을 불러온다.(commonjs 방식!)
let color = randomColor2(); //변수에 randomcolor2라는 함수 담아서
console.log(color); //console.log로 찍어준다.
// 터미널에서 react-package-example 파일로 경로 맞춘 후, npm start 해준다!

