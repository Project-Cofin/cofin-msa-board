import {Route, Routes} from 'react-router-dom'; 
//21-11-06 v6로 버전업이후 switch -> routes / component -> element= {<Home/>}/>

import { LocalMapPage, WorldMapPage } from 'features/map';
import { QnABoardPage, QnAWritePage } from 'features/QnA/index';

import MedptPage from "features/medpt/MedptPage";
import {MsgPage} from "features/message/index";
import NewsPage from "features/news/NewsPage";
import {LoginPage, JoinPage} from "features/user/index";
import {ChartPage} from 'features/corona/index';
import ChatbotPage from 'features/chatbot/pages/ChatbotPage';

//Attempted import error: 'Action' is not exported from 'history'. histroy 버전 5로 업.


function App() {
  return(<>

    <Routes>

          <Route path="/" element= { <ChartPage/> }/>
          <Route path='/home' element= { '/' }/>
          <Route path='/cofinmain/corona' element={<ChartPage/>}/>


          <Route path="/cofinapi/QnA" element={<QnABoardPage/>}/>
          <Route path="/cofinwrite" element={<QnAWritePage/>}/>
          <Route path="/cofinorgan/chat" element={<ChatbotPage/>}/>
          <Route path="/cofinorgan/local" element={<LocalMapPage/>}/>
          <Route path='/cofinorgan/world' element= { <WorldMapPage/> }/>      

          <Route path='/cofinmedpts' element={<MedptPage/>}/>
          <Route path='/cofinmessage' element={<MsgPage/>}/>
          <Route path='/cofinnews' element={<NewsPage/>}/>
          <Route path='/cofinuser' element={<LoginPage/>}/>
          <Route path='/users/cofinjoin' element={<JoinPage/>}/>
      
    </Routes>  
</>)}


export default App;

