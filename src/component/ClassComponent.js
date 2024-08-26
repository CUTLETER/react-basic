import { Component } from "react";

//  함수형 vs 클래스형
class ClassComponent extends Component {

  constructor(props) { // 프롭스 전달
    super(props); // 생성자 연결
    this.state = {
      a : 10000,
      b : this.props.name,
    }
  }

  // 랜더 함수 오버라이딩
  render() {
    console.log(this.props); // 프롭스는 멤버변수에 저장됨
    let {name, age} = this.props;
    let {a,b} = this.state; // state 값

    return (
      <div>
        클래스형 컴포넌트 예제
        props1 : {name}, props2 : {age}
        state1 : {a}, state2 : {b}
      </div>
    )
  }
}

export default ClassComponent;