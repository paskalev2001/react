import React from 'react'

const Message = ({text, userId, users}) => {
  let userName = ""
  users.forEach(user => {
    if (userId === user.id) {
      userName = user.full_name
    }
  });
  return (
    <div className='msg'>
      <p>{userName} wrote: {text}</p>
    </div>
  )
}

export default Message
