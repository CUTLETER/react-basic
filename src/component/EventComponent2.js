import { useState } from "react";

function EventComponent2() {

  // useState를 일일이 만들지 않고 하나로 만들어서 관리하기
  let [form, setForm] = useState({name: '', topic: ''}) // 초기값이 객체

  let handleForm = (e) => {
    console.log(e.target);
    console.log(e.target.name); // 태그명
    console.log(e.target.value); // 사용자가 입력한 값

    let copy = {...form, [e.target.name]:e.target.value} // 기존 값은 복사하고, 특정 키만 바꿈
    console.log(copy);
    setForm(copy);
  }

  let handleClick = (e) => {
    alert(`${form.name} 님의 할일 ${form.topic}`);
    setForm({name: '', topic: ''});
  }

  return (
    <div>
      input 태그 - 객체 핸들링
      <br/>
      <input type="text" name="name" value={form.name} onChange={handleForm} />
      <br/>
      결과 state 값 : 
      <hr/>
      <input type="text" name="topic" value={form.topic} onChange={handleForm}/>
      <br/>
      결과 state 값 : {form.topic}
      <br/>
      <button type="button" onClick={handleClick} >click 이벤트</button>
    </div>
  )
}

export default EventComponent2;