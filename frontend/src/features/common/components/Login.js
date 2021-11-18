import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import styled from "styled-components";

function Login(){
    return (
        <div className="Login">
            <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
                <li type='none' text-align="right">
                    <label for="user-id"/>아이디 &nbsp;
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

export default Login;

