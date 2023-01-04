import React, { useRef, useState } from "react";
const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef(); // useRef() 함수는, mutableobject는 dom요소 접근할수있는 객체를 반환함
  const contentInput = useRef();
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });
  //목적: onChange에 목적이 같은 코드 중복
  const handlerChangeState = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    //name을 우리가 author / content 즉, 초기값 키의 이름과 일치시켜놨으니 사용가능!
    setState({
      ...state, //spread로 전체 펼쳐주고
      [e.target.name]: e.target.value,
    });
  };

  //목적: button 클릭할때마다 submit 되게
  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return; // 더이상 진행이 안되게
    }
    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    console.log(state);
    alert("저장성공");
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };
  // setState는 상태를 바꿔주는 함수이기때문에 여기에 접근할 수는 없음,
  // 값을 확인하려면 state.author 해서 접근해야함
  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          value={state.author} //state만 써주면 객체만 들어감
          name="author" //input에서의 name은 데이터 넘길때 넘어가는애~
          onChange={handlerChangeState}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          placeholder="일기의 내용을 입력해주세요"
          value={state.content}
          onChange={handlerChangeState}
        />
      </div>
      <div>
        <span>오늘의 감정점수:</span>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handlerChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};
export default DiaryEditor;
