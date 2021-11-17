import React from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from 'features/home/Images/virus.png';
import styled from "styled-components";

function NavBar() {
    
return (
    <div className="Navigation">
        <Navbar bg="primary" variant="dark" id="centerboxs">
            
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="로그인" id="collasible-nav-dropdown" >
                    <Nav.Link href="/user">로그인</Nav.Link>
                    <Nav.Link href="/join">회원가입</Nav.Link>
                </NavDropdown>
                <Nav.Link href= "/api/QnA">QnA</Nav.Link>
                <NavDropdown title="지도" id="collasible-nav-dropdown">
                    <Nav.Link href= "/organ/local">국내지도</Nav.Link>
                    <Nav.Link href= "/organ/world">세계지도</Nav.Link>
                </NavDropdown>
                <Nav.Link href= "/organ/chat">챗봇</Nav.Link>
                
                <Nav.Link href="/main/corona">코로나</Nav.Link>
                
                <NavDropdown title="공지" id="collasible-nav-dropdown">
                    <Nav.Link href= "/medpts">진료소</Nav.Link>
                    <Nav.Link href= "/message">재난문자</Nav.Link>
                    <Nav.Link href= "/news">뉴스</Nav.Link>
                </NavDropdown>
            
            
            </Nav>
        </Navbar>
    </div>
    )
}

export default NavBar;

const Link = styled.link`
variant: black;
`

