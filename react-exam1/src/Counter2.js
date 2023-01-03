import React, { useState } from "react";
import OddEven from "./OddEven";
// {} 안에 함수나 변수 이름을 넣어서 사용가능하다(jsx문법)
const Counter2 = ({ initialValue }) => {
  // 비구조화 할당임(props는 객체, 부모에서 객체의 값에 넣어둔것을 {initialValue}키를 가진 값에 넣어서 쓰는것)
  console.log(initialValue); //객체 형태로 담아서 옴!
  const [count, setCount] = useState(initialValue);
  // ustState는 배열 return
  // count => 상태의 값
  // setCount => 상태 변화 함수!

  const onIncrease = () => {
    setCount(count + 1); //함수여서 ()안에 써줘야한다.
  };

  const onDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h2>내가 다시 만드는 카운터</h2>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <OddEven count={count} />
    </div>
  );
};
Counter2.defaultProps = {
  initialValue: 1,
}; // 밖에 써줘야함

export default Counter2;
