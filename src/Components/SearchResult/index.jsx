import styled from "styled-components";
import { SearchResultItem } from "../SearchResultItem";

export const SearchResult = () => {
    return (
        <Container>
            <SearchResultItem />
            <SearchResultItem />
            <SearchResultItem />
            <SearchResultItem />
            <SearchResultItem />
            <SearchResultItem />
        </Container>
    );
};

const Container = styled.div`
    background-color: #242020;
    width: 100%;
    min-height: 400px;
`;