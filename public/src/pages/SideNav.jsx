import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import Logo1 from "../assets/logo1.png";

function SideNav({currentUser}) {
    return (
        <>
            {currentUser && (
                <Container>
                    <div className="brand">
                        <img src={Logo1} alt="logo" />
                        <h3>Maskify</h3>
                    </div>
                    <div className="buttons">
                        <div className="routes"><h3>Change Avatar</h3></div>
                        <div className="routes"><h3>Chat</h3></div>
                        <div className="routes"><h3>Compose</h3></div>
                        <div className="routes last-route"><h3>LogOut</h3></div>
                        <div className="_gap"></div>
                    </div>
                    <div className="nav-header">
                            <div className="avatar">
                                <img 
                                    src={`data:image/svg+xml;base64,${currentUser.avatarImage}`}  
                                    alt = "avatar"
                                />
                            </div>
                            <div className="username">
                                <h2>{currentUser.username}</h2>
                            </div>
                    </div>
                </Container>
            )}
        </> 
    );
}

const Container = styled.div`
    background-color: #080420;
    display: grid;
    grid-template-rows: 10% 75% 15%;
    overflow: hidden;
    .brand {
        background-color: #ffffff39;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        img{
            height: 4rem;
            border-radius:30%;
        }
        h3{
            color: white;
            text-transform: uppercase;
        }
    }
    .nav-header{
            background-color: #0d0d30;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            .avatar{
                img{
                    heignt: 5rem;
                    width: 3.5rem;
                }
            }
            .username{
                h2{
                    color: white;
                }
            }
    }
    .buttons{
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;
        gap: 0.5rem;
        background-color: #080420;
        justify-content: flex-end;
        .routes {
            ${'' /* background-color: #ffffff39; */}
            min-height: 1.5rem;   
            width: 100%;
            cursor: pointer;
            border-radius: 0.2rem;
            padding: 0.4rem;
            padding-left:1.5rem;
            ${'' /* gap: rem; */}
            align-items: center;
            display: flex;
            transition: 0.5s ease-in-out;
            h3{
                color: white;
            }
        }
        ._gap{
            height: 1.2rem;
            width:100%;
        }
        .routes:hover {
            background-color: #ffffff39;
            transition: 0.5s ease-in-out;
        }
    }
`;

export default SideNav;


