import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css'

const ChatLog = (props)=>{

  const chatData = props.data.map((chat) => {

    return (
      <ChatEntry 
      sender= {chat.sender}
      body= {chat.body}
      timeStamp= {chat.timeStamp}
      />
    )
  });

  return(
    <div className="ChatLog" class="chat-log">
      {chatData}
    </div>
  );
};

export default ChatLog;