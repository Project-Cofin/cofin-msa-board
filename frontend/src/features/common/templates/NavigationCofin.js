import React from 'react'
import { Link } from 'react-router-dom'

const NavigationCofin = () => (
<nav class="navi">
    <ul>
        
        <li type='none'>
            <Link to='/home'></Link> &nbsp;
            <Link to='/free-board'></Link> &nbsp;
            <Link to='/write'></Link></li>
        
    </ul>
</nav>
)

export default NavigationCofin