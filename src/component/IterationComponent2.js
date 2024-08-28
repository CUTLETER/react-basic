import { useState } from "react";

function IterationComponent2() {

  //1. 기존 가짜 데이터 생성 -> 서버에서 받아오는 데이터로 추후에 바꿀 것
  const data = [{id: 1, topic: 'HELLO WORLD'},
                {id: 2, topic: '안녕하세요'}
  ];

  let [list, setList] = useState(data);

  //3. input 태그를 state로 관리 - 태그에 value 연결, 이벤트 연결
  let [topic, setTopic] = useState('');

  
  //4. 버튼 클릭 시에 input state 값을 배열에다가 추가
  let handleClick = (e) => {
    console.log('리스트의 마지막 값 : '+list[list.length-1].id);
    
    let obj = {id: list[list.length-1].id + 1, topic: topic}; // 왼쪽 topic은 키, 오른쪽 topic은 state의 topic (let [topic, setTopic] = useState('');)
    // id는 list의 마지막 값 + 1
    let newList = list.concat(obj); // 배열.concat(배열), 배열.concat(오브젝트)
    console.log('newList : '+newList);
    console.log('obj : '+obj);
    setList(newList);
    setTopic('');
  }
  
  //5. 삭제
  let handleRemove = (id) => { // 클릭한 대상의 id 값
    // filter 
    let newList = list.filter((value) => {
      console.log(value);
      return value.id != 2; // true인 데이터만 필터링
    })

    console.log(newList);
    setList(newList); // 필터링 시킨 데이터를 state로 업데이트 시키고 렌더링
  }

  //2. 리스트를 이용해서 반복 처리 - 이벤트가 태그(5번 삭제)보다 밑에 위치해야 돼서 아래로 끌어내림
  //value 안에 들어 있는 값 적절히 뽑아내기 : {id: 1, topic: 'HELLO WORLD'}, {id: 2, topic: '안녕하세요'}
  const newList = list.map(value => <li key={value.id} 
                                        onDoubleClick={() => {handleRemove(value.id)}}>{value.topic}</li>)
                                        // handleRemove(value.id) 이 안에 매개변수 넣어버리면 함수를 호출하고 반환 받겠단 의미라
                                        // () => {handleRemove(value.id)} 로 써야 함
                                        // 이벤트 함수에 매개변수를 주고 싶으면 () => {실행시킬 함수(매개변수)} 
  
  return(
    <>
      <h3>간단한 할일 목록 만들기</h3>
      <ul>
        {newList}
      </ul>

      <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} />
      <button type="button" onClick={handleClick}>추가하기</button>
    </>
  )
}

export default IterationComponent2;