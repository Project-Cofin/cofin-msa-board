import React from 'react';
import Header from 'features/common/components/Header'
import Footer from 'features/common/components/Footer'

import 'features/map/style/Map.css'
import { LocalMap, LocalMapInfo, Options } from "features/map/index"


const MapLayOut = (props) => {
  return (
    <div class = "wrapper">
      <div class="container">
        <span class ="item1"><Header/></span>

        <span class ="item14"><Options/>옵션</span><br/>
        <span class ="item15"><LocalMap/>지도</span><br/>
        <span class ="item16"><LocalMapInfo/>진료소A</span>

        <span class ="item2"><Footer/></span>
      </div>
    </div>
  );
}

export default MapLayOut;