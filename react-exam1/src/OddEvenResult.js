// 동적으로 데이터 받아올것임! state 바뀔때마다 확인 가능하게
const OddEvenResult = ({ count }) => {
  console.log(count);
  return <>{count % 2 === 0 ? "짝수" : "홀수"}</>; // 먼저 태그 넣어두고(언제나 return 필수)
};
export default OddEvenResult; // export default 필요!
