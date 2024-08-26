import PropTypes from 'prop-types'; // props 타입 검사

function MyComponent( {name = "이름없음", age = 0, addr = "대한민국"} /* props */) { // props 값을 받음
  //console.log(props); 

  return (
    <div>
      이름 : {name}<br/>
      나이 : {age}<br/>
      주소 : {addr}<br/>
    </div>
  )

/*   return ( 함수 안의 매개변수가 props일 때 씀
    <div>
      이름 : {props.name}<br/>
      나이 : {props.age}<br/>
      주소 : {props.addr}<br/>
    </div>
  ) */
}

// props의 기본 값 지정 - 위에 매개변수에다 직접적으로 함 (업데이트 된듯)
/* MyComponent.defaultProps = {
  name : "이름 없음",
  age : 0,
  addr : "대한민국"
} */

// props의 타입 검증 -> 실제 에러가 나는 건 아니지만 타입에 대한 힌트를 건네줌
MyComponent.propTypes = {
  name : PropTypes.string,
  age : PropTypes.number,
  addr : PropTypes.string
}

export default MyComponent;