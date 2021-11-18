import React from "react";
import styled from "styled-components";
import {Icon, Navi, Login} from '..'
import {Navbar} from 'react-bootstrap';


const Header = (props) => {
    return(
        <>
        <header>
            <Navbar bg="primary" variant="dark" id="centerboxs">
                <Icon/><Navi/><Login/>
            </Navbar>
        </header>
        </>
    )
}

export default Header;

