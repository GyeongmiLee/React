import Myheader from "./Myheader";
import MyFooter from "./MyFooter";
import MyArticle from "./MyArticle";
import Counter from "./Counter";
import "./App.css";
import Container from "./Container";
import Counter2 from "./Counter2";
import Container2 from "./Container2";

function App() {
  const style = {
    App: { backgroundColor: "black" },
    h2: { color: "red" },
    bold_text: { color: "green" },
  };
  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    // initialValue: 2,
    //객체를 펼쳐서 저장할때! spread 연산자
  };
  const propsexample = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    // initialValue: 0,
  };
  let num = 5;
  return (
    <div className="App">
      <Container>
        <Myheader />
        <Counter {...counterProps} />
        {/* 객체의 형태일때는 spread 연산자로 하지만, 하나씩 전달할때는 initialValue = {5} 이런식으로 전달하면 된다! */}
        {/* props: 부모 컴포넌트인 app 컴포넌트에서 자식컴포넌트인 
      counter컴포넌트에게 어떤 값을 이름 붙여서 전달하는것 
      Counter.js에서 매개변수로 props를 받아야 사용가능*/}
        <header className="App-header">
          <h2>안녕리액트</h2>
          <b id="bold_text">
            {num}는 : {num % 2 === 0 ? "짝수" : "홀수"}
            {/* 조건에 따라 렌더링하는 방식: 조건부 렌더링 */}
          </b>
        </header>
        <Container2>
          <Counter2 {...propsexample} />
          {/* 값을 전달하거나, 변수, 함수를 쓸때는 {이름} 써준다. */}
        </Container2>
        <MyArticle />
        <MyFooter />
      </Container>
    </div>
  );
}

export default App;
