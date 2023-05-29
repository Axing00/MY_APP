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
  let [글제목4, e] = useState("아 재밌다");
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬독학",
    "좋아요",
    "랄라라",
    "모달창제목",
  ]);
  // a 는 state에 보관했던 자료 나옴
  // b 는 state 변경 도와주는 함수

  // ?? state 는 언제 사용해야함?
  // 변동시 자동으로 html에 반영되게 만들고 싶을때
  // 자주 변경될거 같은 html 부분은 state 로 만들어 놓기 (날짜, 클래스네임 같은)

  let [따봉, 따봉변경] = useState(0);

  // 모달창 만들기 useState
  let [modal, setModal] = useState(false);

  // map 사용법
  [1, 2, 3].map(function (a) {
    // console.log(a);
    return "123321";
  });

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
            className="thumb_up"
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
        <p>2월 18일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목2}</h4>
        <p>2월 19일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[3]}</h4>
        <p>2월 20일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[4]}</h4>
        <p>2월 21일 발행</p>
      </div>

      {/* 모달창 띄워보기 */}
      <h2 style={{ backgroundColor: "yellow" }}>모달창 띄워보기</h2>
      <div className="list">
        <h4
          style={{ cursor: "pointer" }}
          // onClick={() => {
          //   if (modal == true) {
          //     setModal(false);
          //   } else {
          //     setModal(true);
          //   }
          // }}
          onClick={() => {
            setModal(!modal);
          }}
        >
          {글제목[5]}
        </h4>
        <p>2월 22일 발행</p>
      </div>

      {/* <Modal></Modal> */}

      {modal == true ? <Modal /> : null}

      {/* map()으로 같은 html 반복생성하는 법 */}
      <h2 style={{ backgroundColor: "yellow" }}>
        map()으로 같은 html 반복생성하는 법
      </h2>
      {글제목.map(function () {
        return (
          <div className="list">
            <h4>{글제목[4]}</h4>
            <p>2월 21일 발행</p>
          </div>
        );
      })}

      {/* 같은내용만 반복되지 않게 하기 */}
      <h2 style={{ backgroundColor: "yellow" }}>
        같은 내용으로 반복되지 않게 만들기
      </h2>
      {글제목.map(function (a) {
        return (
          <div className="list">
            <h4>{a}</h4>
            <p>5월 10일 발행</p>
          </div>
        );
      })}

      {/* 따봉표시 각자 변경되게하기 */}
      <h2 style={{ backgroundColor: "yellow" }}>따봉표시 각자 변경되게하기</h2>
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4>{글제목[i]}</h4>
            <span
              className="thumb_up"
              onClick={() => {
                따봉변경(따봉 + 1);
              }}
            >
              👍
            </span>
            {따봉}
            <p>2월 21일 발행</p>
          </div>
        );
      })}
    </div>
  );
}

let Modal2 = () => {
  return <div></div>;
};

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
