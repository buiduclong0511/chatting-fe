import { useState } from "react";
import styled from "styled-components";
import { Message, Sidebar, Welcome } from "../../Components";

export const AppScreen = () => {
    const [firstTimeAccess, setFirstTimeAccess] = useState(false);
    const [isShowSearchResult, setIsShowSearchResult] = useState(false);

    const handleShowSearchResult = () => {
        setIsShowSearchResult(true);
    };
    
    const handleHiddenSearchResult = () => {
        setIsShowSearchResult(false);
    };

    return (
        <Container>
            <div className="sidebar">
                <Sidebar 
                    onShowSearchResult={handleShowSearchResult}
                    onHiddenSearchResult={handleHiddenSearchResult}
                    isShowSearchResult={isShowSearchResult}
                />
            </div>
            <div className="main">
                {firstTimeAccess ? (
                    <Welcome username="Bùi Đức Long" />
                ) : (
                    <>
                        <div className="listMessage">
                            <Message
                                username="username"
                                message="message message message message message message message message message message message message "
                            />
                            <Message 
                                isMe
                                username="username"
                                message="message message message message message message message message message message message message "
                            />
                            <Message
                                username="username"
                                message="message"
                            />
                            <Message 
                                isMe
                                username="username"
                                message="message"
                            />
                            <Message
                                username="username"
                                message="message"
                            />
                            <Message 
                                isMe
                                username="username"
                                message="message"
                            />
                            <Message
                                username="username"
                                message="message"
                            />
                        </div>
                        <div className="inputMessage">
                            <div className="input">
                                <input type="text" />
                            </div>
                            <div className="btn">
                                <button className="sendBtn">
                                    <ion-icon name="send-outline"></ion-icon>
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    min-height: 100vh;

    .sidebar {
        flex: 1;
    }

    .main {
        flex: 4;
        height: 100vh;
        display: flex;
        flex-direction: column;

        .listMessage {
            flex: 1;
            overflow-y: scroll;

            /* width */
            &::-webkit-scrollbar {
                width: 5px;
            }
            
            /* Track */
            &::-webkit-scrollbar-track {
                background: #ccc; 
            }
            
            /* Handle */
            &::-webkit-scrollbar-thumb {
                background: #888; 
            }
            
            /* Handle on hover */
            &::-webkit-scrollbar-thumb:hover {
                background: #555; 
            }
        }

        .inputMessage {
            display: flex;
            background-color: #3b383d;
            border-top: 1px solid #ccc;

            .input {
                flex: 1;

                input {
                    background-color: transparent;
                    width: 100%;
                    border: none;
                    outline: none;
                    padding: 20px;
                    color: #fff;
                    font-size: 18px;
                }
            }

            .btn {
                width: 80px;

                button {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                    background-color: transparent;
                    border: none;
                    border-left: 1px solid #ccc;

                    ion-icon {
                        font-size: 25px;
                        color: #fff;
                    }
                }
            }
        }
    }
`;