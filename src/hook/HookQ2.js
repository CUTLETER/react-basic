import { useState, useRef } from "react";

const HookQ2 = () => {
    /*
    실습(할일목록 만들기 )
    1. state는 {todo: '', list: []} 로 관리합니다.
    2. 할일 목록을 작성하고 클릭시, list에 인풋이 입력한 값을 추가하고 map을 이용해서 반복처리해주세요
    3. 등록 이후에는 ref를 활용해서 input태그에 포커싱해주세요
    */

    const [input, setInput] = useState({ todo: '', list: [] });
    const inputRef = useRef(null);

    const handleClick = () => {
            let newList = input.list;
            newList.push(input.todo);
            setInput({todo: '', list: newList});
            inputRef.current.focus();
    };

    console.log(input);

    let handleKeyUp = (e) => {    
        if (e.key === "Enter") {
            handleClick();
        }
    }

    let handleChange = (e) => {
        setInput({...input, ["todo"]: e.target.value});
    }

    return (
        <div>
            <input type="text" placeholder="할일 목록을 작성하세요" onChange={handleChange} value={input.todo} ref={inputRef}/>
            <button type="button" onClick={handleClick} onKeyUp={handleKeyUp}>등록</button>
            <ul>
                {
                    input.list.map((item, index) => <li key={index}>{index+1}.{item}</li>)
                }
            </ul>
        </div>
    )
}


//리듀스
const todoReducer = (state, action) => {
    if(action.type == "text" ) {
        state = {...state, ["todo"] : action.value}
    } else if(action.type == "button" ){
        state.list.push( state.todo );
        state = {...state, ["todo"] : ''}
    }
    return state;
}

export default HookQ2;