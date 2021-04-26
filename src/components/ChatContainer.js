import './css/ChatContainer.css';
import {useState} from 'react';

function MessageItem ({ message, author }) {

  const align = message.user === author ? 'flex-end' : 'flex-start';
  const color = message.user === author ? 'rgb(153, 242, 211)' : 'rgb(200, 200, 200)';

  return (

  <div className='flex-column' style={{width:'100%', padding: '0 20px', alignItems:align, }}>
    <h3 style={{textAlign:align, borderRadius:'5px', backgroundColor:color, padding:'5px 10px', maxWidth:'60%', wordWrap: 'break-word'}}>
      {message.message}
    </h3>
  </div>
)

}


function ChatContainer({ user, otherUser, chatMessages,
  addMessage, makeActiveThread })

{

  const [typedMessage, setTypedMessage] = useState (null)

  const changeFun = (e) => {
    setTypedMessage(e.target.value);
    console.log(typedMessage);
  }

  const handleSubmit = () => {
    const timestamp = new Date();
    addMessage(
      {
        user: user,
        message: typedMessage,
        id: `${user}_`,
        parent: '',
        timeCreated:timestamp
      }
    );
    setTypedMessage(null)
  }

  // const handleKeypress = (e) => {
  //   if (e.keyCode === 13) {
  //     handleSubmit();
  //   }
  // }

  return (
    <div className="chat-container flex-column">

      <h2> {user}'s Device </h2>
      <h4> Conversation with {otherUser} </h4>

      <div style={{width: '100%'}}>
        {
          chatMessages.map( message => <MessageItem message={message} author={user} key={message.id}/>)
        }
      </div>
          <textarea type="text" name="name" value={typedMessage ? typedMessage : ''}
            onChange={changeFun} /* onKeyPress={handleKeypress} */ />
          <input type="submit" value="Submit" onClick={handleSubmit}/>

    </div>
  );
}

export default ChatContainer;
