import * as React from 'react';
import Header from 'features/common/components/Header'
import Footer from 'features/common/components/Footer'

import 'features/message/style/MsgLayOutStyle.css'
import { Navigation } from 'features/common';

const MsgLayOut = (props) => {
  return (
    <div class = "wrapper">
      <div class="container">
        <span class ="item1"><Header/></span>
        <span class ="item2"><Navigation/></span>
        <span class ="item3">{props.children}333</span>
        <span class ="item4">444</span>
        <span class ="item5">555</span>
        <span class ="item7"><Footer/></span>
      </div>
    </div>
  );
}

export default MsgLayOut;