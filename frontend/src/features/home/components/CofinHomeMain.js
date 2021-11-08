import React from "react"
import logo from '../images/virus.png';
import logo2 from '../images/inform.jpg';
import logo3 from '../images/world.png';
import logo4 from '../images/piston.png'
import logo5 from '../images/news.png'
import styled from "styled-components";

const CofinHomeMain = () => (
<div>
    <div align='center'>
    
        <img src={logo} width="750" height="750"/>

    </div>

    <div align='center' >         
        <form>
            <Button type="submit" class="subm">
                <Img src={logo2} width="200" height="200"/>&nbsp;
            </Button>
            <Button type="submit" class="subm">
                <Img src={logo3} width="200" height="200"/>&nbsp;
            </Button>
            <Button type="submit" class="subm">
                <Img src={logo4} width="200" height="200"/>&nbsp;
            </Button>
            <Button type="submit" class="subm">
                <Img src={logo5} width="200" height="200"/>
            </Button>
        </form>
    </div>
</div> 
)

export default CofinHomeMain


const Button = styled.button`
    border-radius:385px
`
const Img = styled.img`
    border-radius:inherit
`



