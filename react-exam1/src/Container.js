// 컴포넌트를 다른 컴포넌트의 prop으로 전달할 수있다.

const Container = ({ children }) => {
  return (
    <div
      style={{
        margin: 0,
        textAlign: "center",
        padding: 20,
        border: "1px solid gray",
      }}
    >
      {children}
    </div>
  );
};
export default Container;
