// App.js = 상위 컴포넌트
// props = 상위 컴포넌트에서 값을 하위 컴포넌트로 내려보냄
// 리액트는 단방향 (부모 -> 자식)
// 자식 -> 부모 XXXX 불가
// props는 부모 컴포넌트가 설정하는 값이며 자식에겐 읽기 전용 값

import ClassComponent from './component/ClassComponent';
import QuizComponent from './component/QuizComponent';
import StateComponent from './component/StateComponent';
import {Fragment} from 'react';

function App() {
  return (
    // 상위 컴포넌트에 다 때려박으면 값 변경될 때마다 다시 쓰여지기 때문에
    // 예 - 수정펜으로 틀린 부분만 수정하는 게 아니라 전체를 다시 다 프린트 하는 방식
    // 그래서 아래처럼 하위 컴포넌트로 쪼개서 가는 게 좋음 (리액트의 버추얼 DOM이 해결해줌)
    <Fragment>
      <StateComponent/>
      <hr/>
      <br/>
      <QuizComponent/>
      <hr/>
      <br/>
      <ClassComponent name="홍길동" age={20}/> {/* 클래스 컴포넌트로 매개변수 넣어줌 */}
    </Fragment>
  )
}

export default App;