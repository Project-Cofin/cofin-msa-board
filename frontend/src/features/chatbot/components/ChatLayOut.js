import * as React from 'react';
import Header from 'features/common/components/Header'
import Footer from 'features/common/components/Footer'
import {Chat} from 'features/chatbot/index'
import 'features/chatbot/style/ChatLayOutStyle.css'


const ChatLayOut = (props) => {
  return (
    <div class = "wrapper">
      <div class="Chatcontainer">
        <span class ="ChatHeader"><Header/></span>

        <span class ="item13"><Chat/>챗봇</span>
        
        <span class ="Footer"><Footer/></span>
      </div>
    </div>
  );
}

export default ChatLayOut;