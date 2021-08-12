import styled from "styled-components";

export const Button = ({
    title = ""
}) => {
    return (
        <Container>
            <button className="button">{title}</button>
        </Container>
    );
};

const Container = styled.div`
    margin-top: 10px;
    width: 100%;

    .button {
        background-color: #341647;
        color: #fff;
        border: 1px solid #fff;
        width: 100%;
        padding: 10px 0;
        cursor: pointer;
        transition: 300ms;

        &:hover {
            background-color: #ee7b0f;
        }
    }
`;