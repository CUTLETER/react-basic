import { useState } from "react";

// import img1 from '../img/img1.png'; // 2. img 폴더를 src 밑에 끌어다 놓았을 때

/*

이미지를 가져오는 방법
1. 외부 서버에서 경로 참조 받기 (가장 일반적인 방법)


2. src밑으로 넣는경우 (img1 으로 하나의 이미지 참조가능)
import img1 from '../img/1.jpg'; 


3. public밑으로 넣는경우는 바로 참조할 수 있습니다.
*/


const IterationComponentQ = () => {

    //데이터 - public 폴더 밑에 예시로 사용하기 위해 넣습니다.
    const arr = [
        {src : '/img/img1.png', title : '아이폰10', price: 1000},
        {src : '/img/img2.png', title : '아이폰11', price: 2000},
        {src : '/img/img3.png', title : '아이폰12', price: 3000},
        {src : '/img/img4.png', title : '아이폰13', price: 4000},
    ]

        // 1. state로 한 번에 관리, 대표 이미지 값을 stat로 관리
        const [data, setData] = useState(arr);
        const [img, setImg] = useState({src: '/img/img1.png'}); // 대표 이미지
        
        // 3. 화면 처리 후에 클릭한 결과를 아래에 보여주기
        const handleClick = (e) => {
            if(e.target.tagName !== "IMG") return; //IMG일때만 동작
            setImg( {src: e.target.src });
        }
     
        // 2. 화면 처리
        const newImg = data.map( (item, index) => 
            <div key={index} onClick={handleClick} >
                <img src={item.src} width="100" alt={item.title} />
                <p>
                    상품:{item.title}
                </p>
                <p>
                    가격{item.price}원
                </p>
            </div>
        )

    return (
        <>
            <hr/>
            <h3>이미지 데이터 반복해보기</h3>
            {/* <img src="https://raw.githubusercontent.com/yopy0817/data_example/master/img/img1.png" alt="봄" width="100" /> */} {/* 1. 경로 참조 */}
            {/* <img src={img1}/> */} {/* 2. img 폴더를 src 밑에 끌어다 놓았을 때 */}
            <img src="/img/img1.png"/> {/* 3. public 폴더 밑에 끌어다 놓았을 때 */}
            {/* 
            <div>
                <div>
                    <img src="/img/img1.png" width="100" />
                    <p>
                        제목
                    </p>
                    <p>
                        가격
                    </p>
                </div> 
            <div>
            */}

            {/* 3번 */}
            <div>
                <img src={img.src} alt="제목"/>
            </div>

            <div style={{display: "flex", justifyContent: "space-around"}}
                onClick={handleClick}
                >
                {newImg}
            </div>
        </>
    )

}

export default IterationComponentQ;