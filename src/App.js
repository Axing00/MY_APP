import logo from './logo.svg';
import './App.css';

function App() {
  // javascript 경우
  // document.querySelector('h4').innerHTML = post;
  let post = '강남 우동 맛집';
  // 데이터바인등은{중괄호}

  // style을 넣을때는 style={{스타일명 : '값'}}

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'red', fontSzie: '16px' }}>블로그임</h4>
      </div>

      <h4>{post}</h4>
    </div>
  );
}

export default App;
