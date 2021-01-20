// 웹사이트 화면의 내용 출력을 담당
// html의 body 태그에 해당

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="gray-background">
      <img src={logo} alt="logo" />
      <h2>Let's develop management system!</h2>

    </div>
  );
}

export default App;
