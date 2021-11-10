import React from "react";
import Navigation from 'features/common/components/Navigation';
import logo from 'features/home/Images/virus.png';

const Header = () => {
    return(
        <>
        <header>
            <div/><img src={logo} width="100" height="100" />           
        </header>
        </>
    )
}

export default Header;