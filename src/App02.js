import MyComponent from './component/MyComponent';

// 예제 App
function App() {
  return (
    <>
      <MyComponent name={"홍길동"} age={20} addr={"서울시"}/>
      <MyComponent name="이순신" age={10} addr="부산시"/>
    </>
  )
}
export default App;