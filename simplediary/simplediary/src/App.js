import React, {
  useMemo,
  useEffect,
  useRef,
  useCallback,
  useReducer,
} from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date,
      };
      return [newItem, ...state];
    }
    case "REMOVE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    case "EDIT": {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, content: action.newContent } : it
      );
    }
    default:
      return state;
  }
};

export const DiaryStateContext = React.createContext(); //오직 diary state를 위한 함수이고
// 1️⃣dispatch 를 위한 함수는 따로 만들어주기(다 같이 만들어버리면 안된다)
export const DiaryDispatchContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  const getData = async () => {
    const url = "https://jsonplaceholder.typicode.com/comments";
    const res = await fetch(url).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    dispatch({ type: "INIT", data: initData });
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = useCallback((author, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: { author, content, emotion, id: dataId.current },
    });
    dataId.current += 1;
  }, []);

  const onRemove = useCallback((targetId) => {
    dispatch({ type: "REMOVE", targetId });
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    dispatch({ type: "EDIT", targetId, newContent });
  }, []);

  //2️⃣useMemo를 이용해서 값을 반환하게 만든다(절대 재생성되는일이 없게 []빈 배열로 놓기)
  // 두번째 인자로 받는 값이 바뀔때만, useMemo안의 콜백이 실행되게 만드는게 useMemo임
  // 왜 useMemo? 안쓰고 그냥 변수에 값 전달하게 만들면 app컴포넌트 시작할때마다 재생성됨
  const memoizedDispatches = useMemo(() => {
    return { onCreate, onEdit, onRemove };
  }, []);

  const getDiaryAnalysis = useMemo(() => {
    //좋은 일기 개수
    const goodCount = data.filter((it) => it.emotion >= 3).length;
    //안좋은 일기 개수
    const badCount = data.length - goodCount;
    //좋은 일기 비율
    const goodCountRatio = (goodCount / data.length) * 100;
    //전체일기를 화면에 찍어줄것임 => return필요, 여러개니까 객체로 리턴
    return { goodCount, badCount, goodCountRatio };
  }, [data.length]);
  const { goodCount, badCount, goodCountRatio } = getDiaryAnalysis;
  return (
    // (이 안에 들어있는 부분은 )이 태그에서 공급하는 데이터를 어디서든 가져다가 쓸수있다는걸 의미
    <DiaryStateContext.Provider value={data}>
      {/* 3️⃣value로 전달 */}
      <DiaryDispatchContext.Provider value={memoizedDispatches}>
        <div className="App">
          {/* 4️⃣ onCreate, onRemove등 다 지워도 전달 받을 수 있음! , DiaryEditor로 넘어감*/}
          <DiaryEditor />
          <div>전체일기:{data.length}</div>
          <div>기분 좋은 일기 개수:{goodCount}</div>
          <div>기분 나쁜 일기 개수:{badCount}</div>
          <div>기분 좋은 일기 비율:{goodCountRatio}</div>
          <DiaryList />
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
