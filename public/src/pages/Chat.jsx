import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { allUsersRoute, host } from "../utils/APIRoutes";
import Contacts from "./Contacts";
import Welcome from "./Welcome";
import ChatContainer from "./ChatContainer";
import { io } from "socket.io-client";



function Chat(){

    const socket = useRef();
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false);
    const [contacts, setContacts] = useState([]);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [currentChat, setCurrentChat] = useState(undefined);
    
    
    useEffect( () =>{
        async function fetchCurrentUser() {
            if(!localStorage.getItem("chat-app-user")){
                navigate("/login");
            } else {
                setCurrentUser ( await JSON.parse(localStorage.getItem("chat-app-user")));
                setIsLoaded(true);
            }
        };
        fetchCurrentUser();
    }, []);

    useEffect(() => {
        if(currentUser) {
            socket.current = io(host);
            socket.current.emit("add-user", currentUser._id);
        }
    },[currentUser]);

    useEffect(() =>{
        async function fetchContacts(){
            
            if(currentUser){
                if(currentUser.isAvatarImageSet){
                    console.log("current");
                    const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
                    setContacts(data.data);
                } else {
                    navigate("/setAvatar");
                }
            }
        };
        fetchContacts();

    },[currentUser]);
    const handleChatChange = (chat) =>{
        setCurrentChat(chat);
    }
    return (
        <Container>
            <div className="container">
                <Contacts contacts={contacts} currentUser={currentUser} changedChat={handleChatChange} ></Contacts>
                {isLoaded && currentChat === undefined ? (
                    <Welcome currentUser = {currentUser} ></Welcome>
                ):(<ChatContainer currentChat = {currentChat} currentUser={currentUser} socket={socket}></ChatContainer>
                )}
                
            </div>
        </Container>
    )
};

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    background-color: #131324;

    .container{
        height: 85vh;
        width: 85vw;
        background-color: #00000076;
        display: grid;
        grid-template-columns: 25% 75%;
         @media screen and (min-width: 720px) and (max-width: 1080px){
            grid-template-columns: 35% 65%;
         }
    }

`;


export default Chat;