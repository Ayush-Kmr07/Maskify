import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SideNav from "./SideNav";
import PostContainer from "./PostContainer";

function Posts() {

    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(undefined);
    const [isLoaded, setIsLoaded] = useState(false);
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

    return (
        <>
            <Container>
                <div className="container">
                    <SideNav currentUser={currentUser}></SideNav>
                    <PostContainer></PostContainer>
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
`;

export default Posts;


