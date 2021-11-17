import * as React from 'react';
import Header from 'features/common/components/Header'
import Footer from 'features/common/components/Footer'
import Login from 'features/common/components/Login'
import 'features/common/style/LayOutStyle.css'
import { NavBar } from '..';


const LayOut = (props) => {
  return (
    <div class = "wrapper">
      <div class="container">
        <span class ="item1"><Header/></span>
        <span class ="item2"><NavBar/></span>
        <span class ="item3"><Login/></span>
        

        <span class ="item5">{props.children}333</span>
        <span class ="item6">444</span>
        <span class ="item7">555</span>
        
        <span class ="item4"><Footer/></span>
      </div>
    </div>
  );
}

export default LayOut;