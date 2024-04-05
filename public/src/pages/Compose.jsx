import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SideNav from "./SideNav";
import Picker from "emoji-picker-react";
import { IoMdSend } from "react-icons/io";
import {BsEmojiSmileFill} from "react-icons/bs";


function Compose() {

    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(undefined);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [post, setPost] = useState("");

    const handleEmojiPickerHideShow = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };
    const handleEmojiClick = (event,emoji) => {
        let Post = post;
        Post += emoji.emoji;
        setPost(Post);
    };
    useEffect( () => {
        async function fetchCurrentUser() {
            if(!localStorage.getItem("chat-app-user")){
                navigate("/login");
            } else {
                setCurrentUser(await JSON.parse(localStorage.getItem("chat-app-user")));
            }
        };
        fetchCurrentUser();
    },[]);
    return (
        <>
            <Container>
                <div className="container">
                    <SideNav currentUser={currentUser}></SideNav>
                    <div className="compose-container">
                        <div className="slogan-container">
                            <p>"Don't hold back your thoughts, release them freely, anonymously!"</p>
                        </div>
                        <div className="form-container">
                            <div className="button-container" >
                                <div className="emoji">
                                    <BsEmojiSmileFill onClick={handleEmojiPickerHideShow}/>
                                    {showEmojiPicker && <Picker height={350} width={275} onEmojiClick={(emoji,event) => handleEmojiClick(event,emoji) } theme="dark" size={10}/>}
                                </div>
                            </div>     
                            <form className="input-container" >
                                <textarea  placeholder="What's your thought?"  value={post} onChange={(e)=>setPost(e.target.value)} />
                                <button className="submit">
                                    <IoMdSend/>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

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
        height: 100vh;
        width: 100vw;
        background-color:#131324 ;
        display: grid;
        grid-template-columns: 20% 75%;
         @media screen and (min-width: 720px) and (max-width: 1080px){
            grid-template-columns: 35% 65%;
         }
    }
    .slogan-container{
        display:flex;
        align-items:center;
        justify-content:center;
        p{
            color:white;
            font-size:23px;
        }
    }
    .compose-container{
        display: grid;
        grid-template-rows: 60% 40%;
        align-items:center;
    }
    .form-container {
        display: flex;
        align-items: center;
        padding: 15px; /* Add padding for spacing */
        height:100%;
    }
    .button-container {
        display: flex; 
        align-items: center;
        color: white;
        gap: 1rem;
        .emoji {
            position: relative;
            padding-right: 10px;
            padding-left: 7px;
            svg {
                font-size: 1.5rem;
                color: #ffff00c8;
                cursor: pointer;
            }
            element.style{
                height: 320px;
                width: 250px;
                
            }
            .EmojiPickerReact {
                position: absolute;
                top: -375px;
                background-color: #080420;
                box-shadow: 0 5px 10px #9a86f3;
                border-color: #9186f3;
                .emoji-categories {
                    button {
                        filter: contrast(0);
                    }
                }
                .emoji-search: before {
                    background-color: transparent;
                    border-color: #9186f3;
                }
                .emoji-group: before {
                    background-color: #080420;
                }
                .epr_q53mwh {
                    height: 50px;
                    width:100%;
                    
                }
                
            }
            
        } 
    }
    .input-container {
        width: 100%;
        border-radius: 2rem;
        display: flex;
        align-content: center;
        gap: 2rem;
        background-color:#ffffff34;
        textarea {
            resize: none;
            width: 90%;
            height:150px;
            padding-top:15px;
            padding-bottom: 20px;
            padding-left: 25px;
            background-color: transparent;
            color: white;
            border: none;
            font-size: 1.2rem;
            &::selection {
               background-color: #9186f3;
            }
            &:focus {
                outline: none;
            }
            overflow: auto;
            &::-webkit-scrollbar {
                width: 0.2rem;
                &-thumb {
                    background-color: #ffffff39;
                    width: 0.1rem;
                    border-radius: 1rem;
                }
            }
        }
        button {
            padding: 0.3rem 2rem;
            border-radius: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #9a86f3;
            border: none;
            cursor: pointer;
           
            @media screen and (min-width: 720px) and (max-width: 1080px) {
                padding: 0.3rem 1rem;
                svg {
                    font-size: 1rem;
                }
            }
            svg{
                font-size: 2rem;
                color:white;
            }
        }
           
    }

`;

export default Compose;