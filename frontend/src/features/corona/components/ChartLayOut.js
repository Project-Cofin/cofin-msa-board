import * as React from 'react';
import Header from 'features/common/components/Header'
import Footer from 'features/common/components/Footer'

import 'features/corona/style/ChartLayOutStyle.css'
import { Navigation } from 'features/common';
import { AppBugReports, HeaderChart, MainChart, StackChart } from 'features/corona/index';

const ChartLayOut = () => {
  return (
    <div class = "wrapper">
      <div class="container">
        <span class ="item1"><Header/></span>
        <span class ="item2"><Navigation/></span>
        <span class ="item3"><HeaderChart/>헤드차트</span>
        <span class ="item4"><AppBugReports/>앱1</span>
        <span class ="item8"><AppBugReports/>앱2</span>
        <span class ="item9"><AppBugReports/>앱3</span>
        <span class ="item10"><AppBugReports/>앱4</span>

        <span class ="item5"><StackChart/>스택차트</span>
        <span class ="item6"><MainChart/>메인차트</span>
        <span class ="item7"><Footer/></span>
      </div>
    </div>
  );
}

export default ChartLayOut;