import React from 'react'

import { Card, CardContent, Typography } from '@material-ui/core';
import Moment from "react-moment";
import "./Message.css";
const Message = ({ username, message }) => {
    const isUser = username === message.username;
    return (

        <div className={`message ${isUser ? 'message__userCard' : 'message__guestCard'}`}>
            <CardContent className="cc">
                <Typography color="textSecondary" gutterBottom className="message__user">
                    {!isUser && `${message.username || 'Unknow User'}`}
                </Typography>
                <Typography color="white" component="h1">
                    {message.message}
                </Typography>
                {/* <Typography color="textSecondary">
                    <Moment from={new Date()}>{message.timestamp.seconds}</Moment>
                </Typography> */}
            </CardContent>
        </div>

    )
}

export default Message
