import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from 'features/home/Images/virus.png';
import styled from "styled-components";

function NavBar() {
    
return (
    <div className="Navigation">
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">&nbsp; <Img src={logo} width="100" height="100"/></Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/user">로그인</Nav.Link>
                <Nav.Link href="/join">회원가입</Nav.Link>
                <Nav.Link href= "/QnA">QnA</Nav.Link>
                <Nav.Link href= "/organ/local">국내지도</Nav.Link>
                <Nav.Link href= "/organ/world">세계지도</Nav.Link>
                <Nav.Link href= "/organ/chat">챗봇</Nav.Link>
                
                <Nav.Link href="/main/corona">코로나 정보</Nav.Link>

                <Nav.Link href= "/medpts">진료소</Nav.Link>
                <Nav.Link href= "/message">재난문자</Nav.Link>
                <Nav.Link href= "/news">뉴스</Nav.Link>
            
            
                <li type='none' align='right'>
                    <label for="user-id" />아이디 &nbsp;
                    <input type="text" id="user-id"/>&nbsp; 
                
                    <label for="pwd1"/> 비밀번호 &nbsp;
                    <input type="password" id="pwd"/>&nbsp;
                    
                    <input type="submit" value="로그인"/>&nbsp;
                </li>
            
            </Nav>
        </Navbar>
    </div>
    )
}

export default NavBar;

const Img = styled.img`
border-radius: 70%;
`

