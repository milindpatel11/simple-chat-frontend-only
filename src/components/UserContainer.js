// import './css/ChatContainer.css';
import {useState} from 'react';
import ChatContainer from '../components/ChatContainer';
import ThreadContainer from '../components/ThreadContainer';


function UserContainer({ user, otherUser, chatMessages, addMessage, backg }) {

  const [ threadID, setThreadID ] = useState(null);

  const makeActiveThread = (messageID) => {
    setThreadID(messageID);
  }

  const removeThread = () => {
    setThreadID(null);
  }

  return (
    <div className="flex-column" style={{width:'50%', backgroundColor:backg, borderRadius:'10px', margin:'15px'}}>
      <ChatContainer user={user} otherUser={otherUser} chatMessages={chatMessages}
        addMessage={addMessage} makeActiveThread={makeActiveThread} />
      <ThreadContainer user={user} otherUser={otherUser} chatMessages={chatMessages}
        addMessage={addMessage} thread={threadID} removeThread={removeThread}/>
    </div>
  );
}

export default UserContainer;
