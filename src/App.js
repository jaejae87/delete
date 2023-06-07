
import './App.css';
import { useState } from 'react';

function App() {
  //const[state(상태값),state값을 바꾸기 위한 함수]=useState("초기값");
 const[username,setUsername]=useState('');
 const[password,setPassword]=useState('');
 const onSubmit=(e)=>{e.preventDefault();
  //form은 전송후에 refresh(새로고침)됨=>막아야됨
  console.log(username,password)
 }
  return (
    <>
    <form onSubmit={onSubmit}>
      <input placeholder='Username' value={username}
      onChange={(e)=>{setUsername(e.target.value)}}//플레이스홀더에 입력창 쓸수 있게 하는것
      /><br/>
      <input placeholder='Password' value={password}
       onChange={(e)=>{setPassword(e.target.value)}}
       /* onChange:input에서는 값이 바뀌게 강제로 계속 실행함 */
      /><br/>
      <button type='submit'>Update</button>
    </form>
   </>
  );
}

export default App;
