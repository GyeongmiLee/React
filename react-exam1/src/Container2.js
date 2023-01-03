const Container2 = ({ children }) => {
  //props를 받을건데, children이라는 이름으로 받음
  return (
    <div style={{ margin: 20, padding: 20, border: "1px solid gray" }}>
      {children}
    </div>
  );
};
export default Container2;
