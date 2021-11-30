import React from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navi() {
    
return (
    <div className="Navigation">
        <Navbar bg="primary" variant="dark" id="centerboxs">
            
            <Nav className="mr-auto">
                <Link to="/">Home</Link>
                <NavDropdown title="로그인" id="collasible-nav-dropdown" >
                    <Link to="/cofinuser">로그인</Link>
                    <Link to="/users/cofinjoin">회원가입</Link>
                </NavDropdown>
                <Link to= "/cofinapi/QnA">QnA</Link>
                <NavDropdown title="지도" id="collasible-nav-dropdown">
                    <Link to= "/cofinorgan/local">국내지도</Link>
                    <Link to= "/cofinorgan/world">세계지도</Link>
                </NavDropdown>
                <Link to= "/cofinorgan/chat">챗봇</Link>
                
                <Link to="/cofinmain/corona">코로나</Link>
                
                <NavDropdown title="공지" id="collasible-nav-dropdown">
                    <Link to= "/cofinmedpts">진료소</Link>
                    <Link to= "/cofinmessage">재난문자</Link>
                    <Link to= "/cofinnews">뉴스</Link>
                </NavDropdown>
            
            
            </Nav>
        </Navbar>
    </div>
    )
}

export default Navi;


// const Link =  styled.a`
//     display: block;
//     color : #0d6efd;
//     text-decoration:none;
//     margin: 5px 0px 5px 10px;
//     font-weight: bold;
// `