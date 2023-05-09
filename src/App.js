// eslint-disable
/*eslint-disable*/

import "./App.css";
import { useState } from "react";

function App() {
  // javascript 경우
  // document.querySelector('h4').innerHTML = post;
  let post = "강남 우동 맛집";
  // 데이터바인등은{중괄호}

  // 인라인으로 style을 넣을때는 style={{스타일명 : '값'}}

  // +++++ state +++++
  // 자료 잠깐 저장할땐 state 사용 (state 만드는 법)
  // 1. import {useState}
  // 2. useState(보관할 자료)
  // 3. let [작명, 작명]

  let [글제목1, b] = useState("남자 코트 추천");
  let [글제목2, c] = useState("강남 우동맛집");
  let [글제목3, d] = useState("파이썬독학");

  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  // a 는 state에 보관했던 자료 나옴
  // b 는 state 변경 도와주는 함수

  // ?? state 는 언제 사용해야함?
  // 변동시 자동으로 html에 반영되게 만들고 싶을때
  // 자주 변경될거 같은 html 부분은 state 로 만들어 놓기 (날짜, 클래스네임 같은)

  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSzie: "16px" }}>ReactBlog</h4>
      </div>
      <h4>{post}</h4>

      {/* 버튼 클릭시 글제목 가나다 순으로 정렬 시키기 */}
      <button
        onClick={() => {
          let copy1 = [...글제목.sort()];
          글제목변경(copy1);
        }}
      >
        가나다순정렬
      </button>

      {/* 버튼 클릭시 첫번째 글제목 '여자코트 추천'으로 바꾸기 */}
      <button
        onClick={() => {
          // ... 은 괄호 벗겨주세요 라는 의미
          let copy = [...글제목];
          copy[0] = "여자코트 추천";
          글제목변경(copy);
        }}

        // state변경함수 특징
        // 기존state == 신규state 의 경우 변경안해줌
      >
        글수정
      </button>
      <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
        <p></p>
      </div>

      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목2}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </div>
  );
}

export default App;
