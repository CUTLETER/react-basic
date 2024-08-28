function IterationComponent() {
  const arr = [1,2,3,4,5];
  //arr.map(function(value, index, items) {}) - ES5 문법
  //const newArr = arr.map((value, index) => { // map이 새로운 배열로 반환시킴
  //  return value * 10;
  //}) 이걸 아래처럼 간략하게
  //const newArr = arr.map((value, index) => value * 10);
  //console.log(newArr); - 10, 20, 30, 40, 50

  // li 태그는 리액트 엘리먼트 -> 반드시 고유한 key값을 (props로) 전달할 것
  
  const newArr = arr.map((value, index) => {
    return <li key={index/* 고유한 값 */}>값 : {value}</li>
  })
  console.log(newArr); // react.element 값이 얻어짐 (순수 엘리먼트가 아닌)

  return(
    <div>
      컴포넌트 반복
      <ul>
        {newArr}
      </ul>
    </div>
  )
}

export default IterationComponent;