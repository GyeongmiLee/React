import React, { useState, useEffect } from "react";
// 자식 컴포넌트
const CounterA = React.memo(({ count }) => {
  //useEffect 왜쓰냐면, update될때 다시한번 확인하고, console 찍으려고(두번째 인자 입력안하면 update시 lifecycle 제어)
  useEffect(() => {
    console.log(`counterA update - count: ${count}`);
  });
  return <div>{count}</div>;
  // 버튼 눌러도 콘솔 안찍힘, count값이(prop)이 안변하니까
});
const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`counterB update - count: ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};
//버튼 누르면 콘솔찍힘, 왜? 객체이니까 (얕은 비교를 함) , 이용한 메소드 areEqual
const areEqual = (prevProps, nextProps) => {
  //   return true; // 이전 props, 현재 props 같다 -> 리랜더링 일으키지않음
  //   return false; // 이전 props, 현재 props 다르다 -> 리랜더링 일으켜라
  if (prevProps.obj.count === nextProps.obj.count) {
    return true;
  }
  return false;
};

const MemoizedCounterB = React.memo(CounterB, areEqual); // CounterB는 areEqual 함수에 판단에 따라서 할지말지 결정됨
// 부모 컴포넌트
const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });
  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }
        >
          B button
        </button>
      </div>
    </div>
  );
};
export default OptimizeTest;
