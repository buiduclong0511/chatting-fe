import styled from "styled-components";
import { Conversation } from "../Conversation";
import { Input } from "../Input";

export const Sidebar = () => {
    return (
        <Container>
            <div className="searchUser">
                <Input
                    placeholder="Nhập id, username hoặc địa chỉ email"
                >
                    <ion-icon name="search-outline"></ion-icon>
                </Input>
            </div>

            <div className="listFriends">
                <Conversation 
                    username="username"
                    newestMessage="newest message"
                />
                <Conversation 
                    username="username"
                    newestMessage="newest message"
                />
                <Conversation 
                    username="username"
                    newestMessage="newest message"
                />
                <Conversation 
                    username="username"
                    newestMessage="newest message"
                />
                <Conversation 
                    username="username"
                    newestMessage="newest message"
                />
            </div>
        </Container>
    );
};

const Container = styled.div`
    min-height: 100vh;
    background-color: #201f22;
    display: flex;
    flex-direction: column;

    .searchUser {
        border-bottom: 1px solid #ccc;
        height: 80px;
        padding: 10px;
    }

    .listFriends {
        overflow-y: scroll;
        height: calc(100vh - 80px);

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
`;