import { useState } from "react";

function StateComponent() {
  // useState는 함수형 컴포넌트에서만 사용할 수 있는 hook
  // 반환 타입은 배열이고 [0]번째에 현재 데이터, [1]번째엔 값을 변경하는 setter 함수를 반환함

  //let result = useState('초기값');
  //let data = result[0]; // data
  //let setData = result[1]; // function
  let [data, setData] = useState('초기값');
  let [msg, setMsg] = useState('black');

  let enter = () => {
    //data = "값 변경함" // 값을 직접 바꾸는 것을 허용하지 않음
    setData("값은 이렇게 변경해야 함!"); // 값을 변경하는 setter 함수 -> 비동기적으로 데이터를 변경함, 리렌더링 수행함
  }

  //console.log(result);
  
  return (
    <div>
      현재 데이터 {data}
      값 변경하기 <button onClick={
        /* data = '값 변경' */
        enter /* enter 대신 () => {몸체} 넣어도 됨 */
      }>입장</button>
      값 변경하기 <button onClick={() => setData("퇴장 완료")}>퇴장</button>
      <br/>

      <h3 style={{color : msg}}>{msg}</h3>
      <button onClick={() => {setMsg('red')}}>붉은 색</button>
      <button onClick={() => {setMsg('green')}}>푸른 색</button>
      <button onClick={() => {setMsg('yellow')}}>그 사이 이무진</button>
    </div>
  )
}

export default StateComponent;