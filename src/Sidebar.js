// import { Avatar, IconButton } from 'material-ui/core';
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { IconButton,Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './sidebar.css';
import SidebarChat from './SidebarChat';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">

            <Avatar/>


      <div className="sidebar_headerRight">

     <IconButton> 
     < DonutLargeIcon/>
     </IconButton>
     
     <IconButton> 
     <ChatIcon/>
     </IconButton>

     <IconButton> 
     <MoreVertIcon/>
     </IconButton>

          </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                <SearchIcon/>
                <input type="text" placeholder="searh 
                or start a new chat"></input>


        </div>
        </div>
        <div className="sidebar_chats">
             <SidebarChat addnewchat/>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            
        </div>

        </div>
    )
}

export default Sidebar
