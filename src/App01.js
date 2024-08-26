// 예제로 여러 App.js 파일을 만들어 둘 수 없어서
// (원래 같으면 xxxx01.xxxx 이런 식으로 파생했을 텐데)
// 기본 App.js를 App01.js로 변경하고
// 새로운 App.js 생성함

//import logo from './logo.svg';
//import './App.css';

import { Fragment } from "react";


/*
  필요한 파일들을 불러올 때 webpack loader 사용하면 됨
  웹팩 로더는 직접 설치가 가능하고 보일러 플레이트로 만들 경우는 자동 설정됨
  웹팩 로더 안에 babel 이라는 도구가 ES6 -> ES5로 다운그레이드 시키는 역할을 함
*/

function App() { // JSX 문법
 
  let name = "홍길동";
  let age = 20;
 
  return (
    <Fragment> {/* 또는 <> */}
    <h3>JSX 문법</h3>
    <ul style={{fontSize : 20}}>
      {/* 주석은 중괄호로 묶임 */}
      <li>1. JS 파일은 JSX라고 부름. 주석은 alt+shift+a로 처리할 수 있음</li>
      <li>2. JSX 문법에선 반드시 하나의 태그를 return 해야 함</li>
      <li>2-1. 두 개 이상의 태그를 쓰고 싶다면 div로 묶어도 되고 Fragment 또는 <></> 꺽쇠로 묶어주면 됨</li>
      <li>3. 변수 값을 사용할 때는 중괄호 {}로 참조하면 됨</li>
      <li>3-1. 예시 {name}, {age}</li>
      <li>4. if문 보다는 삼항 연산식을 주로 사용함</li>
      <li>5. 화면에 보여주고 싶은 문장이 없다면? Null을 return시키면 됨</li>
      <li>5-1. 물론 'undefined'으로 반환해도 되긴 하지만 지양해야 함</li>
      <li>6. DOM 요소에 css를 직접 넣을 때는 객체형으로 묶고, 속성은 카멜 표기법으로 사용함(기본 단위는 px)</li>
      <li>7. 클래스 속성은 전부 className으로 변경됨</li>
      <li>8. input이나 br처럼 홀로 사용되는 태그는 반드시 /로 닫는 태그를 작성해야 함</li>
      <li>8-1. 예시 {/* <input name="name"/> 또는 <br/> */} </li>
    </ul>

    <div className="example">
      클래스명 넣고 싶으면? className에다가 넣기
      <br/>
      <input name="name"/>
    </div>

    <div style={{color : "blue", backgroundColor : "grey", fontSize : 30}}> {/* 중괄호 2개로 싸서 감싸야 함, 하나는 변수값 참조용 {}, 나머지는 객체를 {키:값} 묶어주는 용 */}
      {name === '홍길동' ? '리액트' : '리액트 X'}
      {age === 20 ? <h5>20 맞음</h5> : <h6>20 아님</h6>} {/* 태그도 넣을 수 있음 */}
      {age !== 20 ? <h5>20 아님</h5> : null} {/* 화면에 아무것도 뜨지 않음 */}
    </div>
    </Fragment> /* 또는 </> */
  );
}

export default App; // index.js 에서 쓰임
