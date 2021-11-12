import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";



export default function Navigation () {

    return (
        <div>
            <Ul>
                <Li><Link to= "/">Home</Link></Li>
                <Li><Link to= "/user">로그인</Link></Li>

                <Li><Link to= "/QnA">QnA</Link></Li>
                <Li><Link to= "/organ/local">국내지도</Link></Li>
                <Li><Link to= "/organ/world">세계지도</Link></Li>
                <Li><Link to= "/organ/chat">챗봇</Link></Li>
                
                <Li><Link to="/main/corona">코로나 정보</Link></Li>

                <Li><Link to= "/medpts">진료소</Link></Li>
                <Li><Link to= "/message">재난문자</Link></Li>
                <Li><Link to= "/news">뉴스</Link></Li>
            </Ul>
            <ul>
                <li type='none' align='right'>
                    <label for="user-id"/>아이디
                    <input type="text" id="user-id"/>
                
                    <label for="pwd1"/> 비밀번호 
                    <input type="password" id="pwd"/>&nbsp;
                    
                    <input type="submit" value="로그인"/>&nbsp;
                </li>
            </ul>
        </div>
    )
}
const Ul = styled.ul`

`

const Li = styled.li`

margin-left: 1em;

text-align:center;
display:inline-block;
font-family: 'UhBeeRami';
`