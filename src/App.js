import './App.css'; // 상대 경로
import styled from './App.module.css'; // 모듈 css 파일

// https://styled-components.com/ 참조

function App() {
  // CSS 파일명은 컴포넌트와 동일하게 생성해야 함

  return(
    <>
      <div className="app-title">
        CSS 파일로 디자인 하기
      </div>
      <div style={{color: 'orange', border: '2px solid blue'}}>
        직접 디자인 하기
      </div>

      <div className={styled.app_wrap}>
        <p className={styled.title}>모듈로 디자인 하기</p>
        <p className="content">global 속성</p>
      </div>
    </>
  )
}

export default App;