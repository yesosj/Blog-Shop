/*eslint-disable*/

import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목,글제목변경]= useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);
  let posts = '강남 고기 맛집';
  let [modal, modal변경] = useState(true);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState('');

  // function DepeatUI(){

  //   var array = [];
  //   for(var i = 0; i <3; i++){
  //     array.push(<div>안녕</div>);
  //   }
  //   //PUSH 는 추가해 주세요.
  //   return array;
    
  // }
//react 에선 UI가 보이고 안보이고를 State를 통해 저장해둠.

  function 제목변경(){
      var newArray = [...글제목];
      newArray[0] = '여자 코트 추천';
      글제목변경(newArray);
  }
  //...의 뜻은 중괄호나 대괄호를 벗겨주세요이다. 신문법이며 shallow/deep copy할 때 많이 사용됨. 
  //없어도 기능하지만 완전 독립적인 array복사본을 생성해주는 copy 가능
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={제목변경}>버튼</button>

      {/* <div className="list">
        <h3>
          {글제목[0]}
          <span onClick={()=>{따봉변경(따봉+1)}}>★</span>
          {따봉}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
   

      <div className="list">
        <h3> {글제목[1]}</h3>
        <p>2월 18일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h3 onClick={()=>{modal변경(true)}}>{글제목[2]}</h3>
        <p>2월 19일 발행</p>
        <hr />
      </div> */}
{/* 
      {DepeatUI()} */}
      {/* //일반적인 반복문 */}

      {
        글제목.map(function(a, i){
          // a는 map이 반복될 때마다 어레이 안에 있던 하나하나의 데이터들을 의미함.
          //i는 반복문이 될 때 마다 0,1,2,,가 되는 변수 
          return  (
          <div className="list" key={i}>  {/*key는 반복문을 쓸 때 꼭 써야 콘솔창에 warning이 안뜸*/}
            <h3 onClick={()=>{누른제목변경(i)}}> {a}<span onClick={()=>{따봉변경(따봉+1)}}>★</span>
          {따봉}</h3>
            <p>2월 18일 발행</p>
            <hr />
        </div>
          )

        })
      }
      {/* {입력값}
      <input onChange={ (e)=>{ 입력값변경(e.target.value)}}/>         */}


      {/* input 값을 state에 저장. onchange는 뭔가 입력이 될떄 안의 함수 실행 */}
      {/* 사용자 입력한 값 가져오기 e.target (현재 이벤트 동작한 곳).value (input 입력한 값) */}

      {/* <button onClick={()=>{누른제목변경(0)}}>버튼1</button> 
      <button onClick={()=>{누른제목변경(1)}}>버튼2</button> 
      <button onClick={()=>{누른제목변경(2)}}>버튼3</button> 
 */}
      <div className="publish">
        <input onChange={(e)=>{입력값변경(e.target.value)}} />
        <button onClick={()=>{
          var arrayCopy = [...글제목]
          arrayCopy.unshift(입력값);
          글제목변경(arrayCopy);
        }}>저장</button>
      </div>
      {/* 글 발행 기능 */}
      {/* 실전에서는 발행한 글 저장을 위해(새로고침해도 날라감 방지) 서버에 ajax로 보냄 */}

      <button onClick={()=>{modal변경(!modal)}}>열고 닫기</button>

      {
        modal === true
        ? <Modal 글제목임={글제목} 누른제목임={누른제목}/>
        : null
      }
    </div>
  );
}
//App컴포넌트는 부모이고 modal은 자식 따라서 부모 컨포넌트의 state 가져올 땐 props로 전송해야 가능
//1. <작명={state명}> 2.자식컴포넌트에서 props 파라미터 입력후 사용

function Modal(props){
  return(
    <div className="modal">
    <h2>제목 { props.글제목임[props.누른제목임]}</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}
//Modal 컴포넌트 완성( html 이 길 때 한 줄로 바꾸기 위해 사용) 첫글자는 대문자로.
//무엇을 컴포넌트로? -> 자주 출현 html 덩어리들, 자주 변경되는 html , 다른 페이지 만들 때도 컴포넌트로 만듦
//단점은? -> state 쓸 때 복잡함. 상위 컴포넌트에서 만든 state 가져올 때 props 문법 이용


class Profile extends React.Component{
  constructor(){}
}


export default App;
  


//리액트는 state를 변경하면 html은 알아서 재랜더링되어서 html을 어떻게 정렬할까가 아니라
//state를 어떻게 정렬할까 이다. state가 UI의 현재상태를 보관하는 저장소역할을 한다.