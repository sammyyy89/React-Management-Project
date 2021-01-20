// 웹사이트 화면의 내용 출력을 담당
// html의 body 태그에 해당

import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '961222',
  'gender': '남자',
  'job' : '대학생'
},
{'id': 2,
'image': 'https://placeimg.com/64/64/2',
'name' : '김철수',
'birthday' : '890812',
'gender': '남자',
'job' : '프로그래머'
},
{'id': 3,
'image': 'https://placeimg.com/64/64/3',
'name' : '박의류',
'birthday' : '930509',
'gender': '남자',
'job' : '디자이너'
}
]

function App() {
  return (
    <div>
      {
        customers.map(c=> {
          return (
            <Customer
            key={c.id} // 일반적으로 map을 사용할 때는 key 속성을 넣어줘야 함.
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
             />
          );
        })
      }
    </div>
  );
}

export default App;
