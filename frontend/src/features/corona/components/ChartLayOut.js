import * as React from 'react';
import Header from 'features/common/components/Header'
import Footer from 'features/common/components/Footer'
import Login from 'features/common/components/Login'
import 'features/corona/style/ChartLayOutStyle.css'
import { NavBar } from 'features/common';
import { AppBugReports, HeaderChart, MainChart, StackChart } from 'features/corona/index';

const ChartLayOut = (props) => {
  return (
    <div class = "wrapper">
      <div class="container">
        <span class ="item1"><Header/></span>
        <span class ="item2"><NavBar/></span>
        <span class ="item3"><Login/></span>
        

        <span class ="item8"><HeaderChart/>헤드차트</span>
        <span class ="item9"><AppBugReports/>앱1</span>
        <span class ="item10"><AppBugReports/>앱2</span>
        <span class ="item11"><AppBugReports/>앱3</span>
        <span class ="item12"><AppBugReports/>앱4</span>

        <span class ="item13"><StackChart/>스택차트</span>
        <span class ="item14"><MainChart/>메인차트</span>
        
        <span class ="item4"><Footer/></span>
      </div>
    </div>
  );
}

export default ChartLayOut;