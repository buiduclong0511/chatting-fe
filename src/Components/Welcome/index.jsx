import styled from "styled-components";

export const Welcome = ({
    username = ""
}) => {
    return (
        <Container>
            <div className="content">
                <p className="welcomeHeading">Welcome!</p>
                <p className="username">{username}</p>
            </div>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;

    .welcomeHeading {
        margin-top: 100px;
        font-size: 50px;
    }

    .username {
        font-size: 25px;
        font-weight: 700;
    }
`;