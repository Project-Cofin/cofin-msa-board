import * as React from 'react';
import Header from 'features/common/components/Header'
import Footer from 'features/common/components/Footer'

import 'features/common/style/LayOutStyle.css'

const LayOut = (props) => {
  return (
    <div class = "wrapper">
      <div class="layoutcontainer">
        <span class="Header"><Header/></span> 
          <span class ="main">{props.children}</span>
        <span class="Footer"><Footer/></span>
      </div>
    </div>
  );
}

export default LayOut;