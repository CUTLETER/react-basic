import { useState } from "react"

function EventComponentQ() {
  let [form, setForm] = useState({data: '', text: ''})
  
  let handleChange = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    setForm({data: e.target.value, text: form.text}); 

    //let copy = {...form, [form.data]: e.target.value}
    //setForm(copy);
  }

  let handleClick = (e) => {
    console.log(e.target.value);
    setForm({data: '', text: form.data});
  }

  return (
    <div>
      input 데이터 핸들링 실습하기
      클릭 시 데이터는 공백으로 처리하고
      결과는 사용자가 입력한 값으로 처리하기
      state는 두 개가 필요하므로 객체로 관리해도 됨
      <input type="text" value={form.data} onChange={handleChange}/>
      <button type="button" onClick={handleClick}>추가하기</button>
      <p>{form.text}</p>
    </div>
  )
}

export default EventComponentQ;