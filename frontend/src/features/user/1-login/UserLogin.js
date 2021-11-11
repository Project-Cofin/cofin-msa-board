import React, { useState } from 'react';
import { useHistory  } from 'react-router-dom';
export default function UserLogin() {
  const [login, setLogin] = useState({})
  const {username, password} = login
  const history = useHistory()

  const handleChange = e => {
    const {value, name} = e.target
    setLogin({
      ...login,
      [name] : value
    })
  }

  const changeNull = ls =>{
    for(const i of ls ){
      document.getElementById(i).value = ''
    }
  }
  const handleClick = e => {
    e.preventDefault()
    e.stopPropagation()
    const loginRequest = {username, password}
  }
 
  return (
    <form method="POST">
    <ul>
        <li><label for="id">아이디</label>
        <input type="text" id="username" 
            name='username' value={username} onChange={handleChange}/></li>
        <li><label for="pw">비밀번호</label>
        <input type="password" id="password" name="password" onChange={handleChange}/></li>
        <li><input type="button" title="로그인" value="로그인" onClick={handleClick}/></li>
    </ul>
</form>
  );
}