import styled from "styled-components";
import { Conversation } from "../Conversation";
import { Input } from "../Input";
import { SearchResult } from "../SearchResult";

export const Sidebar = ({
    onShowSearchResult = () => {},
    onHiddenSearchResult = () => {},
    isShowSearchResult = false
}) => {
    return (
        <Container>
            <div className="searchUser">
                <Input
                    placeholder="Nhập id, username hoặc địa chỉ email"
                    onFocus={onShowSearchResult}
                    onBlur={onHiddenSearchResult}
                >
                    <ion-icon name="search-outline"></ion-icon>
                </Input>
                {isShowSearchResult ? (
                    <div className="searchResult">
                        <SearchResult />
                    </div>
                ) : <></>}
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
        position: relative;

        .searchResult {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
        }
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