import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { conversationApi, messageApi, userApi } from "../../Api";

import { Message, ProfileModal, Sidebar, Welcome } from "../../Components";
import { useDebounce } from "../../Hooks";
import { authSelector, logout } from "../../Redux/slices/auth";
import { sleep } from "../../Util";

export const AppScreen = () => {
    const [firstTimeAccess, setFirstTimeAccess] = useState(true);
    const [isShowSearchResult, setIsShowSearchResult] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [isShowProfile, setIsShowProfile] = useState(false);
    const [keySearch, setKeySearch] = useState("");
    const [conversations, setConversations] = useState([]);
    const [currentChatInfo, setCurrentChatInfo] = useState(null);
    const [messages, setMessages] = useState([]);

    console.log(messages);

    const dispatch = useDispatch();
    const userInfo = useSelector(authSelector).userInfo;


    // effect functions
    const fetchConversations = async () => {
        try {
            const res = await conversationApi.getConversationsBySenderId(userInfo._id);
            setConversations(res.data.conversations);
        } catch (err) {
            console.log(err);
        }
    };
    
    const fetchMessages = async () => {
        try {
            if (currentChatInfo) {
                const res = await messageApi.getMessagesByConversationId(currentChatInfo._id);
                setMessages(res.data.messages);
            }
        } catch (err) {
            console.log(err);
        }
    };
    // effect functions



    // effect
    useEffect(() => {
        fetchConversations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        fetchMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentChatInfo]);
    // effect


    
    // debounce
    useDebounce(() => {
        if (keySearch) {
            userApi.search(keySearch)
                .then(res => {
                    setSearchResult(res.data.users);
                })
                .catch(err => {
                    console.log(err);
                    setSearchResult([]);
                });
        }
    }, 800, [keySearch]);
    //debounce



    // handle functions
    const handleShowSearchResult = () => {
        setIsShowSearchResult(true);
    };
    
    const handleHiddenSearchResult = async () => {
        await sleep(200);
        setIsShowSearchResult(false);
    };

    const handleToggleShowProfile = () => {
        setIsShowProfile(!isShowProfile);
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    const handleChangeKeySearch = (event) => {
        setKeySearch(event.target.value.trim());
    };

    const handleCreateConversation = (receiverId) => {
        conversationApi.createNewConversation({
            senderId: userInfo._id,
            receiverId
        })
        .then(res => console.log(res));
    };

    const handleClickConversation = (conversation) => {
        setFirstTimeAccess(false);
        setCurrentChatInfo(conversation);
    };
    // handle functions

    return (
        <Container>
            {isShowProfile && <ProfileModal onClose={handleToggleShowProfile} onLogout={handleLogout} />}
            <div className="sidebar">
                <Sidebar 
                    onShowSearchResult={handleShowSearchResult}
                    onHiddenSearchResult={handleHiddenSearchResult}
                    isShowSearchResult={isShowSearchResult}
                    onToggleShowProfile={handleToggleShowProfile}
                    keySearch={keySearch}
                    onChangeKeySearch={handleChangeKeySearch}
                    searchResult={searchResult}
                    onCreateConversation={handleCreateConversation}
                    conversations={conversations}
                    onClickConversation={handleClickConversation}
                />
            </div>
            <div className="main">
                {firstTimeAccess ? (
                    <Welcome username={userInfo.username} id={userInfo._id} />
                ) : (
                    <>
                        <div className="header">
                            {currentChatInfo.members.find(member => member._id !== userInfo._id).username}
                        </div>
                        <div className="listMessage">
                            {messages.map(message => {
                                console.log(message);
                                const isMe = userInfo._id === message.sender._id;
                                return (
                                    <Message
                                        key={message._id}
                                        isMe={isMe}
                                        username={message.sender.username}
                                        message={message.text}
                                    />
                                );
                            })}
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

        .header {
            padding: 20px;
            border-bottom: 1px solid #000;
            box-shadow: 0 0 5px #000;
        }

        .listMessage {
            flex: 1;
            overflow-y: scroll;
            padding-right: 10px;
            padding-top: 20px;

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