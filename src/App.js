import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import db from "./firebase"
import firebase from "firebase"
import './App.css';
import Message from "./Message"
import Loading from "./Loading"
import Navbar from "./Navbar"

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUserName] = useState('');
  const sendMessage = (e) => {
    e.preventDefault()
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }
  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', "desc")
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      })

  }, [])
  useEffect(() => {
    const accessUser = localStorage.getItem('user')
    console.log('storage', accessUser)
    if (accessUser) {
      setUserName(localStorage.getItem('user'));
    } else {
      const getUser = prompt('Please enter your name');
      if (!null) {
        setUserName(getUser);
        localStorage.setItem('user', getUser);
      }
    }

    // setUserName(prompt('Please enter your name'))
  }, []);
  console.log(messages)
  return (
    <>
      <Navbar username={username} />
      <div className="App">


        <form className="app__form">
          <FormControl className="app__formControl">
            <Input type="text" className="app__input" placeholder="Enter message..." value={input} onChange={e => setInput(e.target.value)} />
            <IconButton disabled={!input} className="app__iconButton" type="submit" variant="contained" color="primary" onClick={sendMessage}>
              <SendIcon />
            </IconButton>

          </FormControl>


        </form>
        <div className="messagesAll">
          {messages.length !== 0 ? (messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))) : <Loading />}

          {/* message themeselves */}
        </div>
      </div>
    </>
  );
}

export default App;
// https://youtu.be/KB7JEnfc7Dc?t=6223
