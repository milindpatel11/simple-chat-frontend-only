import {useState, useEffect} from 'react';
import UserContainer from '../components/UserContainer'

const dateone = new Date()
const datetwo = new Date(dateone.setMilliseconds(dateone.getMilliseconds() + 2000))

let chatMessagesCurrent = [
  {
    user: 'Alice',
    message: 'Hello Bob',
    id: 'Alice_1',
    parent: '',
    timeCreated: dateone
  },
  {
    user: 'Bob',
    message: 'Hi Alice',
    id: 'Bob_1',
    parent: '',
    timeCreated: datetwo
  }
]


function MainContainer() {

  const [ messageAdded, setMessageAdded] = useState(false)

  const chatMessages = chatMessagesCurrent

  // const chatMessages = chatMessagesCurrent.sort( function(a,b){
  //   return }
  // )


  const addMessage = (message) => {
    chatMessages.push(message);
    console.log(message);
    console.log(chatMessages);
    setMessageAdded(true);
  }

  useEffect ( () => {
    setMessageAdded(false);
    console.log('Effec ran');
  }, [messageAdded]  )

  return (
      <div className="both-users flex-row">
        <UserContainer user='Alice' otherUser='Bob' chatMessages={chatMessages}
          addMessage={addMessage} backg={'rgb(235, 235, 235'}/>
        <UserContainer user='Bob' otherUser='Alice' chatMessages={chatMessages}
          addMessage={addMessage} backg={'rgb(220, 220, 220)'} />
      </div>
  );
}

export default MainContainer;
