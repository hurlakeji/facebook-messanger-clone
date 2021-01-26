import React, { useState, useEffect } from 'react';
import { FormControl, Input, IconButton} from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

  function App(){
    const [input, setInput] = useState('');
    //set messages is our initial variable and it helps keeps a temporary state value and it's a short term memory, 
    //then SetInput helps us update the new value of our state when it has been rendered
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('');

    
    console.log(input);
    console.log(messages);

    useEffect(() =>{
      db.collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc=> ({id: doc.id, message: doc.data()})))
      });
 
    }, []);
   
   
    //now we are creating a send message fucntion that will be fired up from the button click
    
    useEffect(() =>{
      setUsername(prompt("Enter your username"));

    }, []);  //condition, this snippet of code will only run once when the app loads if this [] is left blank


    const sendMessage = (event) => {

      //this line of code helps prevent refresh as forms always refresh after button clicks
        event.preventDefault();
        db.collection('messages').add({
            message: input,
            username: username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
      //all the logic to send the message goes here
      //the input text here refers to the vlaue of the text field currently
      //this line set our input field or state to empty after state update;
      setInput('');
    }

    return (
      <div className="App">
      <img src="data:image/jpeg;base64,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" alt="fbmessanger-logo"/>
      <h1>Compliments of the season guys!!!</h1>
      <h2>Welcome {username} </h2>
    
        {/*input field*/}
        <form className = 'app_form'>
          <FormControl className = "app_formControl">
            <Input className="app_input" placeholder="Enter a message..."  value={input}  onChange= {event => setInput(event.target.value)} />
               
            <IconButton className= "app_iconButton" disabled= {!input} variant='contained' color='primary' type='submit' onClick = {sendMessage}>
              <SendIcon />

            </IconButton>
              
          </FormControl>
       
        </form>
        

        
        {/*message*/}

        <FlipMove>
        {
          messages.map(({id, message}) => (
          //   previously before the new comment the code was
          //<Message username={message.username} message= {message.text} using our message props to grab property and styling from the Message component
          //  we are calling our state this way cos they are now object and not string
          
          // we now use this now to be able to differntiate between a logged in and a non logged -
          //in user so that they can have their own different colour styling 
          <p> <Message key={id} username={username} message={message}/> </p> 
            
          ))
        }
        </FlipMove>

        
         
      </div>
          
          
    
    );
  

  }
 

export default App;
 