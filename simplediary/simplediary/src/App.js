import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
function App() {
  // app -> editor 적용할 데이터
  const [data, setData] = useState([]); // 빈 배열, 앞으로 채워넣을것임
  const dataId = useRef(0);

  // 전달해줄 함수 onCreate
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author, // 비구조화 할당맞다, 키랑 이름 맞추면 그대로 들어감
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1; //current에 1 더해줘야함
    setData([newItem, ...data]);
  };

  // 삭제해줄 함수 onDelete , 어떤 아이디를 갖고있는 애를 지우면 됨!
  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId); //다른것만 뉴배열에 넣어라~
    console.log(newDiaryList); // 기억하기!! setData함수 안쓰면 삭제는 진행 안됨!
    setData(newDiaryList);
  }; // 얘를 지우려면, DiaryItem에 가서 지워야함(컴포넌트 전달은 부모인 DiaryList에게!)
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onDelete={onDelete} diaryList={data} />
      {/* prop으로 전달함!(부모=> 자식컴포넌트로 데이터 전달!) */}
    </div>
  );
}

export default App;
