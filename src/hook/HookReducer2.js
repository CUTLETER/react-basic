import { act, useReducer, useState } from "react";

const nameReducer = (state, action) => {
  console.log(action); // input 태그에서 값을 받아옴 - 확인

  // state는 유지하면서 전달되는 name에 따라서 key를 바꿈
  state = {...state, [action.name]: action.value};
  return state;
}

function HookReducer2() {

  // name과 age를 동시에 처리할 수 있는 nameReducer() 생성하기
  // 초기 값은 {name: '', age: 0}
  // nameReducer 함수 안에서는 객체 값을 state = {...state, [키]:value} 이용해서 바꾸기
  // action 함수는 매개변수를 값으로 주면 됨

  const [state, action] = useReducer(nameReducer, {name: '', age: 0}); // nameReducer의 state로 전달됨
  console.log(state);
  

  let handleChange = (e) => {
    
  }

  return(
    <>
      <input type="text" name="name" value={state.name} onChange={(e) => action(e.target)}/> {/* nameReducer의 action으로 전달됨 */}
      <input type="number" name="age" value={state.age} onChange={(e) => action(e.target)}/>

      리듀서를 통해서 변경된 값 : {state.name}, {state.age}
    </>
  )
}

export default HookReducer2;