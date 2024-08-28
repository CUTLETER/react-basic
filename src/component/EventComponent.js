import { useState } from "react";

function EventComponent() {
  //let a = document.querySelector("input[name=name]");
  //console.log(a.value);
  //리액트에선 이렇게 쓰지 말고
  //아래처럼 써야 함

  //1. 먼저 input이 관리할 값은 state로 선언해야 함
  let [name, setName] = useState(''); // state 생성
  let [topic, setTopic] = useState(''); // state 생성
  let [menu, setMenu] = useState('피자');
  //2. input 태그의 value에다가 state 연결시킴
  //3. 이벤트를 통해서 input 값을 제어함
  let handleName = (e) => { // e 이벤트 객체
    //console.log('change 이벤트 발생');
    //console.log(e);
    //console.log(e.target); // 이벤트가 발생한 input 태그를 뽑아냄
    console.log(e.target.value); // 사용자가 input 태그에 입력한 값을 뽑아냄
    setName(e.target.value); // 사용자가 입력한 값으로 state를 바꿈
    //state란 리액트에서 이벤트에 의해 변경되는 동적인 값
    //버튼의 onClick, input의 onChange 등 이벤트에 의해 입력값이 변경된 경우 사용됨
    //useState라는 Hook을 사용하여 state를 다룰 수 있음
    //useState란? 컴포넌트에서 state를 추가할 때 사용함
  }

  let handleTopic = (e) => {
    setTopic(e.target.value);
  }

  let handleClick = () => {
    alert(`${name} 님의 입력값 ${topic}`);
    setName('');
    setTopic('');
  }

  let handleKeyUp = (e) => { // 입력 후 엔터 쳤을 때도 입력되게끔 이벤트 생성함
    console.log('키보드를 눌렀다 뗄 때 이벤트 발생함');
    console.log(e); // 안에 key : "Enter", keyCode : 13 이런 값이 담겨 있음
    if (e.key === 'Enter') {
      handleClick();
    }
  }

  let handleMenu = (e) => {
    console.log(e);
    setMenu(e.target.value);
  }

  return(
    <div>
      input 이벤트 핸들링
      <br/>
      <input type="text" name="name" value={name} onChange={handleName} />
      <br/>
      결과 state 값 : {name}
      <hr/>
      <input type="text" name="topic" value={topic} onChange={handleTopic} onKeyUp={handleKeyUp} />
      <br/>
      결과 state 값 : {topic}
      <br/>
      <button type="button" onClick={handleClick}>click 이벤트</button>

      <hr/>
            <h3>셀렉트 태그 핸들링(실습)</h3>
            <pre>셀렉트 태그가 체인지 될 때 선택한 결과를 아래에 출력</pre>            

            <select onChange={handleMenu}>
                <option onChange={handleMenu}>피자</option>
                <option>햄버거</option>
                <option>치킨</option>
            </select>

            <h3>선택한 결과</h3>
            <p>{menu}</p>
    </div>
  )
}

export default EventComponent;