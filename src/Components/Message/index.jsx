import styled from "styled-components";

export const Message = ({
    isMe = false,
    username = "",
    message = ""
}) => {
    return (
        <Container isMe={isMe}>
            {isMe ? (
                <>
                    <div className="message">
                        {message}
                    </div>
                    <div className="username">
                        {username}
                    </div>
                </>
            ) : (
                <>
                    <div className="username">
                        {username}
                    </div>
                    <div className="message">
                        {message}
                    </div>
                </>
            )}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: ${p => p.isMe ? "flex-end" : "flex-start"};

    .message {
        max-width: 300px;
        background-color: #ccc;
        padding: 10px;
        border-radius: 8px;
        color: #000;
        margin: 0 5px;
    }

    .username {
        padding: 5px;
    }
`;  