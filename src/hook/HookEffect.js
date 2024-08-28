import { useEffect, useState } from "react";

function HookEffect() {
  const [data, setData] = useState('');
  const [age, setAge] = useState('');

  // 1.
  //useEffect 훅 -> 컴포넌트의 생명주기 관리 담당
  useEffect(() => {
    console.log('마운트 이후에 동작됨 - 실행 순서2');
  });
  //console.log('코드 실행됨 - 실행 순서1');
  // 코드가 다 실행되고 나서 마운트 된 이후에 실행되므로 순서가 저렇게 됨
  // useEffect의 두번째 인자값을 비워두면
  // input 태그의 입력값이 바뀔 때마다 렌더링 되고 그때 그때 매번 실행됨

  // 2.
  //useEffect(() => {
  //  console.log('마운트 이후에 동작됨 - 딱 한 번만!');
  //}, []);
  // 두번째 인자값에 빈 배열을 적어두면
  // 마운트 이후에 딱 한 번만 실행됨 - 입력값 바뀌어도 더는 실행되지 않음
  
  // 3.
  //useEffect(() => {
  //  console.log('처음에 실행되고 나서 특정 값(예시-data)이 바뀌고 렌더링 될 때 동작함');
  //}, [data]);
  // 두번째 인자값으로 들어온 state가 변경될 때만 실행됨
  // 예시로 data 입력칸이 수정될 때만 실행되고 age 입력칸이 수정될 때는 실행되지 않음

  // 4.
  //useEffect(() => {
  //  console.log('처음에 실행되고 나서 특정 값(예시-data)이 바뀌고 렌더링 될 때 동작함');
  //}, [data, age]);
  // 두번째 인자값으로 들어온 state가 변경될 때만 실행됨
  // data, age 전부 변경될 때마다 실행됨
  // , 로 추가할 state 계속 넣으면 됨

  // 5.
  //useEffect(() => {
  //  console.log('이펙트 실행됨');
  //  return () => { // finally {conn.close();} 이렇게 종료 시키는 코드들이 주로 들어감
  //    console.log('언마운트(기존 컴포넌트 소멸되기 직전에) 되기 직전에 실행됨');
  //  }  
  //});
  
  // 6.
  //useEffect(() => {
  //  console.log('이펙트 실행됨');
  //  return () => { // finally {conn.close();} 이렇게 종료 시키는 코드들이 주로 들어감
  //    console.log('언마운트(기존 컴포넌트 소멸되기 직전에) 되기 직전에 실행됨');
  //  }  
  //}, [data]);
  // data가 변경될 때만 렌더링이 다시 돌아가는데 그때만 실행됨
  // age가 변경됐을 때는 XXX
  
  // 7. useEffect는 여러 개 쓸 수도 있음
  //useEffect(() => {
  //  console.log('이펙트 실행됨1');
  //});
  //useEffect(() => {
  //  console.log('이펙트 실행됨2'); 
  //});

  // 8. 무한 루프에 빠질 수 있는 코드 (객체 데이터 바꿀 때 조심할 것)
  //const [ex, setEx] = useState({name: '홍길동'}); // 객체 데이터
  //useEffect(() => {
  //  let copy = {...ex};
  //  setEx(copy);
  //}, [ex]);

  return(
    <>
      <input type="text" value={data} onChange={(e) => {setData(e.target.value)}}/>data
      <input type="text" value={age} onChange={(e) => {setAge(e.target.value)}}/>age
      {data}
      {age}
    </>
  )
}

export default HookEffect;