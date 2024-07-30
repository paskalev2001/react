import React, {useState} from 'react'
import Message from './Message'
const Chat = ({currentUser, users, messages, onSendMessage}) => {
  const [currentMsg, setCurrentMsg] = useState("");

  return (
    <div className='chat-container'>
      <div className='msg-container'>
        {messages.map((msg) => (
          <Message key={msg.id} text={msg.text} userId={msg.user_id} users={users}/>
        ))}
      </div>
      <div className='write-msg-container'>
        <input value={currentMsg} onChange={(e) => setCurrentMsg(e.target.value)} type="text" placeholder="what is on your mind?" id="current-msg" name="current-msg" />
        <button type="submit" onClick={() => onSendMessage({text: currentMsg, user_id: currentUser.id})}>Send</button>
      </div>
    </div>
  )
}

export default Chat
