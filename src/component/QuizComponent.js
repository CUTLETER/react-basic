import { useState } from "react";

function QuizComponent() {
  let [cnt, setCnt] = useState(0);

  // 선생님 답
  //let increase = () => {
  //  setData(prev => prev +1); // (prev) => {return prev + 1} 의 간략한 표현 // prev - 이전 값
  //}

  return (
    <div style={{color : "red", fontSize : 30}}>
      카운트 : {cnt} <br/>
      <button onClick={() => setCnt(cnt+1)}>증가</button> {/* 또는 {increase} */}
      <button onClick={() => setCnt(cnt-1)}>감소</button>
      <button onClick={() => setCnt(0)}>초기화</button>
    </div>
  )
}

export default QuizComponent;