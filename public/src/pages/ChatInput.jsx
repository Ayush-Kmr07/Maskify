import React, {useState} from "react";
import styled from "styled-components";
import Picker from "emoji-picker-react";
import { IoMdSend } from "react-icons/io";
import {BsEmojiSmileFill} from "react-icons/bs";

function ChatInput({handleSendMsg}){
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [msg, setMsg] = useState("");

    const handleEmojiPickerHideShow = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };
    const handleEmojiClick = (event,emoji) => {
        let message = msg;
        message += emoji.emoji;
        setMsg(message);
    };

    const sendChat = (event) => {
        event.preventDefault();
        if(msg.length>0) {
            console.log("before");
            handleSendMsg(msg);
            console.log("After");
            setMsg("");
        }
    }

    return (
        <Container>
            <div className="button-container" >
                <div className="emoji">
                    <BsEmojiSmileFill onClick={handleEmojiPickerHideShow}/>
                    {showEmojiPicker && <Picker height={350} width={275} onEmojiClick={(emoji,event) => handleEmojiClick(event,emoji) } theme="dark" size={10}/>}
                </div>
            </div>
            <form className="input-container" onSubmit={(e)=>sendChat(e)}>
                <input typr="text" placeholder="type your message here" value={msg} onChange={(e)=>setMsg(e.target.value)} />
                <button className="submit">
                    <IoMdSend/>
                </button>
            </form>
        </Container>
    );
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 5% 95%;
    align-items: center;
    background-color: #080420;
    padding: 0 2rem;
    padding-bottom: 0.3rem;
    @media screen and (min-width: 720px) and (max-width: 1080px){
        padding 0 1rem;
        gap: 1rem;
    }
    .button-container {
        display: flex; 
        align-items: center;
        color: white;
        gap: 1rem;
        .emoji {
            position: relative;
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
        input {
            width: 90%;
            background-color: transparent;
            color: white;
            border: none;
            padding-left: 1rem;
            font-size: 1.2rem;
            &::selection {
               background-color: #9186f3;
            }
            &:focus {
                outline: none;
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

export default ChatInput;