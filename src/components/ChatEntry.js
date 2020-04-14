import React from 'react';
import Timestamp from './Timestamp';
import './ChatEntry.css'



const ChatEntry = (props) => {
    let person ="chat-entry local";
    if (props.sender !== "Vladimir"){
        person = "chat-entry remote";
    };
  
    return(
      <div className="ChatEntry" class={person}>
        <div className="entry-name">{props.sender}</div>
        <p className="entry-bubble">{props.body}
          <section className="entry-time">
            <Timestamp time={props.timeStamp}/>
          </section>
        </p>
      </div>

  );

};

export default ChatEntry;