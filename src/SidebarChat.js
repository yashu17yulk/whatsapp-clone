import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './sidebar.css'
function SidebarChat({addnewchat}) {

    const[seed, setSeed] = useState("");
    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000))
    },[])

    return (

        !addnewchat ? (
            <div className=" Sidebar__chat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebar__chatInfo"> 
            <h2 className="h2">React Tutorials</h2>
            <p className="p"> Last Message...</p>
            </div>
        </div>
       
        ) :(
        <div className=" Sidebar__chat">
            <h2>add new chat</h2>
        </div>
    
    )
    )
}
export default  SidebarChat