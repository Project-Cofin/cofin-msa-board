import React from "react";
import {Navbar} from 'react-bootstrap';
import Navigation from 'features/common/components/Navigation';
import logo from 'features/home/Images/virus.png';
import styled from "styled-components";


const Header = () => {
    return(
        <>
        <header>
            <Navbar bg="primary" variant="dark">
                <a href="/">
                    &nbsp; <Img src={logo} width="100" height="100"/>
                </a>
            </Navbar>
        </header>
        </>
    )
}

export default Header;

const Img = styled.img`
    border-radius: 70%;
`