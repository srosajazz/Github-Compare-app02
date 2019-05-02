import React from "react";

import logo from "../../assets/logo.png";

import { Container, Form } from "./styles";

import CompareList from "../../components/CompareList";

const Main = () => (
    <div>
        <img src={logo} alt="Github Compare" />

        <Container>
            <Form>
                <input type="text" placeholder="user/repository" />
                <button type="submit">OK</button>
            </Form>
            <CompareList />
        </Container>
    </div>
);

export default Main;
