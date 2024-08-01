import './App.css';
import React, { useState, useEffect } from "react";
import Login from './components/Login';
import Register from './components/Register';
import Chat from './components/Chat';
import axios from 'axios';
import config from './config';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [currentUser, setCurrentUser] = useState({})
  const [users, setUsers] = useState([])
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers()
      setUsers(usersFromServer)
    }
    getUsers()
  }, [])

  useEffect(() => {
    const getMessages = async () => {
      const messagesFromServer = await fetchMessages()
      setMessages(messagesFromServer)
    }
    getMessages()
    const interval = setInterval(getMessages, 5000);
    return () => clearInterval(interval);
  }, [])
  
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  const setUser = (user) => {
    setCurrentUser(user)
  }

  // Fetch users
  const fetchUsers = async () => {
    const res = await fetch(config.storageUrl.concat('/users'))
    const data = await res.json()
    return data
  }

  //Create user
  const createUser = async (user) => {
    const res = await fetch(config.storageUrl.concat('/users'), {method:"POST", headers: {'Content-type': 'application/json'}, body: JSON.stringify(user)})
    const data = await res.json()
    setUsers([...users, data])
  }

  // Fetch messages
  const fetchMessages = async () => {
    const res = await axios.get(config.storageUrl.concat('/messages'))
    const data = await res.data
    return data
  }

  //send message
  const sendMessage = async (msg) => {
    const res = await fetch(config.storageUrl.concat('/messages'), {method:"POST", headers: {'Content-type': 'application/json'}, body: JSON.stringify(msg)})
    const data = await res.json()
    setMessages([...messages, data])
  }

  return (
    <div className="App">
      {
        (currentForm === "login" && <Login onFormSwitch={toggleForm} users={users} onSetUser={setUser}/> )||
        (currentForm === "register" && <Register onFormSwitch={toggleForm} onCreateUser={createUser} users={users} /> )||
        (currentForm === "chat" && <Chat currentUser={currentUser} messages={messages} users={users} onSendMessage={sendMessage}/>)
      }
    </div>
  );
}

export default App;
