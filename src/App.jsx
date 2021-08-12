import styled from "styled-components";
import { AppScreen, LoginScreen } from "./Containers";

export const App = () => {
    const userInfo = {
        email: "buiduclong0511@gmail.com",
        _id: "123kdhfkdshk23424",
        socketId: "ksdhfkshdkf"
    };

    return (
        <Container className="App">
            {false ? (
                <LoginScreen />
            ) : (
                <AppScreen />
            )}
        </Container>
    );
};

const Container = styled.div`
    min-height: 100vh;
    background-color: ${p => p.theme.colors.main};
`;