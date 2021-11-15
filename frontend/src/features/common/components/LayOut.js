import * as React from 'react';
import Header from 'features/common/components/Header'
import Footer from 'features/common/components/Footer'

import 'features/common/style/LayOutStyle.css'
import { NavBar } from '..';


const LayOut = (props) => {
  return (
    <div class = "wrapper">
      <div class="container">
        <span class ="item1"><NavBar/></span>
        <span class ="item2"></span>
        <span class ="item3">{props.children}333</span>
        <span class ="item4">444</span>
        <span class ="item5">555</span>
        <span class ="item6"><Footer/></span>
      </div>
    </div>
  );
}

export default LayOut;