import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./chat.css"
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
  return (
    <div className="chat">
        <div className="chat__header">
        <Avatar/>

            <div className="chat_headerInfo">
                <h3> Room Name</h3>
                <p>Last Seen...</p>
            </div>

             
        <div className="header__right">
         <IconButton>
            <SearchIcon></SearchIcon>
         </IconButton>
         <IconButton>
    < AttachFileIcon></AttachFileIcon>
    </IconButton>
    <IconButton>
    <MoreVertIcon></MoreVertIcon>

    </IconButton>


        </div>

        </div>

       <div className="chat__body">
        <p className="chat__message
        chat__reciever">
            <span className="chat__name">
                Mahabeer singh
            </span>
            This is text message

            <span className="chat__time">12:40 PM</span>
        </p>
        <p className="chat__message">
            <span className="chat__name">
                Mahabeer singh
            </span>
            This is text message

            <span className="chat__time">12:40 PM</span>
        </p>
        <p className="chat__message">
            <span className="chat__name">
                Mahabeer singh
            </span>
            This is text message

            <span className="chat__time">12:40 PM</span>
        </p>

       </div>
       
    <div className="chat__footer">

<EmojiEmotionsIcon>

</EmojiEmotionsIcon>
<AttachFileIcon></AttachFileIcon>
<form>
      <input type="text" placeholder="Type your message"/>
      <input type="submit"/>
</form>
<MicIcon></MicIcon>

    </div>

    </div>
  )
}
export default Chat