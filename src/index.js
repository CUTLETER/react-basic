import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // App.js 를 받아서 'App'으로 import 시킴 -> render 안의 App으로 보냄
import reportWebVitals from './reportWebVitals';

// 컴포넌트에서 사용하는 전역 설정이 들어감
// App.js를 id가 root인 태그에 넣어주고 있음
const root = ReactDOM.createRoot(document.getElementById('root')); // index.html에 있는 root 받아옴
root.render( // index.html에 있는 root에 그려냄
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
