import styled from "styled-components";
import { SearchResultItem } from "../SearchResultItem";

export const SearchResult = ({
    searchResult = [],
    onCreateConversation = () => {}
}) => {
    return (
        <Container>
            {searchResult.length ? searchResult.map(user => {
                const onclick = () => onCreateConversation(user._id);
                return (
                    <SearchResultItem key={user._id} data={user} onclick={onclick} />
                );
            }) : (
                <p>no user</p>
            )}
        </Container>
    );
};

const Container = styled.div`
    background-color: #242020;
    width: 100%;
    min-height: 400px;
`;