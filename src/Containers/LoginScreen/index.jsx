import { useState } from "react";
import styled from "styled-components";

import { Button, Input } from "../../Components";

export const LoginScreen = () => {
    const [registerValue, setRegisterValue] = useState({
        email: "",
        username: ""
    });

    const [loginValue, setLoginValue] = useState({
        email: ""
    });

    const handleChangeEmailRegister = (event) => {
        setRegisterValue({
            ...registerValue,
            email: event.target.value
        });
    };

    const handleChangeUsernameRegister = (event) => {
        setRegisterValue({
            ...registerValue,
            username: event.target.value
        });
    };

    
    const handleChangeEmailLogin = (event) => {
        setLoginValue({
            email: event.target.value
        });
    };
    
    console.log(loginValue, registerValue);

    return (
        <Container>
            <div className="form">
                <h2 className="heading">Đăng ký</h2>
                <div className="inputGroup">
                    <Input
                        id="emailRegister"
                        value={registerValue.email}
                        placeholder="Nhập địa chỉ email"
                        onChange={handleChangeEmailRegister}
                    >
                        <ion-icon name="mail-outline"></ion-icon>
                    </Input>
                    <Input
                        id="usernameRegister"
                        value={registerValue.username}
                        placeholder="Nhập username"
                        onChange={handleChangeUsernameRegister}
                    >
                        <ion-icon name="person-outline"></ion-icon>
                    </Input>
                </div>
                <Button title="Đăng ký" />
            </div>
            <div className="form">
                <h2 className="heading">Đăng nhập</h2>
                <div className="inputGroup">
                    <Input
                        id="emailLogin"
                        value={loginValue.email}
                        placeholder="Nhập địa chỉ email"
                        onChange={handleChangeEmailLogin}
                    >
                        <ion-icon name="mail-outline"></ion-icon>
                    </Input>
                </div>
                <Button title="Đăng nhập" />
            </div>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    
    .form {
        border: 1px solid #fff;
        padding: 20px 10px 30px 10px;
        margin: 20px;
        min-height: 250px;
        display: flex;
        flex-direction: column;

        .heading {
            margin-bottom: 10px;
        }

        .inputGroup {
            flex: 1;
        }
    }
`;