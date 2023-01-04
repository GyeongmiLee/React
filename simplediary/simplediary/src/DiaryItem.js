const DiaryItem = ({
  author,
  content,
  created_date,
  emotion,
  id,
  onDelete,
}) => {
  // ...it으로 넘겨준(prop) 데이터 매개변수로 받아야함
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자: {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
        {/* ms로 저장했던 date를 .toLocaleString()이용해서 한국시간으로 바꿔준다~~ */}
      </div>
      <div className="content">{content}</div>
      <button
        onClick={() => {
          console.log(id);
          if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
            onDelete(id); //prop으로 DiaryItem에게 전달했으니까, 사용가능~
          }
        }}
      >
        삭제하기
      </button>
    </div>
  );
};
export default DiaryItem;
