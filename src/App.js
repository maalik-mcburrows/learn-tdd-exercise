import React, { useState } from 'react';
import NewMessageForm from './components/newMessageForm';
import MessageList from './components/messageList';

const App =() => {
  const [messages, setMessages] = useState([])
  const handleSend = newMessage => {
    setMessages([newMessage, ...messages]);
  };
  return (
    <div>
      <NewMessageForm onSend={handleSend}/>
      <MessageList data={messages}/>
    </div>
  );
}

export default App;
