import styled from "styled-components";

export const SearchResultItem = () => {
    return (
        <Container>
            <div className="username">username</div>
            <p className="userId">ID: skdfhksfksdjfgk</p>
        </Container>
    );
};

const Container = styled.div`
    padding: 10px;
    border-bottom: 1px solid #3f3d3d;
    cursor: pointer;

    .username {
        padding: 5px 0;
    }

    .userId {
        font-size: 14px;
    }
`;