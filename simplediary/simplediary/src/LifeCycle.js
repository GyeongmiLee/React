import React, { useState, useEffect } from "react";

{
  /* mount 제어 / update / unmount */
}
const UnMountTest = () => {
  /* 종료되는 시점 제어 */
  useEffect(() => {
    console.log("mount");
    return () => {
      console.log("unmount");
    };
  }, []);

  return <div>UnMountTest</div>;
};

const LifeCycle = () => {
  const [turn, setTurn] = useState(false);
  const toggle = () => setTurn(!turn); //화살표함수로 부른다.

  return (
    <div>
      <button onClick={toggle}>on/off</button>
      {turn && <UnMountTest />}
      {/* 단락회로평가로 t일경우에만 UnMountTest 나온다. */}
    </div>
  );
};
export default LifeCycle;
