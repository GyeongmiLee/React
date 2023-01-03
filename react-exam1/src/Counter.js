import React, { useState } from "react";
import OddEvenResult from "./OddEvenResult";
//useState라는 메서드를 이용해서 사용할거니까 react import 해줘야함!

/*
useState() 리액트 메서드!
- 배열을 반환함
- 배열의 비구조화 할당 통해서 count(값으로 사용), setCount(상태변화함수)
- setCount로 상태를 변화시킬수(업데이트) 할수 있다는 뜻!
- useState(숫자)=> 숫자는 초기값!

*/

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue); // 초기화 해준것
  // 버튼 누르면 증가, 감소하는 함수 만들어서 onclick 이벤트로 추가해줘야함
  const onIncrease = () => {
    setCount(count + 1); //++은 안됨
  };
  const onDecrease = () => {
    setCount(count - 1);
  };
  /*
    0에서 출발 -> 1씩 증가하고 -> 1씩 감소하는 : count 상태!
    */
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      {/* 카멜케이스로사용하고, {}에 함수이름 넣으면된다! */}
      <button onClick={onDecrease}>-</button>
      <OddEvenResult count={count} />
      {/* Counter컴포넌트의 자식컴포넌트로 OddEvenResult 사용할것임 , props(count) 전달*/}
    </div>
  );
};

Counter.defaultProps = {
  initialValue: 0,
};

// 즉 컴포넌트는 자신이 가진 state, 즉 상태 변화하면 상태 다시 그림!(relender)
// 여러개의 state를 하나의 컴포넌트가 가져도 상관없다!
export default Counter;
