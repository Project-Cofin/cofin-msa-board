import {Route, Routes} from 'react-router-dom'; 
//21-11-06 v6로 버전업이후 switch -> routes / component -> element= {<Home/>}/>
import { HomePage } from 'features/home/index';
import { Chat } from 'features/chatbot'
import { LocalMapPage, WorldMapPage } from 'features/map';
import { QnABoardPage, QnAWritePage } from 'features/QnA/index';
//Attempted import error: 'Action' is not exported from 'history'. histroy 버전 5로 업.


function App() {
  return(<>

    <Routes>
          <Route path="/" element= { <HomePage/> }/>
          <Route path='/home' element= { '/' }/>
          <Route path="/QnA" element={<QnABoardPage/>}/>
          <Route path="/write" element={<QnAWritePage/>}/>
          <Route path="/organ/chat" element={<Chat/>}/>
          <Route path="/organ/local" element={<LocalMapPage/>}/>
          <Route exact path='/organ/world' element= { <WorldMapPage/> }/>

    </Routes>  
</>)}


export default App;

