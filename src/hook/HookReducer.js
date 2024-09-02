import {useReducer} from "react";
import { myReducer } from "../util/MyReducer";

// util 폴더의 myreducer로 옮김
// reducer 함수는 컴포넌트 "외부"에서 state 관리함
// const myReducer = (state, action) => {
//   console.log(state);
//   console.log(action);

//   // action에 따라서 state를 변경하는 조건문
//   if(action === "increase") {
//     state = {value: state.value + 1};
//   } else if (action === "decrease") {
//     state = {value: state.value - 1};
//   } else if (action === "reset") {
//     state = {value: 0}
//   }

//   return state; // 여기서 반환되는 state는 reducer의 상태값으로 다시 반환됨
// }

function HookReducer() {

  //const result = useReducer(myReducer, {value:0}); // 리듀서 함수, 초기값
  //console.log(result);

  // 반환 [state 값, 리듀서 함수의 상태를 바꿀 수 있는 action 함수]
  const [state, acitonFunc] = useReducer(myReducer, {value: 0});

  const handleIncrease = () => {
    acitonFunc("increase"); // actionFunc를 호출하면 myReducer 함수가 실행됨
                            // "increase"가 myReducer함수의 action 값으로 들어감
  }

  return(
    <>
      <h3>useReducer</h3>
      리듀서로 관리되는 state 값 : {state.value}
      <button type="button" onClick={handleIncrease}>증가</button>
      <button type="button" onClick={() => acitonFunc("decrease")}>감소</button> {/* "decrease"가 myReducer함수의 action 값으로 들어감 */}
      <button type="button" onClick={() => acitonFunc("reset")}>초기화</button>
    </>
  )
}

export default HookReducer;