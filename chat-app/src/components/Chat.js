import React from 'react'
import Message from './Message'
const Chat = ({currentUser, users, messages}) => {
  return (
    <div className='chat'>
      {messages.map((msg) => (
        <Message key={msg.id} text={msg.text} userId={msg.user_id} users={users}/>
      ))}
    </div>
  )
}

export default Chat
