// 웹사이트 화면의 내용 출력을 담당
// html의 body 태그에 해당

import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

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

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
        </TableBody>
        </Table>
        </Paper>
    );
  }
}

export default withStyles(styles)(App);