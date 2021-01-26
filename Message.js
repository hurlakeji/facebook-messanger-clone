import React, {forwardRef} from 'react';
import {Card, CardContent, Typography} from  '@material-ui/core';
import './Message.css';

const Message = forwardRef (({message, username }, ref) => { 
    // this line help us to check if the user is logged in or not and help us 
    //differntiate their logged in user, every card has normal style colour
    //but a logged in user get the message_userCard class in css; 
    const isUser = username === message.username;
    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}> {/*this is just an ordinary if statement*/}
        {/*this is like an if-else statement*/}
             <Card className={isUser ? "message_userCard" : "message_guestCard"}> {/*we are using the BEM styling convention "message" is the component 
            we are styling while "guestcard" is the element */}
        <CardContent>
                <Typography
                color="white"
                variant="h5"
                component="h2"
            >
            {!isUser && `${message.username || 'Unknown User' }:`}  {message.message} 
            </Typography>
        </CardContent>
    </Card>
        
        </div>
            
            
       
    )
})

export default Message;