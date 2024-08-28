import { useRef } from "react";
// useRef 는 객체를 반환해줌
// current 속성 이용하면 특정 태그에 바로 접근 가능해짐
// JS 의 querySelector(""); 와 비슷함

function HookRef() {
  let input = useRef(null);
  let handleClick = () => {
    //console.log(input);
    //console.log(input.current); // ref로 연결된 input 태그
    //console.log(input.current.type);
    //console.log(input.current.value);

    alert(input.current.value);
    input.current.focus();
    
    // value 값 자체를 강제로 변경하는 건 좋지 않고 예시) input.current.value = 1;
    // state를 통해서 바꾸는 게 좋음
  }

  return(
    <>
      <h3>useRef</h3>
      <input type="text" ref={input}/> {/* ref={} 로 let input = useRef(null); 과의 연결 */}
      <button type="button" onClick={handleClick}>등록</button>
    </>
  )
}

export default HookRef;