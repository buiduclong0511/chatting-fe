import styled from "styled-components";
import { Sidebar } from "../../Components";

export const AppScreen = () => {
    return (
        <Container>
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="main">
                main
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
    }
`;