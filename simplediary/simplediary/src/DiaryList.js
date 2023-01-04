import DiaryItem from "./DiaryItem";

const DiaryList = ({ onDelete, diaryList }) => {
  //prop을 받으면 자식 컴포넌트에서 매개변수로 받아서 쓰는것!!
  return (
    <div className="DiaryList">
      <h2>일기리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map(
          (it) => (
            //배열의 요소가 하나하나 it으로 바뀌어서 들어오는것!
            <DiaryItem key={it.id} {...it} onDelete={onDelete} />
            /* 데이터의 고유한 아이디를 키로 지정해야한다 */
            // ...it spread 연산자로 일기에 들어오는 모든 데이터 넘겨주기(prop으로 넘겨주는거)
          )
          //{}쓸거면 return해줘야하고 안쓰면 return 안해도 됨
        )}
      </div>
    </div>
  );
};
// 혹시 app.js에서 dummydata를 제대로 안넘겨줬을때 대비 default값 넣어주기
DiaryList.defaultProps = {
  //diaryList를 비구조화할당으로 받아와서 매개변수에서 사용하므로, 객체!
  diaryList: [], // 빈 배열 넣어주기
};
export default DiaryList;
