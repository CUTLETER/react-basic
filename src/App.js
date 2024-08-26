import ClassComponent from './component/ClassComponent';
import QuizComponent from './component/QuizComponent';
import StateComponent from './component/StateComponent';
import {Fragment} from 'react';

function App() {
  return (
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